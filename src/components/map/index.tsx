"use client";

import {
  GoogleMap,
  Marker as BaseMarker,
  useGoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import { isMobile } from "react-device-detect";
import Image from "next/image";

import { RiFullscreenExitFill, RiFullscreenFill } from "react-icons/ri";
import { FaRoute } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsClock } from "react-icons/bs";
import { MdArrowLeft, MdArrowRight, MdClose } from "react-icons/md";
import useFullscreenStatus from "./hooks/useFullscreenStatus";
import {
  BUSINESS_LOCATION,
  MAX_STARS,
  PLACE_DETAILS_FIELDS,
  PLACE_ID,
  ZOOM,
  getBusinessDirections,
  getUserLocation,
  loader,
} from "./helpers";
import React, {
  type Dispatch,
  useReducer,
  useRef,
  useCallback,
  useState,
  createContext,
  useEffect,
} from "react";
import { cn } from "@/utils/cn";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/core/button";
import Spinner from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useContext } from "react";
import { shimmer, toBase64 } from "@/utils/blur";
import { Separator } from "../ui/separator";
import BaseCarousel from "../carousel";
import { ADDRESS } from "@/utils/constants";
import { env } from "@/env.mjs";

type googleCoors = google.maps.LatLngLiteral;

interface IMapState {
  mapInstance: google.maps.Map | null;
  userCoors: googleCoors | null;
  routeVisible: boolean;
  placeDetails: google.maps.places.PlaceResult | null;
  placeDetailsInvisible: boolean | undefined;
  placeDetailsOpen: boolean | null;
}

type ACTIONTYPE =
  | { type: "STORE_MAP_INSTANCE"; map: google.maps.Map }
  | { type: "USER_COORS"; userCoors: googleCoors }
  | { type: "TOGGLE_ROUTE_VISIBILITY" }
  | {
      type: "STORE_PLACE_DETAILS";
      details: google.maps.places.PlaceResult | null;
    }
  | { type: "HIDE" }
  | {
      type: "TOGGLE_PLACE_DETAILS_OPEN";
      open?: boolean;
      invisible?: boolean;
    };

const mapInitialState: IMapState = {
  mapInstance: null,
  userCoors: null,
  routeVisible: false,
  placeDetails: null,
  placeDetailsInvisible: undefined,
  placeDetailsOpen: null,
};

const mapReducer = (state: IMapState, action: ACTIONTYPE): IMapState => {
  switch (action.type) {
    case "STORE_MAP_INSTANCE":
      return { ...state, mapInstance: action.map };
    case "USER_COORS":
      return { ...state, userCoors: action.userCoors, routeVisible: true };
    case "TOGGLE_ROUTE_VISIBILITY":
      return { ...state, routeVisible: !state.routeVisible };
    case "STORE_PLACE_DETAILS":
      return { ...state, placeDetails: action.details };
    case "TOGGLE_PLACE_DETAILS_OPEN":
      return {
        ...state,
        placeDetailsOpen: action.open || !state.placeDetailsOpen,
        placeDetailsInvisible: action.invisible,
      };
    default:
      return state;
  }
};

const MapContext = createContext({
  mapState: mapInitialState,
  dispatchMap: (() => {
    return;
  }) as Dispatch<ACTIONTYPE>,
});

// Place Details
function StarImage({ src }: { src: string }) {
  return (
    <div className="relative h-4 w-4">
      <Image src={src} alt="star image" fill sizes="10vw" />
    </div>
  );
}
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {/* display whole stars */}
      {Array.from({ length: Math.trunc(rating) }, (_, i) => (
        <StarImage src={"/stars/star_rate.png"} key={i} />
      ))}
      {/* display star for decimal part */}
      {MAX_STARS - Math.trunc(rating) > 0 && (
        <StarImage
          src={`/stars/${
            (+`${rating}`.slice(2) >= 8 && "star_rate") ||
            (+`${rating}`.slice(2) >= 3 && "star_rate_half") ||
            "star_rate_empty"
          }.png`}
        />
      )}
      {/* display empty stars */}
      {MAX_STARS - (Math.trunc(rating) + 1) > 0 &&
        Array.from({ length: MAX_STARS - (Math.trunc(rating) + 1) }, (_, i) => (
          <StarImage src="/stars/star_rate_empty.png" key={i} />
        ))}
    </div>
  );
}

