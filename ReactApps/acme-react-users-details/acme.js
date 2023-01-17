const App = () => {
  const [user, setUsers] = React.useState([]);
  const [detail, setDetails] = React.useState([]);

  const loadUsers = async () => {
    const response = await fetch("https://www.acme-api.com/api/users");
    const usersInfo = await response.json();
    const users = usersInfo.users;
    setUsers(users);
  };

  const loadDetail = async () => {
    const id = location.hash.slice(1);
    if (id) {
      const response = await fetch(
        `https://www.acme-api.com/api/users/detail/${id}`
      );
      const details = await response.json();
      setDetails(details);
    } else {
      setDetails({});
    }
  };
  React.useEffect(() => {
    loadUsers();
  }, []);

  React.useEffect(() => {
    window.addEventListener("hashchange", loadDetail);
    loadDetail();
    loadUsers();
  }, []);
  return (
    <div>
      {detail.id ? (
        <div>
          <a href="">
            <h1>Acme employee details</h1>
          </a>
          <h2>
            {detail.firstName} {detail.middleName} {detail.lastName}
          </h2>
          <h2>{detail.title}</h2>
          <h3> {detail.email}</h3>
          <img
            src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
            alt=""
          />
          <br />
          <h4>{detail.bio}</h4>
          {detail.companyId}
        </div>
      ) : (
        <h1>Acme employee details</h1>
      )}
      <ul>
        {user.map((user) => {
          return (
            <li key={user.id}>
              <a href={`#${user.id}`}> {user.fullName} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
let root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
