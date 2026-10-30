import { useState, type ChangeEvent, type SubmitEvent } from "react";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";
import Button from "../components/ui/Button";
import TextField from "../components/ui/TextField";

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({});

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  const errors = validateRegistration(values);

  function showError(field: keyof RegistrationValues): string | undefined {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <p role="status">Thanks, {values.fullName}. You are registered.</p>
    );
  }

  return (
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
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError("password")}
      />

      <TextField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={showError("confirmPassword")}
      />

      <div className="check">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          checked={values.acceptTerms}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="acceptTerms">I accept the terms</label>
      </div>
      {showError("acceptTerms") && (
        <p className="field-error">{showError("acceptTerms")}</p>
      )}

      <Button type="submit">Create account</Button>
    </form>
  );
}

export default RegisterPage;