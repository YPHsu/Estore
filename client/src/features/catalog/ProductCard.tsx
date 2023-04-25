import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    productP : Product;  // only one product
    
}

export default function ProductCard( {productP} : Props) {

    return (
        //removed the maxwidth, use the grid instead
        //backgroundSize: 'contain' to fit the image to the div
        // ${(productP.price /100).toFixed(2)}  => fix long datatype to float
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'success.light'}}>
                        {productP.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title= {productP.name}
                titleTypographyProps={{
                    sx:{fontWeight: 'bold', color: 'primary.main'}
                }
                    
                }
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                image={productP.pictureUrl}
                title={productP.name}
                
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(productP.price /100).toFixed(2)} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {productP.brand} / {productP.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
        // <ListItem key={productP.id}>
        //             <ListItemAvatar>
        //                 <Avatar src={productP.pictureUrl} />
        //             </ListItemAvatar>
        //             <ListItemText>
        //                 {productP.name} - {productP.price}
        //             </ListItemText>                       
        // </ListItem>
    )

}