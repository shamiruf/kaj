import "./App.css";
import Header from "./components/Header";
import TotalBalance from "./components/TotalBalance";
import AddRevenueTransaction from "./components/AddRevenueTransaction";
import AddCostTransaction from "./components/AddCostTransaction";
import RevenueList from "./components/RevenueList";
import CostList from "./components/CostList";
import { GlobalContextProvider } from "./context/GlobalState";
import Audio from "./components/Audio";

function App() {
  return (
    <GlobalContextProvider>
      <div className="main-container">
        <div className="wrapper">
          <Header />
          <Audio />
          <TotalBalance />
          <div className="form-class">
            <AddRevenueTransaction />
            <AddCostTransaction />
          </div>
          <div className="lists">
            <RevenueList />
            <CostList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
