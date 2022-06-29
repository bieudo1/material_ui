import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

function BlankLayout() {
  return (
    <div>
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <Outlet />
    </Stack>
    </div>
  );
}

export default BlankLayout;