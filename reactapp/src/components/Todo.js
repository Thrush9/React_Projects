import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="col-md card p-4 m-2 bg-secondary text-light">
      <h2>TITLE : {props.text}</h2>
      <div className="text-end">
        <button className="btn btn-outline-light" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal closeModal={closeModalHandler} />}
      {showModal && <Backdrop closeModal={closeModalHandler} />}
    </div>
  );
}

export default Todo;
