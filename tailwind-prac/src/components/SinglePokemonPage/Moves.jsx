import React from "react";

const Moves = (props) => {
  const {moves} = props;
   
  console.log(moves[0])

  return (
  <div>
    {moves.length ? 
      (
      <div className="grid grid-flow-rows grid-cols-3 p-5">
        {moves.map((moveInfo, idx) => {
          return ( 
          <div key={idx} className="p-4 m-3">
            <h3>{moveInfo.move.name}</h3>
            <h6>
              {moveInfo.version_group_details.length ? 
                moveInfo.version_group_details.map((details, idx) => {
                  return (
                    <div>
                      <div>
                        Level learned: {details.level_learned_at}
                      </div>
                      {/* <div>
                         move learned by {details.move_learn_method.name}
                      </div>
                      <div>
                        game: {details.version_group.name}
                      </div> */}

                    </div>
                  )
                })
                : null
              }
            </h6>
          </div>
          )
        })}
      </div>
      ) : (
      <div>
        Moveless??? 
      </div>
      )
    }
  </div>
  )
};

export default Moves;
