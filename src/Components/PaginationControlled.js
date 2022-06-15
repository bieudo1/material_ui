import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({handlePape, page}) {
  
  return (
    <Stack spacing={2}>
      <Pagination count={3} page={page} onChange={handlePape} sx = {{position:'absolute', top:'94%',left:'40%'}} />
    </Stack>
  );
}
