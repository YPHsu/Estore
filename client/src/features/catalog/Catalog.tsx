import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";

// the interface restricts what should be passed down to Catalog function
interface Props {
    products: Product[];
    addProductF: () => void;
}

//give props(just a name) the type of Props (defined in the above interface), which is an argument passed from App.tsx
export default function Catalog({products, addProductF}: Props){
    return (
        // <> </> an approach to return single element
        <>  
             <List>        
                {products.map((product)=> (
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {product.name} - {product.price}
                        </ListItemText>                       
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" onClick= {addProductF}>add Product</Button>

        </>
       
    )

}