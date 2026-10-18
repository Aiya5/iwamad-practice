import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { CampusEvent } from "../data/events";
import {
  validateSignup,
  type SignupValues,
} from "../lib/validateSignup";
import Button from "./ui/Button";
import TextField from "./ui/TextField";

type EventSignupFormProps = {
  event: CampusEvent;
};

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: "",
    email: "",
    tickets: "1",
  });

  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  const errors = validateSignup(values, seatsLeft);

  function showError(field: keyof SignupValues): string | undefined {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const tickets = Number(values.tickets);
    setSeatsLeft(seatsLeft - tickets);
    setMessage(`Booked: ${values.tickets} for ${values.fullName}.`);
    setValues({ fullName: "", email: "", tickets: "1" });
    setTouched({});
    setSubmitAttempted(false);
  }

  return (
    <section className="signup">
      <h2>Book a seat</h2>
      <p>Seats left: {seatsLeft}</p>

      {message && <p role="status">{message}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("fullName")}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("email")}
        />

        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError("tickets")}
        />

        <Button type="submit">Book</Button>
      </form>
    </section>
  );
}

export default EventSignupForm;