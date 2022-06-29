import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PaginationControlled from '../Components/PaginationControlled';
import Switch from '../Components/Switch';
import { FormProvider } from "../Components/form";
import ProductList from "../Components/ProductList";
import { useForm } from "react-hook-form";
import Datas from '../Datas.json';


function App() {
  const [page, setPage] = useState(1);
  const handlePape = (event, value) => {
    setPage(value);
  };

  const [checked, setChecked] = useState(true);
  const handleDack = (event) => {
    setChecked(event.target.checked);
  };

  const defaultValues = {
    searchQuery: ""
  };
const methods = useForm(
  defaultValues
);
  const { watch } = methods;
  const filters = watch();
  const filterProducts = applyFilter(Datas, filters);
  console.log("faf",filters)

  return (
    <div>
            <CssBaseline />
            <Box sx = {{height:'100vh',position:'revert',top:'64px' , backgroundColor: checked ? '#121212' : '#fff'}} >
            <Switch handleDack={handleDack} checked={checked} />
            <FormProvider methods={methods}>
              <ProductList datas = {filterProducts} page={page}/>
            </FormProvider>
              <PaginationControlled handlePape={handlePape} page={page}  />
            </Box>
    </div>
  );
}

function applyFilter(Datas, filters){
  let filteredProducts = Datas;
  if (filters.searchQuery) {
    filteredProducts = Datas.filter((product) =>
      product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  }
  return filteredProducts;
}
export default App; 