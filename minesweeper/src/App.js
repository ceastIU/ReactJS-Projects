import "./App.css";
import Logo from "./assets/logo.png";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div>
      <header className="w-screen flex flex-row justify-evenly bg-gray-800">
        <img className="w-40 p-4 rounded-3xl" src={Logo} alt="My logo" />
        <p className="text-white font-dhurjati text-9xl">MineSweeper</p>
      </header>
      <main>
        <GameBoard />
      </main>
    </div>
  );
}

export default App;
