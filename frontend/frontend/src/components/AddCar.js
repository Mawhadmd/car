import { useState } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function AddCar() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const addCar = () => {
    axios
      .post("http://localhost:5000/cars", { brand, model })
      .then(() => alert("Car added"));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add Car
      </Typography>
      <TextField
        label="Brand"
        fullWidth
        margin="normal"
        onChange={(e) => setBrand(e.target.value)}
      />
      <TextField
        label="Model"
        fullWidth
        margin="normal"
        onChange={(e) => setModel(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addCar}>
        Add
      </Button>
    </Box>
  );
}
