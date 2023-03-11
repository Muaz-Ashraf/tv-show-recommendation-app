import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Grow, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${userSearch}`
    );
    setTVShows(response.data);
    setFormIsSubmitted(true);
    setChecked(true);
    setUserSearch("");
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
        <Typography variant="h4" marginTop={2} fontWeight="bold">
          Type in a keyword to search TV shows !
        </Typography>
        <Box>
          <form id="tvshow" onSubmit={formSubmitHandler}>
            <TextField
              autoComplete="off"
              id="TV"
              label="TV Show"
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
                padding: 2,
                fontSize: "1.5rem",
                borderRadius: "20px",
                width: "100%",
                marginLeft: 0,
              }}
              component="button"
            >
              Search
            </Button>
          </form>
        </Box>
      </Box>

      {formIsSubmitted && (
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2500 } : {})}
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
                  margin: "0.5em",
                  borderRadius: "15px",
                  background: "black",
                  color: "white",
                }}
                color="primary"
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
                      margin={0.5}
                      textAlign="center"
                      borderTop="2px solid lightgrey"
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
