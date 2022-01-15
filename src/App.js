import './App.css';
import Users from "./components/UsersHead/users/Users";
import Posts from "./components/PostsHead/Posts/Posts/Posts";
import Comments from "./components/CommentsHead/Comments/Comments";

const App = () => {
  return (
      <div className= "container">;
          <div className="App">;
              <div>
      <Users/>
              </div>
              <div>
              <Posts/>
                  </div>
      </div>
          <div>
              <Comments/>
          </div>
      </div>
  );
};

export default App;
