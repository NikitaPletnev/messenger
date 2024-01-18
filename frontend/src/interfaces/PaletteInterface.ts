export interface PaletteInterface {
    light: ColorPackInterface,
    dark: ColorPackInterface,
}

interface ColorPackInterface {
    mainBg: string;
    themeButtonColor: string;
    yellow: string;
    blue: string;
}
