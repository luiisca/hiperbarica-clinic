"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface Props {
  Comp: React.ElementType; // 👈️ type it as React.ElementType
}

const Wrapper = (props: Props) => {
  // 👇️ component names must start with capital letter
  return <props.Comp />;
};

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Wrapper
        Comp={() => (
          <div className="min-h-40 mx-auto flex h-48 space-x-8 overflow-hidden">
            <Skeleton className="h-full w-full shrink-0 xl:w-1/2" />
            <Skeleton className="h-full w-full shrink-0 xl:w-1/2" />
          </div>
        )}
      />
    </div>
  );
};

export default App;
