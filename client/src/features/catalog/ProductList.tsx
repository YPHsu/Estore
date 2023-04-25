import { Grid, List } from "@mui/material"
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";


interface Props {
    productsP: Product[];  // a product array

}

// extra-small or anything bigger (xs) => take up 4/12 space in the browser

export default function ProductList({productsP} : Props){
    return (
        <Grid container spacing={4}>
            {productsP.map((one_product)=> (
                <Grid item xs={3} key={one_product.id}>
                    <ProductCard  productP={one_product} />
                </Grid>                
                
             ))}
        </Grid>        
    )
   

}