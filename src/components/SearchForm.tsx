import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Grow,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

interface TVShow {
  show: {
    id: string;
    image: {
      medium: string;
    } | null;
    name: string;
  };
}

const SearchForm = () => {
  const [userSearch, setUserSearch] = useState("");
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${userSearch}`
    );
    const filteredShows = response.data.filter(
      (tvShow: TVShow) => tvShow.show.image !== null
    );

    setTVShows(filteredShows);
    console.log(response.data);
    setFormIsSubmitted(true);
    setLoading(false);
    setChecked(true);
  };

  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: "#fcedae",
          backgroundImage:
            "linear-gradient(62deg, #fcedae 0%, #eddaab 19%, #e3d26a 39%, #f4fc92 60%, #e2f896 80%, #c6db86 100%)",

          padding: 2,
          borderRadius: "25px",
          margin: 3,
        }}
      >
        <Typography
          variant="h4"
          marginTop={2}
          fontWeight="bold"
          fontFamily={"Roboto"}
        >
          Type in a keyword to search TV shows !
        </Typography>
        <Box>
          <form id="tvshow" onSubmit={formSubmitHandler}>
            <TextField
              autoComplete="off"
              id="TV"
              placeholder="Enter TV show name"
              variant="outlined"
              value={userSearch}
              onChange={(event) => setUserSearch(event.target.value)}
              sx={{ marginTop: 2, color: "black" }}
            />

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{
                display: "block",
                marginTop: 1,
                padding: 1,
                fontSize: "1.5rem",
                borderRadius: "20px",
                width: "100%",
              }}
            >
              Search
            </Button>
          </form>
        </Box>
      </Box>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <CircularProgress sx={{ fontSize: "5rem" }} />
        </Box>
      )}
      {formIsSubmitted && (
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          timeout={"auto"}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            sx={{
              backgroundColor: "#745fd0",
              backgroundImage:
                "linear-gradient(45deg, #745fd0 0%, #6178c4 19%, #5558b6 39%, #f889f3 60%, #bc74ce 80%, #e186d1 100%)",

              padding: 2,
              borderRadius: "25px",
              margin: 3,
            }}
          >
            {tvShows.map((tvshow) => (
              <Card
                key={tvshow.show.id}
                variant="outlined"
                sx={{
                  margin: "0.5rem",
                  borderRadius: "15px",
                  background: "black",
                  color: "white",

                  "&:hover": {
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    transform: "scale(1.01)",
                  },
                }}
                color="primary"
                onClick={() =>
                  navigate("/details", { state: { tvshow: tvshow } })
                }
              >
                <CardContent>
                  <Box>
                    {tvshow.show.image && (
                      <img
                        src={tvshow.show.image.medium}
                        alt={tvshow.show.name}
                      />
                    )}

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      textAlign="center"
                      borderTop="2px solid lightgrey"
                      maxWidth={200}
                    >
                      {tvshow.show.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grow>
      )}
    </>
  );
};

export default SearchForm;
