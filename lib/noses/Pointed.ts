const Pointed = {
  name: "Pointed",
  props: {},
  width: 32,
  height: 40,
  draw: (outlineColor = "#171921", skinColor = "#AC6651") => {
    return `
            <path d='M16.5 3C16.5 17 23.5 28 23.5 28C23.5 28 20 34 10 32' stroke='#171921' stroke-width='4' />
        `;
  },
};

export default Pointed;
