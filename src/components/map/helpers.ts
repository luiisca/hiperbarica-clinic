import { Url } from "next/dist/shared/lib/router/router";

export type googleCoors = google.maps.LatLngLiteral;

export const BUSINESS_LOCATION: googleCoors = {
  lat: -12.1664846,
  lng: -76.9609675,
};
export const PLACE_ID = "ChIJZT2D8vi5BZER4D7xmjcPSa0";
export const PLACE_DETAILS_FIELDS: string[] = [
  "name",
  "rating",
  "user_ratings_total",
  "vicinity",
  "opening_hours",
  "photos",
  "reviews",
  "url",
];

export const ZOOM = 16;
export const MAX_STARS = 5;

export function getBusinessDirections(
  userCoors: google.maps.LatLngLiteral
): Url {
  return `https://www.google.com/maps/dir/${userCoors?.lat},${userCoors?.lng}/${BUSINESS_LOCATION.lat},${BUSINESS_LOCATION.lng}`;
}

export function getUserLocation(): Promise<google.maps.LatLngLiteral> {
  return new Promise<google.maps.LatLngLiteral>((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("🗺 COORS INSIDE navigator: ", position);
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(pos);
        },
        () => {
          console.log("❌ Error: the location service failed");
          reject("Error: the location service failed");
        }
      );
    } else {
      reject("Error: your browser doesn't support geolocation");
    }
  });
}

export const loader = ({
  src,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  return `${src}&q=${quality || 75}`;
};
