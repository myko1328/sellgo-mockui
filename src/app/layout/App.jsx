import React, { Fragment } from 'react';
import NavMenu from '../../features/nav/navBar';
import BreadcrumbsProfit from '../../features/breadcrumbs/breadcrumbs';
import { Container } from 'semantic-ui-react';
import UserDashboard from '../../features/userDashboard/userDashboard';

class App extends React.Component {
  render(){
    return (
      <Fragment>
        <NavMenu />   
        <Container fluid className="main">
          <BreadcrumbsProfit />
          <UserDashboard />
        </Container> 
      </Fragment>
      
    );
  }
}

export default App;
