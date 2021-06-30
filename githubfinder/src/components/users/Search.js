import React, { useContext, useState } from 'react';
//import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// class Search extends Component {
//   state = {
//     text: ''
//   };

//   static propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired
//   };

//   onChange = (e) => {
//     this.setState({ text: e.target.value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text === '') {
//       this.props.setAlert('Please Enter Something', 'light');
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: '' });
//     }
//   };

//   render() {
//     const { clearUsers, showClear } = this.props;

//     return (
//       <div>
//         <form className="form" onSubmit={this.onSubmit}>
//           <div className="row">
//             <div className="col-md-8">
//               <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.onChange} />
//             </div>
//             <div className="col-md-4">
//               <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </div>
//           </div>
//         </form>
//         {showClear && (
//           <button className="btn btn-light btn-block" onClick={clearUsers}>
//             Clear
//           </button>
//         )}
//       </div>
//     );
//   }
// }

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please Enter Something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-8">
            <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
          </div>
          <div className="col-md-4">
            <input type="submit" value="Search" className="btn btn-dark btn-block" />
          </div>
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
//   //searchUsers: PropTypes.func.isRequired,
//   //clearUsers: PropTypes.func.isRequired,
//   //showClear: PropTypes.bool.isRequired,
//   //setAlert: PropTypes.func.isRequired
// };

export default Search;
