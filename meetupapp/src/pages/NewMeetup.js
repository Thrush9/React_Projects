import MeetupForm from '../components/meetups/MeetupForm';
import { useHistory } from 'react-router-dom';

//https://meetup-react-b584e-default-rtdb.asia-southeast1.firebasedatabase.app/
function NewMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetup) {
    console.log(meetup);
    fetch('https://meetup-react-b584e-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        history.replace('/');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container p-4">
      <h2 className="text-center">New MeetUps</h2>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupsPage;
