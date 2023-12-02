import { useState } from "react";

import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const onChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  };

  return (
    <main>
      <Header />
      {/* User Input */}
      <UserInput userInput={userInput} onChange={onChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0!</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
      {/* Results */}
    </main>
  );
}

export default App;
