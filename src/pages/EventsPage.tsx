import { events } from "../data/events";
import EventCard from "../components/EventCard";

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </>
  );
}

export default EventsPage;