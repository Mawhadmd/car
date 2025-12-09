import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/add" element={<AddCar />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
export default App;
