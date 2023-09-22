import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const PostsPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((resp) => setUsers(resp.data.users));
  }, []);

  return (
    <>
    <button onClick={() => navigate(-1)}>&lt; Назад</button>
      <section>
        <h1>Posts</h1>
        <div className="posts">
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <p>User {user.id}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
