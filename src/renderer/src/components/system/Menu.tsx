import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const TOOLBAR_HEIGHT = 50

export const Menu = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar variant='dense'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Overlay
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}