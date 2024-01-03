import "./App.css";
import AppBar from "./AppBar/app-bar";
import AppContextProvider from "./store/ContextAPI";

function App() {
  return (
    <AppContextProvider>
      <AppBar />
    </AppContextProvider>
  );
}

export default App;
