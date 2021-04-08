import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Sign Out"
            onRight={(() => firebase.auth().signOut(), () => Actions.auth())}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            rightTitle="Sign Out"
            onRight={(() => firebase.auth().signOut(), () => Actions.auth())}
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            rightTitle="Sign Out"
            onRight={(() => firebase.auth().signOut(), () => Actions.auth())}
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
