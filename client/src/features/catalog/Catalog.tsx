import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";



//give props(just a name) the type of Props (defined in the above interface), which is an argument passed from App.tsx
export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);  // from interface Product

    useEffect( ()=> {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
      } ,[]  )  
  
    // function addProduct(){
    //   setProducts(prevState => [...prevState, 
    //     { id: prevState.length + 101,
    //       name:'product' + (prevState.length +1), 
    //       price:(prevState.length * 100) + 100,
    //       brand : 'some brand',
    //       description: 'some description',
    //       pictureUrl: 'http://picsum.photos/200'
        
    //     }])}


    return (
        // <> </> an approach to return single element
        <>  
            <ProductList productsP={products} />
        </>
       
    )

}