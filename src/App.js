import Header from "./Component/Header";

function MyComponent(obj) {
  return <div>{obj.name}</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      hello <MyComponent name={"hrutik"}></MyComponent>
      <MyComponent name={"sargar"} />
    </div>
  );
}

export default App;
