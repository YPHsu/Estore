import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([]);  // from interface Product

  useEffect( ()=> {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    } ,[]  )


  

  function addProduct(){
    setProducts(prevState => [...prevState, 
      { id: prevState.length + 101,
        name:'product' + (prevState.length +1), 
        price:(prevState.length * 100) + 100,
        brand : 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      
      }])
  }
  return (  
    // return a jsx (javascript xml) 
    // {products} is what we received above const [products, setProducts]  
    // pass the function of addProduct to Catalog component 
    <>
      <Typography variant="h1" >Re-Store</Typography>      
      <Catalog products={products} addProductF={addProduct}/> 
      
    </>
    
  );
}

export default App;
