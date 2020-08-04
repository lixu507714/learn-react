
// import asyncComponent from '@unitl';

import React from  'react';
import Login from '../pages/login/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// export class route extends Component {
    function route() {
    return (
            <Router>
            <Route path="/login" Component={Login} />
            </Router>
        )
    }
    // Render () {
    //     return (
    //         <Router>
    //         <Route path="/login" Component={Login} />
    //         </Router>
    //     )
    // }
// }

export default route ;