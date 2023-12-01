import React from "react";
import { useState } from "react";
const UserInput = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          ></input>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