const PlaceDetails = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function PlaceDetails(_, ref) {
  const { mapState, dispatchMap } = useContext(MapContext);
  const [placeDetails, setPlaceDetails] =
    useState<google.maps.places.PlaceResult | null>(null);
  useEffect(() => {
    if (!placeDetails && mapState.mapInstance) {
      const service = new google.maps.places.PlacesService(
        mapState.mapInstance
      );

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: PLACE_DETAILS_FIELDS,
        },
        (
          results: google.maps.places.PlaceResult | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            setPlaceDetails(results);
          }
        }
      );
    }
  }, [mapState.mapInstance, placeDetails]);

  const details = {
    img: {
      src: placeDetails?.photos?.[0]?.getUrl() || "/logo.svg",
      alt: placeDetails?.name || "",
    },
    name: placeDetails?.name,
    rating: placeDetails?.rating || 0,
    reviewsQtt: placeDetails?.user_ratings_total || 0,
    adress: placeDetails?.vicinity,
    isOpen: placeDetails?.opening_hours?.isOpen(),
    photos: placeDetails?.photos?.slice(1) || [],
    reviews: placeDetails?.reviews || [],
  };

  return (
    <div
      className={cn(
        "relative z-10 inline-block h-full w-[75%] -translate-x-full overflow-visible bg-primary-200 text-sm opacity-100 transition-all duration-300 mob-me:w-[50%] md:w-[35%]",
        mapState.placeDetailsInvisible ? "opacity-0" : "animate-opacity-100",
        mapState.placeDetailsOpen ? "translate-x-0" : "-translate-x-full"
      )}
      ref={ref}
    >
      {placeDetails ? (
        <div className="h-full w-full overflow-y-auto">
          {/* image */}
          <div className="relative h-2/5 w-full">
            <Image
              loader={loader}
              src={details.img.src}
              alt={details.img.alt}
              fill
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              sizes="70vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col space-y-6 px-4 py-3">
            {/* stars */}
            {details.reviewsQtt > 0 && (
              <div>
                <p className="mb-1 text-xl text-gray-300">{details.name}</p>
                <div className="flex items-center space-x-1">
                  <p className="text-sm">{details.rating}</p>
                  <Stars rating={details.rating} />
                  <p className="text-sm">{details.reviewsQtt} reseñas</p>
                </div>
              </div>
            )}

            {/* adress and opening hours */}
            <div>
              {details.reviewsQtt > 0 && <Separator />}
              <div className="mb-3 mt-4 flex items-center space-x-4 text-gray-300">
                <GoLocation className="shrink-0 stroke-[2%] text-xl text-primary-600" />
                <p>{details.adress}</p>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <BsClock className="shrink-0 stroke-[2%] text-xl text-primary-600" />
                <p>{details.isOpen ? "Abierto" : "Cerrado"}</p>
              </div>
              <Separator className="mt-4" />
            </div>

            {/* photos */}
            <div className="flex h-56 w-full flex-col">
              <p className="mb-1 text-lg text-gray-300">Fotos</p>
              <BaseCarousel
                Skeleton={() => <Skeleton className="w-full" />}
                slidesCopy={details.photos}
                className={cn(
                  "relative -mx-4 h-full overflow-x-hidden px-4 pb-4 blog-lg:pb-0 [&_.swiper-pagination]:invisible [&_.swiper-slide]:h-full [&_.swiper-wrapper]:h-full"
                )}
                spaceBetween={10}
                arrowsClasses={{
                  container: details.photos.length === 1 ? "hidden" : "",
                  prev: "w-10 h-10 text-xl translate-x-[10%]",
                  next: "w-10 h-10 text-xl -translate-x-[10%]",
                }}
              >
                {(photo) => (
                  <div className="relative h-full w-full overflow-hidden rounded-[9px]">
                    <Image
                      loader={loader}
                      src={photo.getUrl()}
                      fill
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475)
                      )}`}
                      sizes="60vw"
                      alt={`Foto de Clinica Hiperbarica del Sur Peru en ${ADDRESS}`}
                      className="object-cover object-center"
                    />
                  </div>
                )}
              </BaseCarousel>
            </div>

            {/* reviews */}
            {details.reviewsQtt > 0 && (
              <div>
                <p className="mb-1 text-lg text-gray-300">Reseñas</p>
                {details.reviews.map((review, i) => (
                  <div key={i}>
                    <div className="py-4">
                      {/* author */}
                      <div className="mb-3 flex items-center space-x-3 text-[15px] text-gray-300">
                        <div className="relative h-8 w-8">
                          <Image
                            src={review.profile_photo_url}
                            alt={`Foto de perfil de ${review.author_name}`}
                            fill
                            sizes="10vw"
                            className="object-cover object-center"
                          />
                        </div>
                        <p>{review.author_name}</p>
                      </div>
                      {/* rating */}
                      <div className="flex space-x-3 text-sm">
                        <Stars rating={review.rating || 0} />
                        <span>{review.relative_time_description}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-300">
                        {review.text}
                      </p>
                    </div>

                    {!(details.reviews.length == i + 1) && <Separator />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* hide details panel button */}
          <Button
            variant="icon"
            color="icon"
            onClick={() => {
              dispatchMap({
                type: "TOGGLE_PLACE_DETAILS_OPEN",
                invisible: true,
              });
            }}
            className={cn(
              "absolute right-3 top-3 z-[2] h-10 w-10 text-lg",
              "animate-in fill-mode-forwards",
              mapState.placeDetailsOpen ? "fade-in-100" : "fade-in"
            )}
          >
            <MdClose />
          </Button>

          {/* toggle details panel button */}
          {!mapState.placeDetailsInvisible && (
            <Button
              color="icon"
              variant="icon"
              onClick={() => {
                dispatchMap({ type: "TOGGLE_PLACE_DETAILS_OPEN" });
              }}
              className="absolute left-full top-1/2 z-20 flex h-[50px] w-[30px] -translate-y-1/2 items-center justify-items-start rounded-none rounded-r-sm px-1"
            >
              {mapState.placeDetailsOpen ? <MdArrowLeft /> : <MdArrowRight />}
            </Button>
          )}
        </div>
      ) : (
        <div className="h-full w-full">
          <Skeleton className="h-2/5 w-full" />
          <div className="flex flex-col space-y-6 px-4 py-3">
            {/* stars */}
            <div>
              <Skeleton className="mb-1 h-7" />
              <Skeleton className="h-4" />
            </div>
            {/* adress and opening hours */}
            <div>
              <Separator className="mb-4" />
              <Skeleton className="mb-3 h-7 " />
              <Skeleton className="mb-3 h-7 " />
              <Separator className="mt-4" />
            </div>
            {/* photos */}
            <Skeleton className="mb-1 h-7" />
            <Skeleton className="h-56 w-full rounded-[9px] px-4" />
          </div>
        </div>
      )}
    </div>
  );
});

// Route
function Marker({
  userCoors,
  animate,
}: {
  userCoors?: googleCoors;
  animate?: boolean;
}) {
  const { dispatchMap } = useContext(MapContext);
  const [bounce, setBounce] = useState(false);

  return (
    <div>
      <BaseMarker
        onClick={() => {
          if (!userCoors) {
            dispatchMap({
              type: "TOGGLE_PLACE_DETAILS_OPEN",
              open: true,
            });

            return;
          }
        }}
        animation={bounce ? google.maps.Animation.BOUNCE : undefined}
        onMouseOver={() => {
          animate && setBounce(true);
        }}
        onMouseOut={() => {
          animate && setBounce(false);
        }}
        cursor={userCoors ? "default" : "pointer"}
        title={userCoors ? "" : "Click para detalles"}
        position={userCoors || BUSINESS_LOCATION}
      />
    </div>
  );
}

function Route() {
  const { mapState } = useContext(MapContext);
  const { userCoors, routeVisible } = mapState;
  const map = useGoogleMap() as google.maps.Map;
  const ref = useRef<{
    directionsService: google.maps.DirectionsService | null;
    directionsRenderer: google.maps.DirectionsRenderer | null;
  }>({
    directionsService: null,
    directionsRenderer: null,
  });

  const removeDirections = useCallback((): void => {
    ref.current.directionsRenderer?.setMap(null);
    ref.current.directionsRenderer?.setDirections({ routes: [] });
  }, []);

  const centerBusiness = useCallback((): void => {
    map.setCenter(BUSINESS_LOCATION);
    map.setZoom(16);
  }, []);

  if (userCoors && routeVisible) {
    ref.current.directionsService = new google.maps.DirectionsService();
    ref.current.directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
    });
    ref.current.directionsRenderer.setMap(map);

    void ref.current.directionsService?.route(
      {
        origin: userCoors,
        destination: BUSINESS_LOCATION,
        travelMode: "DRIVING" as google.maps.TravelMode,
      },
      (result, status) => {
        if (status == "OK") {
          ref.current.directionsRenderer?.setDirections(result);
        }
      }
    );

    return (
      <>
        <Marker userCoors={userCoors} />
        <Marker animate />
      </>
    );
  } else {
    removeDirections();
    centerBusiness();

    return <Marker animate />;
  }
}

function ToggleRouteBttn({ className }: React.HTMLProps<typeof Button>) {
  const { mapState, dispatchMap } = useContext(MapContext);
  const { userCoors, routeVisible } = mapState;
  const [loadingRoute, setLoadingRoute] = useState(false);

  const storeUserCoors = useCallback(async (): Promise<void> => {
    setLoadingRoute(true);
    const pos = await getUserLocation();
    setLoadingRoute(false);
    dispatchMap({ type: "USER_COORS", userCoors: pos });
  }, [dispatchMap]);

  const toggleRoute = useCallback(() => {
    dispatchMap({ type: "TOGGLE_ROUTE_VISIBILITY" });
  }, [dispatchMap]);

  if (isMobile && userCoors) {
    return (
      <Button
        href={getBusinessDirections(userCoors)}
        target="_blank"
        className={cn("mx-auto mt-6", className)}
      >
        ¿Cómo llegar?
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="icon"
            color="icon"
            onClick={() => {
              if (!userCoors) {
                void storeUserCoors();
              } else {
                toggleRoute();
              }
            }}
            className={cn(
              "absolute left-1/2 z-50 mx-auto mt-6 -translate-x-1/2",
              loadingRoute ? "cursor-wait" : "",
              className
            )}
          >
            {loadingRoute ? (
              <Spinner />
            ) : (
              <span className="mb-2 flex h-full w-full items-center justify-center">
                <FaRoute />
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{routeVisible ? "Ocultar ruta" : "Mostrar ruta"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Map() {
  const [mapState, dispatchMap] = useReducer(mapReducer, mapInitialState);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setFullscreen] = useFullscreenStatus(containerRef);
  const placeDetailsRef = useRef<HTMLDivElement>(null);
  const mapPropsRef = useRef({
    zoom: ZOOM,
    center: BUSINESS_LOCATION,
    clickableIcons: false,
    options: {
      fullscreenControl: false,
      gestureHandling: "greedy",
    },
    mapContainerStyle: {
      height: "100%",
      width: "100%",
    },
  });

  const storeMapInstance = useCallback((map: google.maps.Map) => {
    dispatchMap({ type: "STORE_MAP_INSTANCE", map });
  }, []);

  return (
    <MapContext.Provider value={{ mapState, dispatchMap }}>
      <div ref={containerRef} className="relative">
        <div
          className={cn(
            "relative mx-auto my-0 w-full overflow-hidden rounded-2xl text-left shadow-[1px_1px_10px_0_rgb(116_192_252_/_15%)] transition-all hover:shadow-[1px_1px_10px_0_rgb(116_192_252_/_15%)]",
            isFullscreen
              ? "h-full rounded-none"
              : "h-[450px] max-w-[900px] blog-lg:h-[500px]"
          )}
        >
          <PlaceDetails ref={placeDetailsRef} />

          <div className="absolute left-0 top-0 h-full w-full">
            <GoogleMap {...mapPropsRef.current} onLoad={storeMapInstance}>
              <Route />
            </GoogleMap>

            {/* fullscreen button */}
            <button
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-[2px] bg-white text-xl text-gray-200 shadow-[rgb(0_0_0_/_30%)_0px_1px_4px_-1px] hover:text-gray-300"
              onClick={() => {
                setFullscreen();
              }}
            >
              {isFullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
            </button>
          </div>
        </div>
        <ToggleRouteBttn
          className={cn(isFullscreen ? "bottom-0 mx-auto mb-6" : "top-full")}
        />
      </div>
    </MapContext.Provider>
  );
}

export default function Renderer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
    region: "PE",
    language: "es",
  });

  if (loadError) {
    return (
      <div>
        <p>Oh no, algo salio mal...</p>
        <p>Prueba a recargar la pagina</p>
      </div>
    );
  }

  return isLoaded ? (
    <Map />
  ) : (
    <div className="mx-auto h-[450px] w-full max-w-[900px] overflow-hidden rounded-2xl blog-lg:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15600.817508002872!2d-76.9609675!3d-12.1664846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9f8f2833d65%3A0xad490f379af13ee0!2sHiperb%C3%A1rica%20Del%20Sur!5e0!3m2!1sen!2spe!4v1687279341569!5m2!1sen!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
