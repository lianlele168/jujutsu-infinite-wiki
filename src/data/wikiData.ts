export interface CodeItem {
  code: string;
  rewards: string;
  status: 'active' | 'expired';
  addedDate: string;
}

export interface TierItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  type: 'Innate Technique' | 'Domain Expansion' | 'Weapon';
  description: string;
  stats: string;
}

export const GAME_INFO = {
  title: "Jujutsu Infinite Wiki",
  subtitle: "The Ultimate Guide for Roblox Jujutsu Infinite (Update 1)",
  description: "Get active Jujutsu Infinite codes, Innate Technique tier lists, Domain Expansion guides, and beginner tips updated daily for .",
  url: "https://jujutsuinfinite.robloxwikihub.com"
};

export const ACTIVE_CODES: CodeItem[] = [
  {
    code: "UPDATE1_RELEASE",
    rewards: "100 Demon Fingers, 50 Clan Spins, 10,000 Yen",
    status: "active",
    addedDate: ""
  },
  {
    code: "INFINITE_SPINS_500K",
    rewards: "75 Innate Spins, 25 Stat Resets",
    status: "active",
    addedDate: ""
  },
  {
    code: "SIX_EYES_GOJO",
    rewards: "30 Clan Spins, Double EXP (2 Hours)",
    status: "active",
    addedDate: ""
  },
  {
    code: "CURSED_ENERGY_BOOST",
    rewards: "5,000 Yen, 20 Demon Fingers",
    status: "active",
    addedDate: ""
  }
];

export const EXPIRED_CODES: CodeItem[] = [
  {
    code: "BETA_TESTER_100K",
    rewards: "50 Spins",
    status: "expired",
    addedDate: ""
  },
  {
    code: "RELEASE_DAY_JJI",
    rewards: "10K Cash",
    status: "expired",
    addedDate: ""
  }
];

