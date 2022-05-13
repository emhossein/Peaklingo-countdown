import "./App.css";
import Index from "./components/body/Index";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { SidebarProvider } from "./context/SidebarState";

const ONE_HOUR = new Date().getTime() + 86400000;

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <Header timestamp={ONE_HOUR} />
        <Index />
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;
