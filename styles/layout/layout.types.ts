
type AllowedSpace = 'auto' | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 96 | 120 | 180;
export interface MarginProps {
    mgl?: AllowedSpace;
    mgt?: AllowedSpace;
}

export interface Width {
    width?: number | 'full' | undefined; 
}
