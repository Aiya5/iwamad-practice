import { Link } from "react-router";
import type { CampusEvent } from "../data/events";
import Card from "./ui/Card";
import Tag from "./ui/Tag";

type EventCardProps = {
  event: CampusEvent;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p className="event-meta">
        {event.date} · {event.place}
      </p>
      <Tag label={`${event.seats} seats`} />
      <Link to={`/events/${event.id}`}>Details</Link>
    </Card>
  );
}

export default EventCard;