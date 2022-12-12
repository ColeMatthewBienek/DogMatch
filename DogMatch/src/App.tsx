import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ColorModeProvider } from "@chakra-ui/color-mode";
import { Routes, Route } from "react-router-dom";
import { Home, PetList, PetListDetails, Search } from "./components";
import appTheme from "./theme";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={appTheme}>
      <ColorModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petList" element={<PetList />} />
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
