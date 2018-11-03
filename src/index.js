import _ from "lodash";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  const element = document.createElement("pre");

  element.innerHTML = [
    "Hello webpack!",
    "How are you?",
    "I am fine! Thank you!"
  ].join("\n\n");

  return element;
}

document.body.appendChild(component());
