const events = [
  {
    name: "Valorant 5v5 Community Swiftplay Showdown",
    location: "Tactical FPS Stage - Station A",
    location_id: 2,
    time: "2026-10-20T18:00:00",
    image: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
    description: "Bring your 5-stack or join solo to get drafted into our fast-paced Swiftplay bracket. Open to all ranks!"
  },
  {
    name: "VGC Competitive Pokémon Battle Tower",
    location: "Handheld & Nintendo Lounge",
    location_id: 3,
    time: "2026-10-25T14:00:00",
    image: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png",
    description: "Bring your best Double Battle team for a Swiss-format tournament following the latest VGC Regulation rules. Rental codes allowed!"
  },
  {
    name: "Street Fighter 6 Friday Night Bracket",
    location: "FGC Fighting Pit - Cabinet 04",
    location_id: 4,
    time: "2026-10-16T19:30:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1364780/capsule_616x353.jpg",
    description: "Double-elimination bracket played head-to-head on station setups with low-latency monitors. Bring your own arcade stick or controller."
  },
  {
    name: "League of Legends ARAM Clash & Watch Party",
    location: "Main Stage Arena",
    location_id: 1,
    time: "2026-11-02T17:00:00",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    description: "Custom 5v5 ARAM tournament paired with a live broadcast stream on the main projector screen. Snacks and drinks provided."
  },
  {
    name: "Yu-Gi-Oh! TCG Local Tournament & Trade Night",
    location: "Tabletop & Card Zone",
    location_id: 3,
    time: "2026-09-28T18:30:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1449850/capsule_616x353.jpg",
    description: "Advanced format local tournament featuring 4 Swiss rounds. Trade binders welcome before and after matches."
  },
  {
    name: "Mario Kart 8 Deluxe Grand Prix Night",
    location: "Couch Co-op Lounge",
    location_id: 1,
    time: "2026-10-23T19:00:00",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg",
    description: "Four-player Grand Prix heats on 150cc with items on. Top racers from each heat advance to a Rainbow Road final. Drinks specials all night."
  },
  {
    name: "Super Smash Bros. Ultimate Weekly",
    location: "Big Screen Booths",
    location_id: 1,
    time: "2026-11-12T19:30:00",
    image: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg",
    description: "Weekly 1v1 double-elimination bracket, 3 stocks, 7 minutes, competitive stage list. GameCube controller adapters provided."
  },
  {
    name: "Rocket League 3v3 Open Qualifier",
    location: "Main Arena Floor",
    location_id: 2,
    time: "2026-11-07T12:00:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/capsule_616x353.jpg",
    description: "Open qualifier for teams of three, played on LAN stations on the arena floor. Top 4 teams play the finals on the main stage under the lights."
  },
  {
    name: "Magic: The Gathering Commander Night",
    location: "Tournament Room",
    location_id: 3,
    time: "2026-10-30T18:00:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2141910/capsule_616x353.jpg",
    description: "Casual four-player Commander pods with rotating tables. Bring your favorite deck; loaner decks available at the front desk."
  },
  {
    name: "Tekken 8 Ranbat Series",
    location: "FGC Fighting Pit - Cabinet 02",
    location_id: 4,
    time: "2026-11-20T19:00:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_616x353.jpg",
    description: "Monthly ranking battle with points carried across the season. Double elimination, first to 3 wins. Bring your own fight stick or pad."
  },
  {
    name: "Retro Arcade High Score Challenge",
    location: "Classic Cabinet Row",
    location_id: 5,
    time: "2026-10-17T13:00:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665130/capsule_616x353.jpg",
    description: "Chase the top score on Pac-Man, Galaga, and Donkey Kong. Highest combined score across all three cabinets takes home the trophy."
  },
  {
    name: "Killer Instinct Classic Cabinet Tournament",
    location: "Fighting Game Wall",
    location_id: 5,
    time: "2026-12-05T15:00:00",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/577940/capsule_616x353.jpg",
    description: "Old-school bracket on original 1994 Killer Instinct cabinets. Single elimination, best of three. Combo breakers encouraged."
  },
  {
    name: "Super Smash Bros. Melee Bracket",
    location: "Main Bar Stage",
    location_id: 6,
    time: "2026-10-28T20:00:00",
    image: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png",
    description: "Melee singles on CRT setups next to the bar. Standard ruleset, 4 stocks, 8 minutes. 21+ venue, so bring your ID."
  },
  {
    name: "Indie Game Showcase & Playtest Night",
    location: "Indie Cabinet Corner",
    location_id: 6,
    time: "2026-11-14T18:00:00",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=800&q=80",
    description: "Local developers bring unreleased games for you to play and give feedback on. Vote for your favorite to win a spot in the arcade lineup."
  }
];

export default events