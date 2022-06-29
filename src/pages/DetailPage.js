import React from 'react';
import {useState} from 'react';
import {Typography} from '@mui/material';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Datas from '../Datas.json'
import BookCard from '../Components/BookCard.js'
import Switch from '../Components/Switch.js'

function DetailPage() {
  const data = useParams();
  const workId = data.id;
  const work = Datas.find((work) => work.id === workId); 
  const [checked, setChecked] = useState(true);
  const handleDack = (event) => {
    setChecked(event.target.checked);
  };

  if (!work){
    return (
      <Typography variant="h3" marginTop={3}>
        No work found
      </Typography>
    )
  }

  return (
       <Box sx = {{height:'100vh',position:'revert',top:'64px',width:'100%', backgroundColor: checked ? '#121212' : '#fff' }}> 
          <Switch handleDack={handleDack} checked={checked} />
          <Box sx = {{height : "100", width : '100'}}>
            <BookCard data= {work}/>
          </Box>
      </Box>
  )
}

export default DetailPage
