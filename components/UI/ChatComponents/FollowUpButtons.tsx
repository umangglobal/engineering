import { Stack, Button } from "@mui/material";

// ---- Types ----
interface FollowUpButtonsProps {
  followUps: string[];
  onFollowUpClick: (option: string) => void;
}

export const FollowUpButtons = ({ followUps, onFollowUpClick }: FollowUpButtonsProps) => {
  if (!followUps || followUps.length === 0) return null;

  return (
    <Stack direction="row" flexWrap="wrap" gap={1.2} mb={2}>
      {followUps.map((q, i) => (
        <Button
          key={i}
          variant="outlined"
          color="inherit"
          size="small"
          onClick={() => onFollowUpClick(q)}
          sx={{ textTransform: "none" }}
        >
          {q}
        </Button>
      ))}
    </Stack>
  );
};