'use client';

import { ChatKit, useChatKit } from '@openai/chatkit-react';

export default function Home() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing: string | null) {
        if (existing) {
          return existing;
        }

        const res = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', height: '100vh' }}>
      <h1>ChatKit Agent</h1>
      <div style={{ height: 'calc(100vh - 100px)' }}>
        <ChatKit control={control} />
      </div>
    </div>
  );
}
