import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
  const data = calculateInvestmentResults(userInput);
  let totalInvestment = userInput.initialInvestment;
  let totalInterest = 0;
  const elements = data.map((item) => {
    totalInvestment += item.annualInvestment;
    totalInterest += item.interest;
    return (
      <tr>
        <td>{item.year}</td>
        <td>{formatter.format(item.valueEndOfYear)}</td>
        <td>{formatter.format(item.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalInvestment)}</td>
      </tr>
    );
  });
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
      <tbody>{elements}</tbody>
    </table>
  );
};

export default Results;
