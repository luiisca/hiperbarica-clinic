declare module "@calcom/embed-react" {
  import type * as React from "react";
  type actions = "linkReady" | "__dimensionChanged" | "*";

  interface CalProps {
    calLink: string;
    style?: React.CSSProperties;
    config?: Record<string, string> & { theme: "light" | "dark" };
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
  export interface CalOnOptions {
    action: actions;
    callback: (
      e: CustomEvent<
        Record<string, string> & {
          type: actions;
          data: { iframeHeight: number; iframeWidth: number };
        }
      >
    ) => void;
  }

  const Cal: React.FC<CalProps>;
  export default Cal;

  export async function getCalApi() {
    return Promise.resolve(
      (command: "ui" | "on", options: CalUIOptions | CalOnOptions): void => ({})
    );
  }
}
