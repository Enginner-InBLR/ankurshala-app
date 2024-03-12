import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LoginPage from './views/login-page'
import StudentSignupForm from './views/student-signup-form'
import TeacherSignupForm from './views/teacher-signup-form'
import TeacherVerificationForm from './views/teacher-verification-form'
import StudentQuizForm from './views/student-quiz-form'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} exact path="/" />
        <Route component={StudentSignupForm} exact path="/StudentSignup" />
        <Route component={TeacherSignupForm} exact path="/TeacherSignup" />
        <Route component={TeacherVerificationForm} exact path="/TeacherVerification" />
        <Route component={StudentQuizForm} exact path="/StudentQuizForm" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
