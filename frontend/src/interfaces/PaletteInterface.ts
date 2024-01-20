export interface PaletteInterface {
    light: ColorPackInterface,
    dark: ColorPackInterface,
}

interface ColorPackInterface {
    mainBg: string;
    mainBgRgba: string;
    textFieldBackground: string;
    textColor: string;
    titleColor: string;
    themeButtonColor: string;
    yellow: string;
    blue: string;
    red: string;
    headingBg: string;
    dropdownBg: string;
}
