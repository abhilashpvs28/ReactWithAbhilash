import React from "react";
import ReactDOM from "react-dom/client"; // Import the `createRoot` API

const Paragraph = () => {
    let name = "Paragraph"
  return <p>Hi, this is {name}.</p>;
};

const Paragraph2 = () => <h1>Hi this is Heading H2</h1>;

let numb = 3;
const Paragraph3 = () => (
  <div id="para3">
    <Paragraph/>
    <Paragraph2 />
    <h3 className="Heading3">Hi this Heading From Tag H{0+numb} 😶‍🌫️</h3>
  </div>
);

// Create a root and render the component into the #root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Paragraph3 />);
