import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
    return (
        <Router>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </Router>
    )
}

export default Routes;