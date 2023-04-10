// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "tag" }, "This is h1 tag"),
    React.createElement("h2", { id: "tag" }, "This is h2 tag"),
  ]),
  React.createElement(
    "div",
    { id: "parent2" },
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "tag" }, "This is h1 tag"),
      React.createElement("h2", { id: "tag" }, "This is h2 tag"),
    ])
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{
  /* <div id="parent">
  <div id="child1">
    <h1>This is h1 tag</h1>
    <h1>This is h1 tag</h1>
  </div>
</div>; */
}
