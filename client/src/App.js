import "./App.css"
import PostPage from "./pages/post/PostPage"

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">Fionon</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <PostPage/>
    </main>
  );
}

export default App;
