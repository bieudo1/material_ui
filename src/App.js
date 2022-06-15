import React, {useState} from 'react';
import './App.css';
import AppBar from './Components/AppBar.js';
import BookCard from './Components/BookCard.js';
import Datas from './Datas.json';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ThemeProvider from './contexts/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import PaginationControlled from './Components/PaginationControlled';
import Switch from './Components/Switch';


function App() {
  const [page, setPage] = useState(1);
  const handlePape = (event, value) => {
    setPage(value);
  };

  const [checked, setChecked] = React.useState(true);

  const handleDack = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
        <ThemeProvider>
            <CssBaseline />
            <AppBar />
            <Box sx = {{height:'100vh',position:'revert',top:'64px' , backgroundColor: checked ? '#121212' : '#fff'}} >
            <Switch handleDack={handleDack} checked={checked} />
              <Grid
                  container spacing={2} sx = {{width:"80%", height:'80%',position:'absolute', top:'12%',left:'10%' }} >
                {Datas.slice(page*5-5, page*5).map((data) => (
                  <Grid key = {data.id}  item xs={10} md={4} lg={4}>
                    <BookCard sx = {{backgroundColor:'#353535'}}data={data}/>
                  </Grid>
                ))}
                </Grid>
                <PaginationControlled handlePape={handlePape} page={page}  />
            </Box>
        </ThemeProvider>
    </div>
  );
}

export default App; 