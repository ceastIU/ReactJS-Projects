import React from "react";

const Results = () => {
  return (
    <table className="center" id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>{/* dynamic content */}</tbody>
    </table>
  );
};

export default Results;
