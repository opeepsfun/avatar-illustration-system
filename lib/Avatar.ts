import Base from "./Base.js";
import { Ellipse, EllipseShadow, Round as RoundEye, Smiling } from "./eyes/index.js";
import { Attached, Detached } from "./ears/index.js";
import { Down, EyelashesDown, EyelashesUp, Up } from "./eyebrows/index.js";
import { RoundGlasses, SquareGlasses } from "./glasses/index.js";
import { Laughing, Frown, Nervous, Pucker, Sad, Smile, Smirk, Surprised } from "./mouths/index.js";
import { Round as RoundNose, Pointed, Curved } from "./noses/index.js";
import { MisterT, Fonze, Full, Bald, Doug, Phantom, Turban, Pixie } from "./tops/index.js";
import { Collared, Crew, Tee } from "./shirts/index.js";

const ears = { Attached, Detached };
const shirts = { Collared, Crew, Tee };
const tops = { MisterT, Fonze, Full, Bald, Doug, Phantom, Turban, Pixie };
const noses = { Round: RoundNose, Pointed, Curved };
const mouths = { Laughing, Frown, Nervous, Pucker, Sad, Smile, Smirk, Surprised };
const eyeglasses = { Round: RoundGlasses, Square: SquareGlasses };
const eyebrows = { Up, Down, EyelashesDown, EyelashesUp };
const eyes = { Smiling, Ellipse, EllipseShadow, Round: RoundEye };

type AvatarProps = {
    size: number;
    circle?: {
        backgroundColor?: string;
    };
    ear?: keyof typeof ears;
    mouth?: keyof typeof mouths;
    nose?: keyof typeof noses;
    glasses?: keyof typeof eyeglasses;
    eyebrow?: keyof typeof eyebrows;
    top?: keyof typeof tops;
    shirt?: keyof typeof shirts;
    eye?: keyof typeof eyes;
};

const drawTop = (option: keyof typeof tops) => {
    const svg = tops[option];

    if (option === "Turban") {
        return `<g transform="translate(3.5 0)">
            ${svg.draw()}
        </g>`;
    }

    if (option === "Full") {
        return `<g transform="translate(-26 2)">
            ${svg.draw()}
        </g>`;
    }

    if (option === "MisterT") {
        return `<g transform="scale(1.02)">
            ${svg.draw()}
        </g>`;
    }

    if (option === "Pixie") {
        return `<g transform="translate(-16 0)">
            ${svg.draw()}
        </g>`;
    }

    return svg.draw();
};

const drawMouth = (option: keyof typeof mouths) => {
    const svg = mouths[option];

    if (option === "Nervous") {
        return `<g transform="translate(-10 0)">
            ${svg.draw()}
        </g>`;
    }

    return svg.draw();
};

const drawEar = (option: keyof typeof ears) => {
    const svg = ears[option];

    if (option === "Attached") {
        return `<g transform="translate(1 0)">
            ${svg.draw()}
        </g>`;
    }

    return svg.draw();
};

const drawGlasses = (option: keyof typeof eyeglasses | undefined) => {
    if (!option) return "";

    const svg = eyeglasses[option];

    return svg.draw();
};

const Avatar = ({ circle, ear = "Detached", mouth = "Laughing", nose = "Round", glasses, eyebrow = "Up", eye = "Smiling", shirt = "Collared", top = "Fonze", size }: AvatarProps) => {
    const earSvg = drawEar(ear);
    const mouthSvg = drawMouth(mouth);
    const topSvg = drawTop(top);
    const selectedGlasses = drawGlasses(glasses);
    const selectedNose = noses[nose];
    const selectedEyebrow = eyebrows[eyebrow];
    const selectedShirt = shirts[shirt];
    const selectedEye = eyes[eye];

    const baseAvatar = `
        <g id="avatar">
            <g id="base" transform="translate(90 43)">
                ${Base.draw()}
            </g>
            <g id="mouth" transform="translate(180 203)">
                ${mouthSvg}
            </g>
            <g id="eyebrow" transform="translate(120 122)">
                ${selectedEyebrow.draw()}
            </g>
            <g id="top" transform="translate(59 31)">
                ${topSvg}
            </g>
            <g id="eye" transform="translate(152 139)">
                ${
                    selectedGlasses
                        ? `
                    <g id="glasses" transform="translate(-35 -8)">
                        ${selectedGlasses}
                    </g>`
                        : ""
                }
                ${selectedEye.draw()}
            </g>
            <g id="nose" transform="translate(196.37 168.42)">
                ${selectedNose.draw()}
            </g>
            <g id="ear" transform="translate(91 176.5)">
                ${earSvg}
            </g>
            <g id="shirt" transform="translate(48 292)">
                ${selectedShirt.draw()}
            </g>
        </g>   
    `;

    const svg = `
        <svg width="${size}" height="${size}" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${
                circle
                    ? `<circle cx="190" cy="190" r="190" fill="${circle.backgroundColor}"/>
                        <mask id="mask0_65_1039" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="${size}" height="${size}">
                            <circle cx="190" cy="190" r="190" fill="${circle.backgroundColor}"/>
                        </mask>`
                    : ""
            }
            ${
                circle
                    ? `<g mask="url(#mask0_65_1039)">
                            ${baseAvatar}
                        </g>`
                    : `${baseAvatar}`
            }
        </svg>
    `;

    return svg;
};

export default Avatar;
