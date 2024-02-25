const Doug = {
    name: "Doug",
    props: {},
    width: 240,
    height: 200,
    draw: (topColor = "black") => {
        return `
        <path d='M140 56C154.667 55.3333 180.4 47.2 166 20' stroke='${topColor}' stroke-width='4' />
        <path d='M114 54C128.667 53.3333 154.4 45.2 140 18' stroke='${topColor}' stroke-width='4' />
        <path d='M78 65C92.6667 64.3333 118.4 56.2 104 29' stroke='${topColor}' stroke-width='4' />
        `;
    }
};

export default Doug;
