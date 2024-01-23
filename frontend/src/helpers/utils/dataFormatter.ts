export const  dataFormatter = (str: string | Date | number):string => {
    return new Date(parseInt(str.toString())).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    });
};
