interface InitConfig {
  botId: string;
  hostUrl: string;
  messagingUrl: string;
  clientId: string;
  /**
   * Provide a path to a stylesheet to customize the web chat
   */
  stylesheet?: string;
  /**
   * If false, will hide the conversation list pane
   * @default true
   */
  showConversationsButton?: boolean;
  /**
   * If true, will display a timestamp under each messages
   * @default false
   */
  showTimestamp?: boolean;
  /**
   * Allows the user to download the conversation history
   * @default true
   */
  enableTranscriptDownload?: boolean;
  /**
   * Allows the user to delete its conversation history
   * @default false
   */
  enableConversationDeletion?: boolean;
  /**
   * Close the web chat when pressing the Esc key
   * @default true
   */
  closeOnEscape?: boolean;
  /**
   * Displays the bot name to the right of its avatar
   */
  botName?: string;
  /**
   * Allows to set a custom composer placeholder
   * @default 'Reply to {botname}'
   */
  composerPlaceholder?: string;
  /**
   * Allow to specify a custom URL for the bot's avatar
   */
  avatarUrl?: string;
  /**
   * Force the display language of the web chat (en, fr, ar, ru, etc..)
   * Defaults to the user's browser language if not set
   * Set to 'browser' to force use the browser's language
   * @default 'browser'
   */
  locale?: string;
  /**
   * Small description written under the bot's name
   */
  botConversationDescription?: string;
  /**
   * When true, the widget button to open the chat is hidden
   * @default false
   */
  hideWidget?: boolean;
  /**
   * Disable the slide in / out animations of the web chat
   * @default false
   */
  disableAnimations?: boolean;
  /**
   * Use sessionStorage instead of localStorage, which means the session expires when tab is closed
   * @default false
   */
  useSessionStorage?: boolean;
  /**
   * Sends an event to the parent container with the width provided
   * @default 360
   */
  containerWidth?: string | number;
  /**
   * Sets the width of the web chat
   * @default 360
   */
  layoutWidth?: string | number;
  /**
   * When enabled, sent messages are persisted to local storage (recall previous messages)
   * @default true
   */
  enablePersistHistory?: boolean;
  /**
   * CSS class to be applied to iframe
   */
  className?: string;
  /**
   * If true, chat will no longer play the notification sound for new messages.
   * @default false
   */
  disableNotificationSound?: boolean;
  /**
   * Google Maps API Key required to display the map. It will display a link to Google Maps otherwise.
   */
  googleMapsAPIKey?: string;
  /**
   * Displays the bot's website in the conversation page
   */
  website?: string;
  /**
   * Displays the bot's contact phone number in the conversation page
   */
  phoneNumber?: string;
  /**
   * Displays the bot's terms of service in the conversation page
   */
  termsConditions?: string;
  /**
   * Displays the bot's privacy policy in the conversation page
   */
  privacyPolicy?: string;
  /**
   * Displays the bot's email address in the conversation page.
   */
  emailAddress?: string;
  /**
   * Displays the bot's cover picture in the conversation page
   */
  coverPictureUrl?: string;
  /**
   * Enables the bot's information page in the web chat
   * @default false
   */
  showBotInfoPage?: boolean;
  /**
   * Display's the web chat close button when the web chat is opened
   * @default true
   */
  showCloseButton?: boolean;
}

declare global {
  interface Window {
    botpressWebChat: {
      init: (initConfig: InitConfig) => void;
    };
  }
}

export {};
