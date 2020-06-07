import React from "react";
import './Layout.css'
import {Link, Route, Switch} from "react-router-dom";
import Todo from "../Todo/Todo";
import List from "../List/List";

const Layout = () => {

    return(
        <div className="main">
             <div className="todo-button"><Link to="/todo" style={{textDecoration:'none', color:'white', selected:'border solid', paddingLeft:10, display:'block'}}>Todo</Link></div>

                    <Switch>
                        <Route path="/todo" component={Todo} />
                        <Route path="/list" component={List} />
                    </Switch>

            <div className="list-button"><Link to="/list" style={{textDecoration:'none', color:'white', paddingLeft:10,  display:'block'}}>List</Link></div>
            <div className="footer">by ozanaydin</div>
        </div>
    )
};

export default Layout;