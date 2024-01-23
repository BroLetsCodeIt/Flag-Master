import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"

const cn = (...inputs :ClassValue[]) =>{
    return twMerge(clsx(...inputs))
}
export default cn;

// clsx function hai iska help se tailwind css mai conditional values pass kar sakthe hai.