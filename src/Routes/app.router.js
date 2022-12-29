
import {Redirect, Route} from "react-router-dom";

const AppRoutes = ({
    component: Component, 
    path,
    exact,
    isPrivate,
    ...rest
}) => {
  
    return (
        <Route
            path={path}
            exact={exact}
            render={props => 
             <Component {...props} />
            }
            {...rest}
        />
    );
}
    

export default AppRoutes;