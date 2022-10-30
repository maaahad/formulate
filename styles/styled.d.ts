import { Colors } from './colors/colors.types';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors;
        boxShadow: {
            button: string;
        }
        borderRadius: {
            small: number;
            medium: number;
        };
    }
}