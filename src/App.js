import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { selectUser } from "./redux/slices/userSlice";


const App = () => {
  const user = useSelector(selectUser)

  return (
    <div>{user ? <Dashboard /> : <Login /> }
      
    </div>
  );
};

export default App;