export const TIER_LIST: TierItem[] = [
  // S+ Tier
  {
    name: "Limitless & Six Eyes",
    tier: "S+",
    type: "Innate Technique",
    description: "Supreme control over space and infinity. Includes Unlimited Void domain, Hollow Purple, and Red/Blue orb combinations.",
    stats: "DPS: 99/100 | Range: Infinite | Mobility: S"
  },
  {
    name: "Malevolent Shrine (Shrine)",
    tier: "S+",
    type: "Innate Technique",
    description: "King of Cursed Techniques. Devastating Cleave and Dismantle slash attacks with open-barrier domain expansion.",
    stats: "DPS: 98/100 | AoE: 100/100 | Combo: S"
  },
  {
    name: "Ten Shadows Technique",
    tier: "S+",
    type: "Innate Technique",
    description: "Summon divine shikigami including Divine Dog, Nue, and Mahoraga for auto-adapting battle support.",
    stats: "DPS: 95/100 | Versatility: 99/100 | Summon: S"
  },

  // S Tier
  {
    name: "Idle Transfiguration",
    tier: "S",
    type: "Innate Technique",
    description: "Manipulate soul shapes to instantly disfigure enemies and achieve self-healing soul armor.",
    stats: "DPS: 90/100 | Defense: 95/100 | Soul: S"
  },
  {
    name: "Star Rage",
    tier: "S",
    type: "Innate Technique",
    description: "Infuse virtual mass into physical strikes to break through any barrier with black hole capability.",
    stats: "DPS: 94/100 | Burst: 96/100 | Range: B"
  },
  {
    name: "Blood Manipulation",
    tier: "S",
    type: "Innate Technique",
    description: "Piercing Blood hyper-density laser attacks, Convergence orbs, and Flowing Red Scale physical buffs.",
    stats: "DPS: 89/100 | Range: S | Snipe: S"
  },
  {
    name: "Cursed Speech",
    tier: "S",
    type: "Innate Technique",
    description: "Immobilize or crush targets with verbal commands (Stop, Blast Away, Plummet). Inflicts vocal throat damage.",
    stats: "DPS: 84/100 | CC: 99/100 | Team: S"
  },

  // A Tier
  {
    name: "Disaster Flames",
    tier: "A",
    type: "Innate Technique",
    description: "High-temperature volcanic blasts and Coffin of the Iron Mountain domain.",
    stats: "DPS: 85/100 | AoE: 90/100 | Range: A"
  },
  {
    name: "Disaster Tides",
    tier: "A",
    type: "Innate Technique",
    description: "High-pressure ocean waves, carnivorous shikigami fish swarm, and Horizon of the Captivating Skandha domain.",
    stats: "DPS: 82/100 | AoE: 92/100 | Control: A"
  },
  {
    name: "Disaster Plants",
    tier: "A",
    type: "Innate Technique",
    description: "Root manipulation, cursed bud parasitic drain, and wooden petal shield defense.",
    stats: "DPS: 80/100 | Defense: 88/100 | CC: A"
  },
  {
    name: "Boogie Woogie",
    tier: "A",
    type: "Innate Technique",
    description: "Instant position swapping upon clapping hands with any entity infused with cursed energy.",
    stats: "DPS: 78/100 | Mindgame: 99/100 | Co-op: S"
  },
  {
    name: "Ratio Technique",
    tier: "A",
    type: "Innate Technique",
    description: "Divides enemy hitboxes into a 7:3 ratio to force guaranteed critical strikes on precision hits.",
    stats: "DPS: 87/100 | Crit: 99/100 | Single-Target: S"
  },
  {
    name: "Heavenly Restriction",
    tier: "A",
    type: "Innate Technique",
    description: "Zero cursed energy in exchange for superhuman physical agility, 100% domain immunity, and weapon master buffs.",
    stats: "DPS: 86/100 | Speed: 100/100 | Armor: S"
  },

  // B Tier
  {
    name: "Straw Doll Technique",
    tier: "B",
    type: "Innate Technique",
    description: "Resonance and Hairpin curse mark triggers from a distance using nails and hammer.",
    stats: "DPS: 75/100 | Range: A | CC: B"
  },
  {
    name: "Blazing Courage",
    tier: "B",
    type: "Innate Technique",
    description: "Rapid explosive fist charges with fiery trail shockwaves.",
    stats: "DPS: 72/100 | Speed: B | Combo: B"
  },

  // Cursed Tools Tier
  {
    name: "Inverted Spear of Heaven",
    tier: "S+",
    type: "Weapon",
    description: "Special grade dagger that completely nullifies any active cursed technique or barrier upon contact.",
    stats: "Nullification: 100% | Attack: S | Piercing: S"
  },
  {
    name: "Playful Cloud",
    tier: "S",
    type: "Weapon",
    description: "Three-section staff that scales damage directly with pure physical user strength.",
    stats: "Impact: S+ | Knockback: S | Cursed Energy: None"
  },
  {
    name: "Split Soul Katana",
    tier: "S",
    type: "Weapon",
    description: "Bypasses all physical armor and directly cuts the soul of the opponent.",
    stats: "True Damage: 100% | Sharpness: S | Range: B"
  },
  {
    name: "Dragon Bone",
    tier: "A",
    type: "Weapon",
    description: "Absorbs opponent kinetic force and expels it as explosive kinetic propulsion.",
    stats: "Counter: S | Kinetic Burst: A | Guard: A"
  },
  {
    name: "Kamutoke (Vajra Dagger)",
    tier: "S",
    type: "Weapon",
    description: "Mythical lightning dagger used by Sukuna to summon lightning storm cascades.",
    stats: "AoE: S | Shock Stun: S | Range: A"
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I redeem codes in Jujutsu Infinite?",
    answer: "Launch Jujutsu Infinite on Roblox, press 'M' or tap the Profile icon on the right side of the screen, click 'Customize', then paste your active code into the 'Redeem Code Here' text field and press Enter."
  },
  {
    question: "What is the best Innate Technique in Jujutsu Infinite?",
    answer: "Limitless (Six Eyes) and Shrine (Sukuna) are tied for S+ Tier as the absolute best techniques in Update 1 due to high damage output and domain expansion range."
  },
  {
    question: "How often are new Jujutsu Infinite codes released?",
    answer: "New codes are typically released during game updates, weekend milestones, or when the game reaches major subscriber/like goals on Roblox."
  }
];

export const HOWTO_STEPS = [
  {
    step: 1,
    name: "Launch Jujutsu Infinite",
    text: "Open Roblox and join the official Jujutsu Infinite game server."
  },
  {
    step: 2,
    name: "Open Menu",
    text: "Click the Profile / Customize icon on the right side of your screen."
  },
  {
    step: 3,
    name: "Enter Code",
    text: "Paste a working code from our list into the 'Redeem Code Here' box."
  },
  {
    step: 4,
    name: "Claim Rewards",
    text: "Press Enter or click Redeem to instantly claim your Demon Fingers, Clan Spins, and Yen!"
  }
];
