export type SignupValues = {
  fullName: string;
  email: string;
  tickets: string;
};

export type SignupErrors = Partial<Record<keyof SignupValues, string>>;

export function validateSignup(
  values: SignupValues,
  seatSelect: number
): SignupErrors {
  const errors: SignupErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email, like name@example.com";
  }

  const ticketsNumber = Number(values.tickets);
  if (
    !Number.isInteger(ticketsNumber) ||
    ticketsNumber < 1 ||
    ticketsNumber > 4
  ) {
    errors.tickets = "Choose 1 to 4 tickets";
  } else if (ticketsNumber > seatSelect) {
    errors.tickets = `Only ${seatSelect} seats left`;
  }

  return errors;
}