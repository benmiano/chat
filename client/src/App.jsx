import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './components/Join/join';
import Chat from './components/Chat/chat';

function App() {
  return (<Router>
    <div>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
