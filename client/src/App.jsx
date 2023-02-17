import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./pages/Indexpage";
import { Signup } from "./pages/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
export default App;
