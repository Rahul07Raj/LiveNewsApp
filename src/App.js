import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 
const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  // const [pageSize, setpageSize] = useState(5);

    return (
        <div>
      <Router>
          <NavBar />
          <LoadingBar
          height={3}
        color='#f11946'
        setProgress={progress}
      />
          <Switch>
            <Route exact path="/"> <News setProgress = {setProgress}  key='general' pageSize={pageSize} country="in" category="general" /> </Route>
            <Route exact path="/business"> <News setProgress = {setProgress}  key='business' pageSize={pageSize} country="in" category="business" /> </Route>
            <Route  path="/entertainment"> <News setProgress = {setProgress}  key='entertainment' setpageSize={pageSize} country="in" category="entertainment" /> </Route>
            <Route  path="/general"> <News setProgress = {setProgress}  key='general' pageSize={pageSize} country="in" category="general" /> </Route>
            <Route  path="/health"> <News setProgress = {setProgress}  key='health' pageSize={pageSize} country="in" category="health" /> </Route>
            <Route  path="/science"> <News setProgress = {setProgress}  key='science' pageSize={pageSize} country="in" category="science" /> </Route>
            <Route  path="/sports"> <News setProgress = {setProgress}  key='sports' pageSize={pageSize} country="in" category="sports" /> </Route>
            <Route  path="/technology"> <News setProgress = {setProgress}  key='technology' pageSize={pageSize} country="in" category="technology" /> </Route>
          </Switch>
      </Router>
        </div>
    );
}

export default App;
