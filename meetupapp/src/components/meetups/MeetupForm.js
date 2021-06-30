import { useRef } from 'react';

function MeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const meetupData = {
      title,
      image,
      address,
      description
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <div className="card col-md-8 rounded-4 p-2 mx-auto">
      <div className="card-body">
        <form action="" onSubmit={submitHandler}>
          <div className="row">
            <div className="form-group mb-3">
              <label htmlFor="title" className="form-label">
                Meetup Title
              </label>
              <input type="text" className="form-control" id="title" placeholder="Enter Title" required ref={titleInputRef}></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image" className="form-label">
                Meetup Image
              </label>
              <input type="url" className="form-control" id="image" placeholder="Enter Image Url" required ref={imageInputRef}></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address" className="form-label">
                Meetup Address
              </label>
              <input type="text" className="form-control" id="address" placeholder="Enter Address" required ref={addressInputRef}></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">
                Meetup Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                rows="5"
                placeholder="Enter Description"
                required
                ref={descriptionInputRef}
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Add Meetup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MeetupForm;
