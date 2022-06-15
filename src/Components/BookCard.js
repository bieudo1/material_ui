import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import { CardActionArea } from '@mui/material';



export default function ActionAreaCard({data}) {
  return (
    <Card sx={{ width:'100%', height:'100%' , backgroundColor: "#353535" }}>
      <CardActionArea>
        <CardMedia
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <ButtonGroup   variant="contained" aria-label="outlined primary button group">
              {data.skills.slice(0, data.skills.length).map((skill,index) => (
                  <Button key ={index} sx={{fontSize: '0.4rem'  , p: "6px 9px",backgroundColor: "#e17376"}} >{data.skills[index]}</Button>
              ))}
        </ButtonGroup>
          <Typography variant="body2" color="text.secondary">
           {data.description}
          </Typography>
          <Box sx={{ display: 'flex'  }} justifyContent = 'center'>
            <Button sx={{fontSize: '0.4rem', p: "6px 9px", color: "#000",backgroundColor: "#e79622",  }} > LEARN MORE</Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}