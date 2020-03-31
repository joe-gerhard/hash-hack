import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import InputPage from './pages/InputPage';
import Navbar from './components/Navbar';

function App() {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/search" component={SearchPage}/>
                <Route path="/input" component={InputPage}/>
            </Switch>
        </div>
    );
}

export default App;
