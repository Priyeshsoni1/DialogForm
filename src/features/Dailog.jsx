import React from "react";
import "./Dialog.css";

const FormData = ({ onClose }) => {
  // Prevent click from propagating to background

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    console.log(e.target);
    const username = form.elements[0].value.trim();
    const email = form.elements[1].value.trim();
    const phone = form.elements[2].value.trim();
    const dob = form.elements[3].value;

    const today = new Date();
    const dobDate = new Date(dob);

    // Validate future DOB
    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // Validate phone number length
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    console.log("Form Data Submitted:", { username, email, phone, dob });

    // If validation passes, close the modal
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h1>Fill Details</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>Username:</label>
            <input type="text" required id="username" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>Email Address:</label>
            <input type="email" id="email" required />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>Phone Number:</label>
            <input type="tel" required id="phone" />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>Date of Birth:</label>
            <input type="date" required id="dob" />
          </div>
          <button
            className="submit-button"
            type="submit"
            style={{ backgroundColor: "#AFBFBEFF" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const Dialog = ({ open, onClose }) => {
  if (!open) return null;
  return <FormData onClose={onClose} />;
};
