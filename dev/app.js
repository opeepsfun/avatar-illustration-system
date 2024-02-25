import { Avatar } from "../build/index.js";

const avatar = Avatar({
    circle: { backgroundColor: "black" },
    size: 600,
    glasses: "Square",
    ear: "Attached",
    eye: "Round",
    top: "MisterT",
    shirt: "Crew",
    color: {
        topColor: "yellow",
        shirtColor: "yellow",
        collarColor: "pink",
        outlineColor: "white",
        glassFrameColor: "yellow"
    }
});

const parser = new DOMParser();
const svgDOM = parser.parseFromString(avatar, "image/svg+xml");

document.getElementById("illustration").appendChild(svgDOM.documentElement);
