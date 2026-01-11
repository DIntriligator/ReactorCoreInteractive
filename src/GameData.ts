import JovianJump from "@/assets/JovianJump.png";
import JovianJumpBanner from "@/assets/JovianJumpBanner.png";

export interface Game {
    id: number;
    title: string;
    image: string;
    type: string;
    banner?: string;
}

export const games = [
    {
        id: 1,
        title: "Jovian Jump",
        image: JovianJump,
        banner: JovianJumpBanner,
        type: "Mobile Game",
    }
]