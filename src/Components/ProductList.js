import { Grid } from "@mui/material";
import BookCard from './BookCard.js';

function ProductList({ datas, page }) {
  return (
    <Grid
        container spacing={2} sx = {{width:"80%", height:'80%',position:'absolute', top:'12%',left:'10%' }} >
        {datas.slice(page*5-5, page*5).map((data) => (
          <Grid key = {data.id}  item xs={10} md={4} lg={4}>
          <BookCard sx = {{backgroundColor:'#353535'}}data={data}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;