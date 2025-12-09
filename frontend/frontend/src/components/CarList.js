import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteCar = (id) => {
    axios
      .delete(`http://localhost:5000/cars/${id}`)
      .then(() => setCars(cars.filter((c) => c.id !== id)));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cars
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.brand}</TableCell>
                <TableCell>{c.model}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteCar(c.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
