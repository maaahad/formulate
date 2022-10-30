import { MarginProps, Width } from "@styles/layout/layout.types";
import type { ShipType } from "../types";

export interface ShipCardProps extends MarginProps, Width {
    ship: ShipType;
    onClick: (id: string) => void;
    visited?: boolean;
}