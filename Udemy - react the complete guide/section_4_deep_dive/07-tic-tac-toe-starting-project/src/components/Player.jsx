import { useState } from "react";
export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let buttonLabel = isEditing ? "Save" : "Edit";

  let playerField = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerField = (
      <input
        type="text"
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        value={playerName}
        required
      />
    );
  }

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  return (
    <li>
      <span className="player">
        {playerField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonLabel}</button>
    </li>
  );
}
