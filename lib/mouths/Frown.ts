const Frown = {
    name: "Frown",
    props: {},
    width: 77,
    height: 64,
    draw: (outlineColor = "#171921", skinColor = "#AC6651") => {
        return `
            <path d='M2 41C5.21065 33.0427 17.1069 16.2329 39.0069 12.6522C60.9069 9.07139 72.1273 21.1068 75 27.5721' stroke='black' stroke-width='4' />
        `;
    }
};

export default Frown;
