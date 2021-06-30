//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
//import Users from './components/users/Users';
//import axios from 'axios';
//import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  //const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);
  //const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);

  // const searchUsers = async (text) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //this.setState({ users: res.data.items, loading: false });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // const clearUsers = () => {
  //   //this.setState({ users: [], loading: false });
  //   setUsers([]);
  //   setLoading(false);
  // };

  // const showAlert = (message, type) => {
  //   //this.setState({ alert: { message, type } });
  //   setAlert({ message, type });
  //   setTimeout(() => setAlert(null), 3000);
  // };

  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //this.setState({ user: res.data, loading: false });
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //this.setState({ repos: res.data, loading: false });
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

// class App extends Component {
//   state = {
//     users: [],
//     loading: false,
//     alert: null,
//     user: {},
//     repos: []
//   };

//   // async componentDidMount() {
//   //   this.setState({ loading: true });
//   //   const res = await axios.get(
//   //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   //   );
//   //   this.setState({ users: res.data, loading: false });
//   // }

//   searchUsers = async (text) => {
//     this.setState({ loading: true });
//     const res = await axios.get(
//       `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );
//     this.setState({ users: res.data.items, loading: false });
//   };

//   clearUsers = () => {
//     this.setState({ users: [], loading: false });
//   };

//   setAlert = (message, type) => {
//     this.setState({ alert: { message, type } });
//     setTimeout(() => this.setState({ alert: null }), 3000);
//   };

//   getUser = async (username) => {
//     this.setState({ loading: true });
//     const res = await axios.get(
//       `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );
//     this.setState({ user: res.data, loading: false });
//   };

//   getUserRepos = async (username) => {
//     this.setState({ loading: true });
//     const res = await axios.get(
//       `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );
//     this.setState({ repos: res.data, loading: false });
//   };

//   render() {
//     const { users, user, repos, loading } = this.state;

//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Alert alert={this.state.alert} />
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={(props) => (
//                   <Fragment>
//                     <Search
//                       searchUsers={this.searchUsers}
//                       clearUsers={this.clearUsers}
//                       showClear={users.length > 0 ? true : false}
//                       setAlert={this.setAlert}
//                     />
//                     <Users loading={loading} users={users} />
//                   </Fragment>
//                 )}
//               ></Route>
//               <Route exact path="/about" component={About}></Route>
//               <Route
//                 exact
//                 path="/user/:login"
//                 render={(props) => (
//                   <User {...props} getUser={this.getUser} user={user} loading={loading} getUserRepos={this.getUserRepos} repos={repos} />
//                 )}
//               ></Route>
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
