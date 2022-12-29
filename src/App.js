import React from "react";
import { Router, Switch } from "react-router-dom";
//REDUX
import { Provider } from "react-redux";
import AlertContainer from "./Components/AlertContainer";
import Loading from "./Components/Loading";
import { store } from "./app/store";
import AppRoutes from "./Routes/app.router";
import { history } from "./Utils/constants";
import Home from "./Screens/Home";
import EditUser from "./Screens/EditUser";
import NotFound from "./Screens/NotFound";
import ModalUser from "./Components/ModalUser";

function App() {

  const routes = [{
    path: "/",
    element: Home,
    isPrivate: false,
    exact: true
}, 
{
    path: "/edit",
    element: EditUser,
    isPrivate: true,
    exact: true
},

{
    path: "/*",
    element: NotFound,
    isPrivate: false
}];

  return (
    <Provider store={store}>
                <Router history={history} getUserConfirmation={() => {
                  }}>
                  <Switch>
                    {routes.map((route) => (
                      <AppRoutes
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        isPrivate={route.isPrivate}
                        component={route.element}
                      />
                    ))}
                  </Switch>
                </Router>
                <AlertContainer/>
                <Loading/>
                <ModalUser/>
    </Provider>
  );
}

export default App;
