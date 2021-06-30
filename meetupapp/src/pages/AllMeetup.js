import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

// const data = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description: 'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
//   }
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setLoadMeetups] = useState([]);

  function loadMeetupData() {
    setIsLoading(true);
    fetch('https://meetup-react-b584e-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadMeetups(meetups);
      })
      .catch((error) => console.log(error));
  }

  useEffect(loadMeetupData, []);

  if (isLoading) {
    return (
      <section>
        <div className="container pt-4">
          <p className="lead"> Loading Meetups... Please Wait! </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container p-4">
        <h2 className="text-center">All MeetUps</h2>
        <MeetupList meetups={loadMeetups} />
      </div>
    </section>
  );
}

export default AllMeetupsPage;
