import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectEstatus = ({ estatus = 0, setEstatus = () => {} }) => {
  const status = [
    { id: 1, value: "ACTIVO" },
    { id: 2, value: "INACTIVO" },
  ];

  const handleEstatusChange = ({ target }) => setEstatus(target.value);

  return (
    <Box mb={3}>
      <FormControl fullWidth required>
        <InputLabel id="label-estatus">Estatus</InputLabel>

        <Select
          labelId="label-estatus"
          id="select-estatus"
          label="Estatus"
          value={estatus}
          onChange={handleEstatusChange}
        >
          <MenuItem value={0} disabled>
            -- Selecciona una opción --
          </MenuItem>

          {status.map((s, index) => (
            <MenuItem key={index} value={s.id}>
              {s.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
