import { TelegramWebApps } from "telegram-webapps-types";



declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const value: any;
  export default value;
}

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK,
  }
}
export {};
