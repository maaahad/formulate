export enum ColorPalette {
    white = '#ffffff',
    black = '#000000',
    grayF5 = '#f5f5f5',
    grayF0 = '#f0f0f0',
    grayDB= '#dbdbdb',
    gray86 = '#868686',
    gray66 = '#666666',
    gray30 = '#303030',
    blue1F = '#1f75cb',
    blue06 = '#064787',
    red8D = '#8d1300',
}

export interface Colors {
    ui: {
        primary: ColorPalette, 
        secondary: ColorPalette, 
        error: ColorPalette,
        hover: ColorPalette, 
        disabled: ColorPalette,
    },
    bg: {
        primary: ColorPalette, 
        secondary: ColorPalette, 
    },
    text: {
        primary: ColorPalette, 
        secondary: ColorPalette, 
        inverse: ColorPalette, 
        hover: ColorPalette, 
    }
}
