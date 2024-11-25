import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const FormFooter = ({
  onCancel = () => {},
  onGuardar = () => {},
  validarGuardar = () => {},
}) => {
  return (
    <Grid spacing={2} container>
      <Grid size={6}>
        <Button color="error" variant="contained" onClick={onCancel} fullWidth>
          Cancelar
        </Button>
      </Grid>

      <Grid size={6}>
        <Button
          color="success"
          disabled={validarGuardar()}
          variant="contained"
          onClick={onGuardar}
          fullWidth
        >
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};
