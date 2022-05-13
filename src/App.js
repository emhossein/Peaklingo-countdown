import { useEffect, useState } from "react";
import "./App.css";
import Index from "./components/body/Index";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { SidebarProvider } from "./context/SidebarState";
import { getRemainingTimeUntilMsTimestamp } from "./utils/countdownTimeUtils";

const ONE_HOUR = new Date().getTime() + 86400000;

const DEFAULT_REMAINING_TIME = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

function App() {
  const [remainingTime, setRemainingTime] = useState(DEFAULT_REMAINING_TIME);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(ONE_HOUR);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <SidebarProvider>
      <div className="App">
        <Header time={remainingTime} />
        <Index />
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;
