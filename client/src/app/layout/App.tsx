import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";


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
  return (  // return a jsx (javascript xml)
    <div>
      <h1 style={{color: 'blue'}}>Re-Store</h1>
      <Catalog/>
      <ul>        
        {products.map((product)=> (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick= {addProduct}>add Product</button>
    </div>
    
  );
}

export default App;
