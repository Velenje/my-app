declare global {
  interface Window {
    OpenAI?: {
      chatkit?: {
        mount: (config: any) => void;
      };
    };
  }
}

export {};
