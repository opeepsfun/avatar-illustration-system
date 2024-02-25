const Ellipse = {
    name: "Ellipse",
    props: {},
    width: 96,
    height: 48,
    draw: () => {
        return `
        <ellipse cx='16.5301' cy='29.4023' rx='9' ry='13.5' transform='rotate(-6.77646 16.5301 29.4023)' fill='black' />
        <ellipse cx='80.5312' cy='19.4021' rx='9' ry='13.5' transform='rotate(-6.27568 80.5312 19.4021)' fill='black' />
        `;
    }
};

export default Ellipse;
