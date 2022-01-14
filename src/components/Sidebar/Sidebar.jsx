import React from 'react';
import {
    Drawer,
    Toolbar,
    Box,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

const drawerWidth = 240;
const fields = ['View Previous', 'Start Simulation', 'Fly the drones'];

export default function Sidebar() {

    return (
        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {fields.map((item) => (
                        <ListItem button key={item} sx={{
                            justifyContent: 'center',
                        }}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}