import JovianJump from "@/assets/JovianJump.png";
import JovianJumpBanner from "@/assets/JovianJumpBanner.png";
import JovianJumpTrailer from "@/assets/jovian-jump.mp4";

export interface Game {
    id: string;
    title: string;
    image: string;
    type: string;
    genre: string;
    banner: string;
    description: string;
    soundtrack: string;
    pitch: string;
    platforms: string;
    history: string;
    keyFeatures: string[];
    trailer: string;
    trailerFile?: string;
    
}

export const games = [
    {
        id: "jovian-jump",
        title: "Jovian Jump",
        image: JovianJump,
        banner: JovianJumpBanner,
        type: "Mobile Game",
        genre: "2D precision platformer with exploration and light puzzle elements",
        soundtrack: "https://reactorcore.bandcamp.com/album/jovian-jump",
        platforms: "iOS, Android",
        pitch: "Jovian Jump is a space-themed mobile platformer set on the moons of Jupiter. Wall-cling, boost, and race against dwindling oxygen to reach your ship while collecting stars and navigating handcrafted levels.",
        longDescription: `
        Jovian Jump is a fast, atmospheric platformer where players leap across the icy and volcanic moons of Jupiter on a mission to make it back to their ship before their oxygen runs out. Each level challenges players to collect stars, avoid hazards, and master air-efficient movement using wall-clings, boosts, and momentum-based traversal.<br /><br />

        Oxygen is always ticking down — synthetic oxygen trees provide lifesaving air refills and create short, tactical pauses in an otherwise tense, mobile-friendly platforming run. Stars and secret collectibles reward exploration and clean execution, while unlockable suits let players customize their astronaut as they progress through the game.<br /><br />

        Designed for satisfying short sessions, Jovian Jump mixes cosmic vibes with precision platforming and arcade urgency.   `,
        description: "Jovian Jump is a fast-paced space platformer set across the mysterious moons of Jupiter. Wall-cling, boost, and navigate alien terrain as you race to reach your ship before your air runs out. Collect stars, discover unique power-ups, and unlock new astronaut suits as you master each handcrafted level. Precision, timing, and a little bit of cosmic courage will take you far—are you ready to make the jump?",
        keyFeatures: [
            "Space Platforming on Jupiter’s Moons — Explore icy Europa, volcanic Io, and beyond.",
            "Oxygen Management — Air depletes over time; synthetic trees refill your supply.",
            "Skill-Based Movement — Wall-cling, boost, and optimize momentum.",
            "Collect Stars & Secrets — Completionists and explorers are rewarded.",
            "Unlockable Suits — Customize your astronaut with cosmetic outfits.",
            "Built for Mobile — Quick, replayable levels designed for handheld play.",
            "Stylized Sci-Fi Atmosphere — Minimalist and cosmic with a clean mobile presentation.",
        ],
        history: "Daniel Intriligator is an independent game developer based in Cortlandt Manor, NY. Jovian Jump is the studio’s debut title — a handcrafted mobile platformer built in Godot and designed for quick, satisfying runs.",
        trailer: "https://www.youtube.com/embed/_5oSez6Cnbo?si=nLRrprv7odscOMLd",
        trailerFile: JovianJumpTrailer,
    }
]
