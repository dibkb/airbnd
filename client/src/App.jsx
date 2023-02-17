import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./pages/Indexpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
      </Route>
    </Routes>
  );
}
export default App;
