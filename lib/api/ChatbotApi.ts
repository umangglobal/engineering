// api/ChatbotApi.ts

const API_BASE_URL = "https://www.chatbot.umangparticlescience.com";

// ---- Types ----
export interface InitializeChatResponse {
  greeting: string;
  questions: string[];
}

export interface SendMessageResponse {
  answer: string;
  followups: string[];
  fallback_reason?: string;
}

export interface EndChatResponse {
  success: boolean;
}

// ---- API ----
export const ChatbotApi = {
  initializeChat: async (
    url: string,
    sessionId: string
  ): Promise<InitializeChatResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/chat/initialize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, session_id: sessionId }),
      });

      if (!res.ok) throw new Error("Failed to initialize chat");
      return await res.json() as InitializeChatResponse;
    } catch (error) {
      console.error("Error initializing chat:", error);
      throw error;
    }
  },

  sendMessage: async (
    sessionId: string,
    message: string
  ): Promise<SendMessageResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/chat/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: sessionId, message }),
      });

      const text = await res.text();

      if (!res.ok) throw new Error("Failed to send message");

      return JSON.parse(text) as SendMessageResponse;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },

  endChat: async (
    sessionId: string,
    phone: string,
    email: string
  ): Promise<EndChatResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/chat/end`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: sessionId,
          phone,
          email,
          reason: "close",
        }),
      });

      if (!res.ok) throw new Error("Failed to end chat");
      return await res.json() as EndChatResponse;
    } catch (error) {
      console.error("Error ending chat:", error);
      throw error;
    }
  },
};