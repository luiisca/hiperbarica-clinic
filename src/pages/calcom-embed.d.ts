declare module "@calcom/embed-react" {
  import * as React from "react";

  interface CalProps {
    calLink: string;
    style?: React.CSSProperties;
  }

  export interface CalUIOptions {
    theme?: "light" | "dark";
    styles?: {
      branding?: {
        brandColor?: string;
      };
    };
    hideEventTypeDetails?: boolean;
  }

  export type ui = (command: "ui", options: CalUIOptions) => void;

  const Cal: React.FC<CalProps>;
  export default Cal;
  export function getCalApi(): Promise<ui>;
}
