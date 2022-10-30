import { MarginProps, Width } from "@styles/layout/layout.types";
import type { ShipType } from "../types";

export interface ShipsPros extends MarginProps, Width {
    ships: ShipType[];
    onClick:(id: string) => void;
    visitedShips: string[];
}