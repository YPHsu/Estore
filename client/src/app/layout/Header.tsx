import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
// sx: allow additional CSS     mb:margin bottom 

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange} : Props){
    return (
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>                
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>

    )
}