import './App.css';
import Header from "./components/Head/Head";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";


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
