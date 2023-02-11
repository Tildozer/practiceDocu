import React from "react";

const Stats = (props) => {
  const { stats } = props;

  return (
    <>
      <div>Base Stats</div>
      <div className="grid grid-cols-3 grid-flow-row m-3">
        {stats.map((statInfo, idx) => {
          const {
            effort,
            base_stat,
            stat: { name },
          } = statInfo;
          return (
            <div
              key={idx}
              className="border-yellow-500 border-2 p-3 first-letter:capitalize text-center"
            >
              <span>{name} : </span>
              <span>{base_stat}, </span>
              <br />
              <span>Effort: {effort} </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stats;
