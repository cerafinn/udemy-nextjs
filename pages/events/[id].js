import { useRouter } from 'next/router';
import { getEventById } from '../../test-data';

function EventDetails() {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <p>No event found!</p>
    )
  }

  return (
    <div>
      <h1>Event Details</h1>
    </div>
  )
}

export default EventDetails;