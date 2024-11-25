import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const FormHeader = ({ onClickNuevoCliente = () => {} }) => {
  return (
    <Box mb={4}>
      <Grid
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        container
      >
        <Grid size={4}>
          <Typography>Gestión de clientes</Typography>
        </Grid>

        <Grid size={4}>
          <Button
            color="info"
            variant="contained"
            onClick={onClickNuevoCliente}
            fullWidth
          >
            Nuevo cliente
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
