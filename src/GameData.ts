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
        image: "/JovianJump.png",
        banner: "/JovianJumpBanner.png",
        type: "Mobile Game",
    }
]