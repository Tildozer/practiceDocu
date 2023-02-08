import React from "react";

const Abilities = (props) => {
  const { abilities } = props;
  return (
    <div>
      {abilities.map((ability, idx) => {
        const {
          is_hidden,
          slot,
          ability: { name, url },
        } = ability;
        return (
          <div key={idx}>
            <div>{name}</div>
            <div>{is_hidden}</div>
            <div>{slot}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Abilities;
