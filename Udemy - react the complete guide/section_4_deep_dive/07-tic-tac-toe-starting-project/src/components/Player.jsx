import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let buttonLabel = isEditing ? "Save" : "Edit";

  let playerField = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerField = (
      <input type="text" onChange={handleChange} value={playerName} required />
    );
  }

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
