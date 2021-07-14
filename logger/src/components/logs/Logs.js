import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/logs');
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? <p className="center">No Logs to Show.</p> : logs.map((log) => <LogItem key={log.id} log={log} />)}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log
});

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getLogs })(Logs);
