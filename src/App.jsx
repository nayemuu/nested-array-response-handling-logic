import "./App.css";
import DataTypeChecking from "./components/DataTypeChecking/DataTypeChecking";
import EndOfJsonLeafs from "./components/EndOfJsonLeafs/EndOfJsonLeafs";
import IterableChecking from "./components/IterableChecking/IterableChecking";
import RowWiseError from "./components/RowWiseError/RowWiseError";

function App() {
  return (
    <>
      <p>Click on the Vite and React logos to learn more</p>
      {/* <DataTypeChecking /> */}
      {/* <IterableChecking /> */}
      {/* <EndOfJsonLeafs /> */}
      <RowWiseError />
    </>
  );
}

export default App;
