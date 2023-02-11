import React from "react";

const Abilities = (props) => {
  const { abilities } = props;
  const regAbilities = abilities.filter(({ is_hidden }) => !is_hidden);
  const hiddenAbilities = abilities.filter(({ is_hidden }) => is_hidden);

  return (
    <>
    <div>Abilities</div>
    <div className="m-2 flex border-inherit border-yellow-500 border-2">
      <div>
      {regAbilities.map((ability, idx) => {
        const {
          slot,
          ability: { name },
        } = ability;
        return (
          <div key={idx} className=" pl-5 pr-5 pb-5 border-yellow-500 border-2 m-2">
            <div className="first-letter:capitalize">{name}</div>
            <div>Slot: {slot}</div>
          </div>
        );
      })}
      </div>
      {hiddenAbilities.length > 1 ? (
        <div className=" mt-auto mb-auto">Hidden abilities :</div>
      ) : (
        <div className=" mt-auto mb-auto">Hidden ability :</div>
      )}
      <div className=" pl-5 pr-5 pb-5 border-yellow-500 border-2 m-2">
      {hiddenAbilities.map((ability, idx) => {
        const {
          slot,
          ability: { name },
        } = ability;
        return (
          <div key={idx}>
            <div className="first-letter:capitalize">{name}</div>
            <div>Slot: {slot}</div>
          </div>
        );
      })}
      </div>
    </div>
    </>
  );
};

export default Abilities;
