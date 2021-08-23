import logo from './logo.svg';
import './App.css';
import Navigationbar from './navbarfile/nav'
import {BrowserRouter as Rt,Route,Switch} from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Error from './pages/error'
import Signup from './pages/signup'
import Login from './pages/login'
import {AuthProvider} from './authentication/AuthContext'
import ForgotPassword from './pages/forgotPassword'
import Protectedroute from './authentication/privateroute'
import Dashboard from './pages/dashboard'
import ResetProfile from './pages/ResetProfile'
import Read from './pages/Readblog'
import CreateB from './pages/createBlog'
import Graph from './pages/graph'
import Createpost from './pages/createpost'
import Readp from './pages/Readpost'

function App() {
  return (
    <Rt>
      <AuthProvider>
      <Navigationbar/>
          <Switch>
            <Route exact path="/" component={Home}>
              <Home/>
            </Route>

            <Route path="/about" component={About}>
              <About/>
            </Route>


            <Protectedroute path="/dashboard" component={Dashboard}/>

            <Protectedroute path="/reset-profile" component={ResetProfile}/>
            
            <Protectedroute path="/create-blog" component={CreateB}/>
            <Protectedroute path="/read-post" component={Readp}/>

            <Protectedroute path="/read-blog" component={Read}/>
            <Protectedroute path="/task-traking" component={Graph}/>
            <Protectedroute path="/create-post" component={Createpost}/>
            <Route path="/signup" component={Signup}>
              <Signup/>
            </Route>

            

            <Route path="/login" component={Login}>
              <Login/>
            </Route>

            
            <Route path="/forgot-password" component={ForgotPassword}>
              <ForgotPassword/>
            </Route>

            <Route path="*" component={Error}>
              <Error/>
            </Route>
          </Switch>
      </AuthProvider>
    </Rt>
    
  );
}

export default App;
