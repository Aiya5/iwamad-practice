import { Link, useParams } from "react-router";
import { events } from "../data/events";

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">← Back to events</Link>
      </>
    );
  }

  return (
    <>
      <h1>{event.title}</h1>
      <p>
        {event.date} · {event.place}
      </p>
      <Link to="/events">← Back to events</Link>
    </>
  );
}

export default EventDetailsPage;