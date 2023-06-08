import "./login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Heloo World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            voluptates dolorem necessitatibus ratione, libero amet at fuga
            veniam. Distinctio culpa nesciunt, est placeat ullam sint
            consequuntur nobis, provident, praesentium eius quisquam aut porro
            eligendi tempora architecto eum accusamus omnis? Repellat molestias
            obcaecati consequatur reprehenderit, eius commodi possimus veritatis
            porro aperiam.
          </p>
          <span>Don't you have an account</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder="UserName" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
