import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "Alfred");
  const lastNameInput = screen.getByLabelText(/last name:/i);
  userEvent.type(lastNameInput, "Alv");
  const addressInput = screen.getByLabelText(/address:/i);
  userEvent.type(addressInput, "123 Some Street");
  const cityInput = screen.getByLabelText(/city:/i);
  userEvent.type(cityInput, "San Diego");
  const stateInput = screen.getByLabelText(/state:/i);
  userEvent.type(stateInput, "California");
  const zipInput = screen.getByLabelText(/zip:/i);
  userEvent.type(zipInput, "00000");

  const submit = screen.getByRole("button");
  userEvent.click(submit);

  await waitFor(() => {
    const successMessage = screen.queryByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent("Alfred");
    expect(successMessage).toHaveTextContent("Alv");
    expect(successMessage).toHaveTextContent("123 Some Street");
    expect(successMessage).toHaveTextContent("San Diego");
    expect(successMessage).toHaveTextContent("California");
    expect(successMessage).toHaveTextContent("00000");
  });
});