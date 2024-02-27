import { styled } from "@mui/material";

export const Announcement = styled("div")({
  display: "flex",
  marginTop: 20,
  alignItems: "center",
});

export const AnnouncementImg = styled("img")({
  height: 150,
});

export const AnnouncementText = styled("div")((props) => ({
  border: `1px solid ${props.theme.palette.primary.main}`,
  height: 90,
  width: "100%",
  borderRadius: 15,
  padding: 5,
  paddingLeft: 15,
  borderLeft: "none",
  color: props.theme.palette.primary.main,
  "& div": {
    fontWeight: "100",
    marginTop: 5,
  },
}));

export const Animal = styled("div")({
  fontSize: 20,
});
