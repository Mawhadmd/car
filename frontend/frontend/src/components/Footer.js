import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        p: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2">© 2025 Car App</Typography>
    </Box>
  );
}
