import React, { useEffect } from 'react';
import TechItem from './TechItem';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  //const [techs, setTechs] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/techs');
  //   const data = await res.json();
  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">{!loading && techs !== null && techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
