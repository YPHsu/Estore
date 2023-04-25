import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { KayakingRounded } from "@mui/icons-material";


function App() {
  const [darkMode, setDarkMode] = useState(false); // start with light mode
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212' // if lightmode => grey color, not => black
      }
    }
  })

function handleThemeChange(){
  setDarkMode(!darkMode);
}


  return (  
    // return a jsx (javascript xml) 
    // {products} is what we received above const [products, setProducts]  
    // pass the function of addProduct to Catalog component
    // CssBaseline is used to take out the margins and paddings 
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />  
      <Container>
          <Catalog/> 
      </Container>   
    </ThemeProvider>    
  );
}

export default App;
