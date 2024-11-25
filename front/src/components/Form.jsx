import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { FormHeader } from "./FormHeader";
import { FormFooter } from "./FormFooter";

export const Form = () => {
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [rfc, setRfc] = useState("");
  const [estatus, setEstatus] = useState(0);
  const [tipoCliente, setTipoCliente] = useState(0);
  const status = [
    { id: 1, value: "ACTIVO" },
    { id: 2, value: "INACTIVO" },
  ];
  const tiposCliente = [
    { id: 1, value: "Normal" },
    { id: 2, value: "Especial" },
  ];

  const handleClaveChange = ({ target }) => setClave(target.value);

  const handleNombreChange = ({ target }) => setNombre(target.value);

  const handleRfcChange = ({ target }) => {
    setRfc(target.value);
  };

  const handleEstatusChange = ({ target }) => setEstatus(target.value);

  const handleTipoClienteChange = ({ target }) => setTipoCliente(target.value);

  const reset = () => {
    setClave("");
    setNombre("");
    setRfc("");
    setEstatus(0);
    setTipoCliente(0);
  };
  const onClickNuevoCliente = () => {
    setEstatus(1);
    setTipoCliente(1);
  };

  const onCancel = () => {
    reset();
  };

  const validarGuardar = () => {
    if (!clave || !nombre || !rfc || !estatus || !tipoCliente) return true;
    return false;
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={12} style={{ padding: "12px" }}>
        <Box component="form">
          <FormHeader onClickNuevoCliente={onClickNuevoCliente} />

          <Box mb={3}>
            <TextField
              id="clave"
              label="Clave"
              variant="outlined"
              value={clave}
              onChange={handleClaveChange}
              fullWidth
              required
            />
          </Box>

          <Box mb={3}>
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              value={nombre}
              onChange={handleNombreChange}
              fullWidth
              required
            />
          </Box>

          <Box mb={3}>
            <TextField
              id="rfc"
              label="RFC"
              variant="outlined"
              value={rfc}
              onChange={handleRfcChange}
              fullWidth
              required
            />
          </Box>

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

          <Box mb={3}>
            <FormControl fullWidth required>
              <InputLabel id="label-tipo-cliente">Tipo de cliente</InputLabel>

              <Select
                labelId="label-tipo-cliente"
                id="select-tipo-cliente"
                label="Tipo de cliente"
                value={tipoCliente}
                onChange={handleTipoClienteChange}
              >
                <MenuItem value={0} disabled>
                  -- Selecciona una opción --
                </MenuItem>

                {tiposCliente.map((tc, index) => (
                  <MenuItem key={index} value={tc.id}>
                    {tc.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <FormFooter onCancel={onCancel} validarGuardar={validarGuardar} />
        </Box>
      </Paper>
    </Container>
  );
};
