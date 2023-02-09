import React from "react";

const Abilities = (props) => {
  const { abilities } = props;
  const regAbilities = abilities.filter(({ is_hidden }) => !is_hidden);
  const hiddenAbilities = abilities.filter(({ is_hidden }) => is_hidden);

  return (
    <div className="m-2">
      <span>Abilities</span>
      <div className="m-4">
      {regAbilities.map((ability, idx) => {
        const {
          slot,
          ability: { name, url },
        } = ability;
        return (
          <div key={idx} className="flex gap-4">
            <div className="first-letter:capitalize">{name}</div>
            <div>Slot: {slot}</div>
          </div>
        );
      })}
      </div>
      {hiddenAbilities.length > 1 ? (
        <span>Hidden abilities</span>
      ) : (
        <span>Hidden abilility</span>
      )}
      <div className="m-4">
      {hiddenAbilities.map((ability, idx) => {
        const {
          slot,
          ability: { name },
        } = ability;
        return (
          <div key={idx} className="flex gap-4">
            <div className="first-letter:capitalize">{name}</div>
            <div>Slot: {slot}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Abilities;
