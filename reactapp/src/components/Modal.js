function Modal(props) {
  function confirmHandler() {
    props.closeModal();
  }

  return (
    <div className="modal-card col-md-3 card p-4 m-2 bg-light text-secondary">
      <h4 className="text-center">Are you sure?</h4>
      <div className="d-flex justify-content-around p-1">
        <button className="btn btn-danger btn-lg" onClick={confirmHandler}>
          Confirm
        </button>
        <button className="btn btn-secondary btn-lg" onClick={props.closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
