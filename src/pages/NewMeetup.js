import { useHistory } from 'react-router-dom';
import MeetupForm from '../components/meetups/MeetupForm.js';

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {

    fetch('https://react-getting-started-15c30-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/');
    })
  }


  return <section>
    <h1>Add New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetup;