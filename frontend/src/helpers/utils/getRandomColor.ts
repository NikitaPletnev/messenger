export const getRandomColor = ():string => {
    return "#" + (Math.floor(Math.random() * 2 ** 24)).toString(16);
};
