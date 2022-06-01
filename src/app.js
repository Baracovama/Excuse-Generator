/* eslint-disable */
import "bootstrap";
import "./style.css";

let textexcuse = document.querySelector("#excuse");
let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

let randomNumber = arr => Math.floor(Math.random() * arr.length);
const seleccion = arr => arr[randomNumber(arr)];

textexcuse.textContent = ` ${seleccion(who)} ${seleccion(what)}  ${seleccion(
  when
)}.`;
