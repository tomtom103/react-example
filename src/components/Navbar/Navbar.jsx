import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@mui/material'

const AppNavbar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h3" noWrap component="div">
                    INF3995
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavbar;