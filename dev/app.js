import { Avatar } from "../build/index.js";

const avatar = Avatar({ circle: { backgroundColor: "brown" }, size: 600, glasses: "Square", ear: "Attached", eye: "Round", shirt: "Crew" });

const parser = new DOMParser();
const svgDOM = parser.parseFromString(avatar, "image/svg+xml");

document.getElementById("illustration").appendChild(svgDOM.documentElement);
