import React from "react";

const Abilities = (props) => {
  const { abilities } = props;
  const regAbilities = abilities.filter(({ is_hidden }) => !is_hidden);
  const hiddenAbilities = abilities.filter(({ is_hidden }) => is_hidden);

  return (
    <>
      <div className="m-auto mt-4 underline">
        {abilities.length > 1 ? "Abilities" : "Ability"}
      </div>
      <div className="m-2 flex bg-slate-500 border-white border-2 rounded-md shadow-lg shadow-slate-800">
        <div>
          {regAbilities.map((ability, idx) => {
            const {
              slot,
              ability: { name },
            } = ability;
            return (
              <div
                key={idx}
                className="pl-5 pr-5 pb-5 border-yellow-500 border-2 m-2 bg-slate-800"
              >
                <div className="first-letter:capitalize">{name}</div>
                <div>Slot: {slot}</div>
              </div>
            );
          })}
        </div>
        {hiddenAbilities.length ? (
          <>
            <div className="mb-auto text-slate-900">
              {hiddenAbilities.length > 1
                ? "Hidden abilities :"
                : "Hidden ability :"}
            </div>
            <div className=" pl-5 pr-5 pb-5 border-yellow-500 border-2 m-2 bg-slate-800">
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
          </>
        ) : null}
      </div>
    </>
  );
};

export default Abilities;
