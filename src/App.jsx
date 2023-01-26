import { Text } from "@chakra-ui/react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero"
import Event from "./Components/Event";
import Present from "./Components/Present";
import Assistance from "./Components/Assistance";

function App() {
  return (
    <div style={{backgroundColor: "#FFFBF5"}}>
      <Nav />
      <Hero />
      <Event />
      <Present />
      <Assistance />
    </div>
  );
}

export default App;
