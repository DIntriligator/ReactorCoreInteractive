import JovianJump from "@/assets/JovianJump.png";
import JovianJumpBanner from "@/assets/JovianJumpBanner.png";

export interface Game {
    id: string;
    title: string;
    image: string;
    type: string;
    banner?: string;
    description?: string;
    soundtrack?: string;
}

export const games = [
    {
        id: "jovian-jump",
        title: "Jovian Jump",
        image: JovianJump,
        banner: JovianJumpBanner,
        type: "Mobile Game",
        soundtrack: "https://reactorcore.bandcamp.com/album/jovian-jump",
        description: "Jovian Jump is a fast-paced space platformer set across the mysterious moons of Jupiter. Wall-cling, boost, and navigate alien terrain as you race to reach your ship before your air runs out. Collect stars, discover unique power-ups, and unlock new astronaut suits as you master each handcrafted level. Precision, timing, and a little bit of cosmic courage will take you far—are you ready to make the jump?"
    }
]