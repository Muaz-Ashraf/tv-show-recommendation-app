import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const {
    state: { tvshow },
  } = useLocation();
  console.log(tvshow);
  const navigate = useNavigate();

  return (
    <Box p={2}>
      <Container
        maxWidth="md"
        sx={{ bgcolor: "silver", p: 2, mt: 3, borderRadius: "0.5rem" }}
      >
        <Typography fontSize="2rem" fontWeight={"bold"} textAlign={"center"}>
          {tvshow.show.name}
        </Typography>
        <Stack direction={"row"} spacing={"10px"} mt={2}>
          <Box src={tvshow.show.image.medium} component="img" />
          <Stack>
            <Typography fontWeight="bold">Summary </Typography>
            <div dangerouslySetInnerHTML={{ __html: tvshow.show?.summary }} />
          </Stack>
        </Stack>
      </Container>
      <Button onClick={() => navigate("/")}>Back</Button>
    </Box>
  );
};

export default Details;
