import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
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

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${userSearch}`
    );
    setTVShows(response.data);
    setUserSearch("");
  };

  return (
    <>
      <Typography variant="h4" align="center" marginTop={2} fontWeight="bold">
        Type in a keyword to search TV shows !
      </Typography>
      <Box
        margin={5}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <form id="tvshow" onSubmit={formSubmitHandler}>
          <TextField
            id="TV"
            label="TV Show"
            variant="outlined"
            value={userSearch}
            onChange={(event) => setUserSearch(event.target.value)}
            sx={{ mr: 2 }}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ borderRadius: "25px" }}
          >
            Search
          </Button>
        </form>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {tvShows.map((tvshow) => (
          <Card
            variant="outlined"
            sx={{
              margin: "0.5em",
            }}
          >
            <CardContent>
              <Box key={tvshow.show.id}>
                {tvshow.show.image && (
                  <img src={tvshow.show.image.medium} alt={tvshow.show.name} />
                )}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  margin={1}
                  textAlign="center"
                >
                  {tvshow.show.name}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default SearchForm;
