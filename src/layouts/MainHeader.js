import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ProductSearch from "../Components/ProductSearch";
import { FormProvider } from "../Components/form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";


function MainHeader() {
  const { user } = useAuth();
  let auth = useAuth();
  let navigate = useNavigate();
  const methods = useForm();
  

  return (
    <Box>
      <AppBar sx = {{backgroundColor:'#121212',position:'revert'}} position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Job Routing
          </Typography>
          <FormProvider methods={methods}>
            < ProductSearch/>
          </FormProvider>
          <Typography sx = {{position:'absolute', right:'10%'}} variant="h6" color="inherit" component="div">
            Welcome {user?.username}!
          </Typography>
          <Typography sx = {{position:'absolute', right:'0'}}>
            <button sx = {{position:'absolute', right:'4%'}}
            onClick={() => {
             auth.logout(() => navigate("/"));
            }}
            >
            Sign out
            </button>
            </Typography>
    </Toolbar>
      </AppBar>
    </Box>
  );
}


export default MainHeader;