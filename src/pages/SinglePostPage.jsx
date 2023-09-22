import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SinglePostPage = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()

  const handleClick = (tab) => {
    if (tab === "todos") {
      axios
        .get(`https://dummyjson.com/users/${id}/todos`)
        .then((resp) => setUserData(resp.data.todos));
    } else {
      axios
        .get(`https://dummyjson.com/users/${id}/posts`)
        .then((resp) => setUserData(resp.data.posts));
    }
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((resp) => setUser(resp.data));
  }, [id]);

  return (
    <><button onClick={() => navigate(-1)}>&lt; Назад</button>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>Возраст: {user.age}</p>

      <button onClick={() => handleClick("todos")}>
        <Link to="?tab=todos">Todos</Link>
      </button>

      <button onClick={() => handleClick("posts")}>
        <Link to="?tab=posts">Posts</Link>
      </button>

      <div>
        {userData && userData.length > 0 && (
          <ul>
            {userData.map((data) => (
              <li key={data.id}>{data.todo ?? data.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
