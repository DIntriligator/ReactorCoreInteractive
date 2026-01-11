import JovianJump from "@/assets/JovianJump.png";
import JovianJumpBanner from "@/assets/JovianJumpBanner.png";

export interface Game {
    id: string;
    title: string;
    image: string;
    type: string;
    banner?: string;
}

export const games = [
    {
        id: "jovian-jump",
        title: "Jovian Jump",
        image: JovianJump,
        banner: JovianJumpBanner,
        type: "Mobile Game",
    }
]