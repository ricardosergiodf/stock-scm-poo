
import { Outlet } from "react-router-dom";
import  ResponsiveAppBar  from "./Components/Header"

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  );
}

export default App;
