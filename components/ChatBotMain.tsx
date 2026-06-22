'use client'

import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatbotApi } from "@/lib/api/ChatbotApi";
import {
  Box, Typography, TextField, IconButton,
  CircularProgress, Paper, Fab,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MessageBubble } from "@/components/UI/ChatComponents/MessageBubble";
import { FollowUpButtons } from "@/components/UI/ChatComponents/FollowUpButtons";
import { ContactForm } from "@/components/UI/ChatComponents/ContactForm";

// ---- Types ----
type MessageSender = "bot" | "user" | "followups";

interface Message {
  sender: MessageSender;
  text: string;
  options?: string[];
}

// ---- Component ----
export const ChatBotMain = () => {
  const [isOpen, setIsOpen]                     = useState(false);
  const [messages, setMessages]                 = useState<Message[]>([]);
  const [input, setInput]                       = useState("");
  const [isLoading, setIsLoading]               = useState(false);
  const [showInput, setShowInput]               = useState(false);
  const [sessionId, setSessionId]               = useState<string | null>(null);
  const [showContactPrompt, setShowContactPrompt] = useState(false);
  const [error, setError]                       = useState("");

  const customInputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  const validatePhone = (phone: string) =>
    /^\+?[0-9\s\-()]{7,}$/.test(phone);

  // Initialize chat when opened
  useEffect(() => {
    if (!isOpen) return;

    const startChat = async (pageUrl: string) => {
      try {
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
        setMessages([]);
        const { greeting, questions } = await ChatbotApi.initializeChat(pageUrl, newSessionId);
        setMessages([
          { sender: "bot", text: greeting },
          { sender: "followups", text: "", options: questions },
        ]);
      } catch {
        setMessages([{ sender: "bot", text: "Failed to start chat. Please refresh." }]);
      }
    };

    const currentUrl = window.location.href;
    startChat(currentUrl);
  }, [isOpen]);

  const addBotMessage  = (text: string) => setMessages((prev) => [...prev, { sender: "bot",  text }]);
  const addUserMessage = (text: string) => setMessages((prev) => [...prev, { sender: "user", text }]);

  const handleSendMessage = async (question: string) => {
    if (!sessionId) return;
    setIsLoading(true);
    setMessages((prev) => prev.filter((msg) => msg.sender !== "followups"));
    addUserMessage(question);

    try {
      const data = await ChatbotApi.sendMessage(sessionId, question);
      if (data.fallback_reason === "sales") {
        addBotMessage("Our sales team can assist you. Please share your contact details.");
        setShowContactPrompt(true);
        return;
      }
      addBotMessage(data.answer);
      if (data.followups?.length > 0) {
        setMessages((prev) => [
          ...prev,
          { sender: "followups", text: "", options: data.followups },
        ]);
      }
    } catch {
      addBotMessage("⚠️ Error fetching response.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshChat = async () => {
    setIsLoading(true);
    try {
      const newSessionId = uuidv4();
      setSessionId(newSessionId);
      setMessages([]);
      setShowContactPrompt(false);
      setShowInput(false);
      setInput("");
      setError("");

      const currentUrl = window.location.href;
      const { greeting, questions } = await ChatbotApi.initializeChat(currentUrl, newSessionId);
      setMessages([
        { sender: "bot", text: greeting },
        { sender: "followups", text: "", options: questions },
      ]);
    } catch {
      setMessages([{ sender: "bot", text: "Failed to refresh chat. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (option.toLowerCase().includes("other")) {
      setShowInput(true);
      setTimeout(() => customInputRef.current?.focus(), 50);
      return;
    }
    handleSendMessage(option);
  };

  const handleManualSubmit = () => {
    if (!input.trim()) return;
    setShowInput(false);
    handleSendMessage(input.trim());
    setInput("");
  };

  const handleEndChat = async (email = "", phone = "") => {
    if (!sessionId || !email || !phone) {
      console.warn("Missing or Invalid contact info");
      return;
    }
    try {
      await ChatbotApi.endChat(sessionId, email, phone);
    } catch (err) {
      console.error("Error ending chat:", err);
    }
  };

  const handleContactSubmit = (email: string, phone: string) => {
    if (!validateEmail(email) || !validatePhone(phone)) {
      setError("Please provide valid contact details.");
      return;
    }
    addUserMessage(`Email: ${email}, Phone: ${phone}`);
    addBotMessage("Thank you! Our sales team will reach out soon.");
    setShowContactPrompt(false);
    handleEndChat(email, phone);
  };

  const handleClose = async () => {
    await handleEndChat();
    setIsOpen(false);
  };

  // Floating launcher
  if (!isOpen) {
    return (
      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setIsOpen(true)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#49c6b0",
          "&:hover": { bgcolor: "#3aa899" },
          zIndex: 1300,
        }}
      >
        <ChatIcon />
      </Fab>
    );
  }

  // Full chat widget
  return (
    <Paper
      elevation={6}
      sx={{
        width: 380,
        height: 550,
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        zIndex: 1300,
      }}
    >
      {/* Header */}
      <Box sx={{ bgcolor: "#49c6b0", color: "white", p: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="subtitle1" fontWeight="600">
          Umang Global AI Assistant
        </Typography>
        <Box>
          <IconButton color="inherit" size="small" onClick={handleRefreshChat}>
            <RefreshIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" size="small" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Chat Body */}
      <Box sx={{ flex: 1, p: 2, bgcolor: "#fafafa", overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {messages.map((msg, idx) => {
          if (msg.sender === "followups") {
            return (
              <FollowUpButtons
                key={idx}
                followUps={msg.options ?? []}
                onFollowUpClick={handleOptionClick}
              />
            );
          }
          if (msg.sender === "bot" || msg.sender === "user") {
            return <MessageBubble key={idx} text={msg.text} sender={msg.sender} />;
          }
          return null;
        })}

        {isLoading && (
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <CircularProgress size={18} color="primary" />
            <Typography variant="body2">Typing...</Typography>
          </Box>
        )}
      </Box>

      {/* Custom Input */}
      {showInput && (
        <Box sx={{ p: 1.5, borderTop: "1px solid #ddd", display: "flex", gap: 1, background: "#f5f5f5" }}>
          <TextField
            inputRef={customInputRef}
            size="small"
            fullWidth
            placeholder="Ask your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#49c6b0" },
                "&:hover fieldset": { borderColor: "#49c6b0" },
                "&.Mui-focused fieldset": { borderColor: "#49c6b0", borderWidth: "2px" },
              },
              "& .MuiInputBase-input::placeholder": { color: "#49c6b0", opacity: 0.7 },
              "& .MuiInputLabel-root": { color: "#49c6b0", "&.Mui-focused": { color: "#49c6b0" } },
            }}
          />
          <IconButton
            onClick={handleManualSubmit}
            disabled={!input.trim()}
            sx={{
              color: "#49c6b0",
              "&:hover": { backgroundColor: "rgba(73, 198, 176, 0.08)" },
              "&:disabled": { color: "rgba(73, 198, 176, 0.3)" },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      )}

      {/* Contact Form */}
      {showContactPrompt && (
        <ContactForm
          onSubmit={handleContactSubmit}
          onCancel={() => setShowContactPrompt(false)}
        />
      )}
    </Paper>
  );
};