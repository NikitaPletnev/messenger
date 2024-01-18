import { THEME } from "./types/actionTypes";

export const setTheme = (
    theme: string
): { type: string; theme: string} => {
    localStorage.setItem("theme", theme);
    return {
        type: THEME,
        theme,
    };
};
