import MeetupItem from './MeetupItem';

function MeetupList(props) {
  return (
    <div className="row d-flex justify-content-between align-items-center flex-wrap">
      {props.meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </div>
  );
}

export default MeetupList;
