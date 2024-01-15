import { styled } from "@mui/material";

export const Announcement = styled("div")({
  display: "flex",
  marginTop: 20,
  alignItems: "center",
});

export const AnnouncementImg = styled("img")({
  height: 150,
});

export const AnnouncementText = styled("div")({
  border: "1px solid #5E503F",
  height: 90,
  width: "100%",
  borderRadius: 15,
  padding: 5,
  borderLeft: "none",
});
