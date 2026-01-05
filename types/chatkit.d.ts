declare global {
  interface Window {
    OpenAI?: {
      ChatKit?: {
        init: (config: any) => void;
      };
    };
  }
}

export {};
