import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
  const data = calculateInvestmentResults(userInput);
  const elements = data.map((item) => (
    <tr>
      <td>{item.year}</td>
      <td>{item.year}</td>
    </tr>
  ));
  return (
    <table className="center" id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{/* dynamic content */}</tbody>
    </table>
  );
};

export default Results;
