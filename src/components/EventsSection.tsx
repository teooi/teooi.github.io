import { events } from "@/data/events";
import EventCard from "./EventCard";

export default function EventsSection() {
  return (
    <section className="events">
      <h2 className="events-title">News</h2>
      {events.map((event) => (
        <EventCard key={event.text} {...event} />
      ))}
    </section>
  );
}
