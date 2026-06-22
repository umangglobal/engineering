import { Box, Typography, Avatar, Stack } from "@mui/material";

// ---- Types ----
interface MessageBubbleProps {
  text: string;
  sender: "bot" | "user";
}

export const MessageBubble = ({ text, sender }: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
    <Stack
      direction={isUser ? "row-reverse" : "row"}
      alignItems="flex-end"
      spacing={1}
      mb={1.5}
    >
      {!isUser && (
        <Avatar src="/umang.png" sx={{ width: 28, height: 28 }} />
      )}
      <Box
        sx={{
          maxWidth: "75%",
          p: 1.2,
          borderRadius: 1,
          bgcolor: isUser ? "#49c6b0" : "grey.200",
          color: isUser ? "#fff" : "text.primary",
          fontWeight: "900",
        }}
      >
        <Typography variant="body2">{text}</Typography>
      </Box>
    </Stack>
  );
};