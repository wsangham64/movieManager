import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const data = {
  id: "tt8869978",
  resultType: "Title",
  image:
    "https://m.media-amazon.com/images/M/MV5BZmI4M2I1NWYtM2MwNS00NDJmLThhMmMtNDk1MzM4ZWQyMDZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7273_AL_.jpg",
  title: "Batla House",
  description: "(2019)",
};

function MovieCard() {
  return (
    <>
      <Card sx={{ maxWidth: 200, marginRight: 3, marginLeft: 3 }}>
        <img
          src={data.image}
          alt="Girl in a jacket"
          width="200"
          height="280"
          style={{ margin: "0 auto" }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MovieCard;
