
import { Grid, Typography } from '@mui/material'
import { OverlayCanvas } from '../components/builder/OverlayCanvas'
import { Menu } from '../components/system/Menu'
export const BuilderPage = () => {
  return (
    <div>
      <Menu />  
      <Grid container>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6}>
          <OverlayCanvas />
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  )
}
