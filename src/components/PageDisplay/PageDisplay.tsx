import React from 'react'
import Styled from './styles';
import { Switch, Route } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import InputPage from '../../pages/InputPage';

const PageDisplay = () => {
    return (
        <Styled.PageDisplay>
            <Switch>
                <Route path="/search" component={SearchPage}/>
                <Route path="/input" component={InputPage}/>
            </Switch>
        </Styled.PageDisplay>
    )
}

export default PageDisplay;
