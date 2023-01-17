const App = () => {
  const [companies, setCompanies] = React.useState([]);
  const [profits, setProfits] = React.useState([]);

  const loadCompany = async () => {
    const response = await fetch("https://www.acme-api.com/api/companies");
    const compsInfo = await response.json();
    setCompanies(compsInfo);
  };

  const loadProfits = async () => {
    const id = location.hash.slice(1);
    if (id) {
      const response = await fetch(
        `https://www.acme-api.com/api/companies/${id}/companyProfits`
      );
      const compEarnings = await response.json();
      console.log("companies earn", compEarnings);
      setProfits(compEarnings);
    } else {
      setProfits([]);
    }
  };

  React.useEffect(() => {
    loadCompany();
    loadProfits();
    window.addEventListener("hashchange", loadProfits);
  }, []);
  return (
    <div className="wholeApp">
      <ul className="companies">
        {companies.map((comp) => {
          return (
            <li
              key={comp.id}
              className={comp.id === location.hash.slice(1) ? "selected" : null}
            >
              <a href={`#${comp.id}`}>{comp.name}</a>
            </li>
          );
        })}
      </ul>
      <ul className="compInfo">
        {profits.length > 0
          ? profits.map((prof) => {
              return (
                <li key={prof.id}>
                  <span>
                    {prof.id} Was founded on {prof.createdAt}
                  </span>
                  <br />
                  <span>
                    Earnings for the year of {prof.fiscalYear.slice(0, 4)} was
                    estimated at:
                    <br />
                    {prof.amount}
                  </span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

let root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
