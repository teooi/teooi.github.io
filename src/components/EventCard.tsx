import type { Event } from "@/data/events";

export default function EventCard({ text, emphasis, suffix, link }: Event) {
  return (
    <div className="event">
      <span className="event-text">
        {text}
        {emphasis && <em>{emphasis}</em>}
        {suffix}
      </span>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    </div>
  );
}
