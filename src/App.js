import Main from "./Component/Header";
import { Header1, Header2 } from "./Component/Header";

function MyComponent(obj) {
  return <div>{obj.name}</div>;
}

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Main />
    </div>
  );
}

export default App;
