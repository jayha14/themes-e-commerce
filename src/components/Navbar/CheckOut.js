import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Box, createTheme, ThemeProvider } from '@mui/material';
import React, { useState, useContext } from 'react';
import { DataContext } from 'App';
const theme = createTheme({
  palette: {
    orange: {
      main: '#fcb941',
      contrastText: '#000',
    },
  },
});

const CheckOut = () => {
  const [invisible, setInvisible] = useState(false);
  const data = useContext(DataContext);
  return (
    <ThemeProvider theme={theme}>
      <Box component={"div"} sx={{cursor: "pointer", ml: 3, display: "flex", alignItems: "center", flexDirection: "column"}} >
        <Badge color={'orange'} badgeContent={data[6].length} max={10} invisible={invisible}>
          <ShoppingCartOutlinedIcon  />
        </Badge>
        <p style={{fontSize: "0.625rem", color: "#777", marginTop: "2px"}}>Cart</p>
      </Box>
    </ThemeProvider>
  );
}

export default CheckOut;