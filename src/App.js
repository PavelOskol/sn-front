import './App.css';
import Header from "./components/Head";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";


function App() {
  return (
      <div className="App">
          <Header />
          <Sidebar />
          <Profile />
      </div>
  );
}

export {App} ;
