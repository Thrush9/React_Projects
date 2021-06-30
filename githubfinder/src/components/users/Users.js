import React, { useContext } from 'react';
//import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// class Users extends Component {
//   //   state = {
//   //     users: [
//   //       {
//   //         id: 1,
//   //         login: 'mojombo',
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //         html_url: 'https://github.com/mojombo'
//   //       },
//   //       {
//   //         login: 'defunkt',
//   //         id: 2,
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//   //         html_url: 'https://github.com/defunkt'
//   //       },
//   //       {
//   //         login: 'pjhyett',
//   //         id: 3,
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//   //         html_url: 'https://github.com/pjhyett'
//   //       }
//   //     ]
//   //   };

//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map((user) => {
//           return <UserItem key={user.id} user={user} />;
//         })}
//       </div>
//     );
//   }
// }

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

// Users.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   users: PropTypes.array.isRequired
// };

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;
