import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Modal } from '@mui/material';
import {useState} from "react";

function App() {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    <Router>
      <Switch>
        <Route path="/"  exact component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
