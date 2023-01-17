const App = () => {
  const [players, setPlayers] = React.useState([]);
  const [detail, setDetail] = React.useState([]);
  const loadPlayers = async () => {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-AM/players"
    );
    const json = await response.json();
    setPlayers(json.data.players);
  };
  const loadDetail = async () => {
    const id = location.hash.slice(1);
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-AM/players/${id}`
    );
    const json = await response.json();
    const player = json.data.player;
    setDetail(player);
  };
  React.useEffect(() => {
    loadPlayers();
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", loadDetail);
  }, []);
  return (
    <div>
      <h1>Puppy Bowl React</h1>
      <ul>
        {detail.id ? <img src={detail.imageUrl} alt="" /> : null}
        {players.map((player) => {
          return (
            <li key={player.id}>
              <a href={`#${player.id}`}>{player.name}</a>
              <br />
              {player.breed}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
let root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
