import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import React from 'react';
import AppContainer from './components/App';
import MainPage from './components/MainPage/MainPage';
import UserInfo from './containers/DetailInfo/DetailContainer';
import CreateUser from './containers/CreateUser/CreateUserContainer';
// import ShowMore from './containers/Pagination/PaginationContainer';

export default function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={MainPage} />
        <Route path="edit/:id" component={UserInfo} />
        <Route path="new" component={CreateUser} />
      </Route>
    </Router>
  );
}
