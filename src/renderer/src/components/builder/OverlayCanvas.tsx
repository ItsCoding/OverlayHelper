
import { Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const canvasTheme = createTheme();

export const OverlayCanvas = () => {
    return (<ThemeProvider theme={canvasTheme}>
        <Paper>
            Hi
        </Paper>
    </ThemeProvider>)
}