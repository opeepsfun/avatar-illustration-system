import { Avatar } from "../build/index.js";

const avatar = Avatar({
    circle: { backgroundColor: "brown" },
    size: 600,
    glasses: "Square",
    ear: "Detached",
    eye: "Round",
    top: "MisterT",
    mouth: "Surprised",
    shirt: "Crew",
    color: {
        topColor: "yellow",
        shirtColor: "yellow",
        collarColor: "pink",
        outlineColor: "black",
        glassFrameColor: "yellow"
    }
});

const parser = new DOMParser();
const svgDOM = parser.parseFromString(avatar, "image/svg+xml");

document.getElementById("illustration").appendChild(svgDOM.documentElement);
