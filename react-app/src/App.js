import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import EditProduct from './components/EditProduct';



function App () {
  return (
    <div className="App" >
      <Router>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/update/:prodRef" component={EditProduct} />

        </Switch>
      </Router>
      
    </div>
  )
}

export default App;