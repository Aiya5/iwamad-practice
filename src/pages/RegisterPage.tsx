import { useState, type ChangeEvent, type SubmitEvent } from "react";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";
import Button from "../components/ui/Button";

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

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const errors = validateRegistration(values);

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
      <div className="field">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={submitAttempted && errors.fullName ? true : undefined}
        />
        {submitAttempted && errors.fullName && (
          <p className="field-error">{errors.fullName}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={submitAttempted && errors.email ? true : undefined}
        />
        {submitAttempted && errors.email && (
          <p className="field-error">{errors.email}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          aria-invalid={submitAttempted && errors.password ? true : undefined}
        />
        {submitAttempted && errors.password && (
          <p className="field-error">{errors.password}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          aria-invalid={
            submitAttempted && errors.confirmPassword ? true : undefined
          }
        />
        {submitAttempted && errors.confirmPassword && (
          <p className="field-error">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="check">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          checked={values.acceptTerms}
          onChange={handleChange}
        />
        <label htmlFor="acceptTerms">I accept the terms</label>
      </div>
      {submitAttempted && errors.acceptTerms && (
        <p className="field-error">{errors.acceptTerms}</p>
      )}
      <Button type="submit">Create account</Button>
    </form>
  );
}

export default RegisterPage;