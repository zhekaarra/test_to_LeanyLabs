import {AppBar, Toolbar, Typography} from '@mui/material';

function Header() {
    return (
        <AppBar >
            <Toolbar sx={{background: "#2BA382", width: 'auto' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Inventory Management
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
