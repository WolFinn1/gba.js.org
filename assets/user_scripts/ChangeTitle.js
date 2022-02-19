/*

GBA ONLINE;  GBA.JS.ORG;  "Online GameBoy Advance Emulator"
Copyright (C) 2021-present AYVACS
Licensed under the MIT License (view LICENSE.md for more information) (view LICENSE.md for more information)

*/

var games = {
    "advancewars": "Advance Wars",
    "advancewars2": "Advance Wars 2",
    "aladdin": "Aladdin",
    "alienhominid": "Alien Hominid",
    "bomberman_max2blue": "Bomberman Max 2 - Blue Advance",
    "bomberman_tournament": "Bomberman Tournament",
    "bubblebobble": "Bubble Bobble",
    "croket1": "Croket! - Yume no Banker Survival!",
    "croket2": "Croket! 2 - Yami no Bank to Banqueen",
    "croket3": "Croket! 3 - Granu Oukoku no Nazo",
    "croket4": "Croket! 4 - Bank no Mori no Mamorigami",
    "digimon_racing": "Digimon Racing",
    "dbz_supersonic": "Dragon Ball Z - Supersonic Warriors",
    "drilldozer": "Drill Dozer",
    "earthwormjim": "Earthworm Jim",
    "earthwormjim2": "Earthworm Jim 2",
    "ff1and2": "Final Fantasy 1 & 2 Advance",
    "ff4S": "Final Fantasy IV Advance (Sound Restoration Mod)",
    "ff6": "Final Fantasy VI Advance",
    "final_fantasy_tactics": "Final Fantasy Tactics Advance",
    "fire_emblem": "Fire Emblem",
    "frogger1": "Frogger Advance - The Great Quest",
    "frogger2": "Frogger's Adventures - Temple of the Frog",
    "frogger3": "Frogger's Adventures 2 - The Lost Wand",
    "fzero_gp": "F-Zero - GP Legend",
    "fzero_max": "F-Zero - Maximum Velocity",
    "gamewatch4": "Game & Watch Gallery 4",
    "goldensun": "Golden Sun",
    "gunstar_super_heroes": "Gunstar Super Heroes",
    "hamtaro_heartbreak": "Hamtaro - Ham-Ham Heartbreak",
    "iridion": "Iridion 3D",
    "kirbymirror": "Kirby & The Amazing Mirror",
    "kirbynightmare": "Kirby: Nightmare in Dreamland",
    "mariokart": "Mario Kart: Super Circuit",
    "marioparty": "Mario Party Advance",
    "mariopinball": "Mario Pinball Land",
    "megamanbass": "Megaman & Bass",
    "megaman_battle1": "Megaman Battle Network 1",
    "megaman_battle2": "Megaman Battle Network 2",
    "megaman_battle3_blue": "Megaman Battle Network 3 Blue",
    "megaman_battle4_blue": "Megaman Battle Network 4 Blue Moon",
    "megaman_battle4_red": "Megaman Battle Network 4 Red Sun",
    "megaman_battle5": "Megaman Battle Network 5 Team Protoman",
    "megaman_battle6": "Megaman Battle Network 6 Cybeast Falzar",
    "megaman_zero1": "Megaman Zero",
    "megaman_zero2": "Megaman Zero 2",
    "megaman_zero3": "Megaman Zero 3",
    "megaman_zero4": "Megaman Zero 4",
    "metalslug": "Metal Slug Advance",
    "metroid_fusion": "Metroid Fusion",
    "momotarou_dentetsu": "Momotarou Dentetsu G Gold Deck wo Tsukure!",
    "monopoly": "Monopoly",
    "monster_force": "Monster Force",
    "mortal_kombat": "Mortal Kombat Advance",
    "onepiece": "One Piece",
    "pacman_world": "Pacman World",
    "pacman_world2": "Pacman World 2",
    "pokemonflorasky": "Pokemon Flora Sky Rom Hack",
    "pokemonemerald": "Pokemon Emerald",
    "pokemongreen": "Pokemon Leaf Green",
    "mysteryred": "Pokemon Mystery Dungeon Red",
    "pokemonruby": "Pokemon Ruby",
    "pokemonsapphire": "Pokemon Sapphire",
    "pokemonred": "Pokemon Fire Red",
    "gba_video_pokemon_1": "Pokemon Video Pak 1",
    "gba_video_pokemon_2": "Pokemon Video Pak 2",
    "gba_video_pokemon_3": "Pokemon Video Pak 3",
    "gba_video_pokemon_4": "Pokemon Video Pak 4",
    "puyopop": "Puyo Pop",
    "sonic_advance": "Sonic Advance",
    "sonic_advance2": "Sonic Advance 2",
    "sonic_advance3": "Sonic Advance 3",
    "sonicbattle": "Sonic Battle",
    "supermonkeyballjr": "Super Monkey Ball Jr",
    "superstar": "Mario & Luigi: Superstar Saga",
    "supermarioadvance": "Super Mario Advance",
    "supermarioadvance2": "Super Mario Advance 2",
    "supermarioadvance3": "Super Mario Advance 3",
    "supermarioadvance4": "Super Mario Advance 4",
    "simpsons": "The Simpsons: Road Rage",
    "sonicpinball": "Sonic Pinball",
    "super_street_fighter_2_turbo_revival": "Super Street Fighter II: Turbo Revival",
    "super_street_fighter_3_alpha": "Super Street Fighter III: Alpha",
    "tales_of_phantasia": "Tales of Phantasia",
    "tak2_staff_of_dreams": "Tak 2: The Staff of Dreams",
    "tetris_worlds": "Tetris Worlds",
    "tmnt": "Teenage Mutant Ninja Turtles",
    "sims_bustin_out": "The Sims: Bustin' Out",
    "sims2": "The Sims 2",
    "spyro_adventure": "Spyro Adventure",
    "spyro_ice": "Spyro: Season of Ice",
    "spyro_flame": "Spyro 2: Season of Flame",
    "turok_evolution": "Turok Evolution",
    "ty2": "Ty the Tasmanian Tiger 2 - Bush Rescue",
    "ty3": "Ty the Tasmanian Tiger 3 - Night of the Quinkan",
    "warioland4": "Wario Land 4",
    "wario_ware": "Wario Ware Inc",
    "zelda_past": "The Legend of Zelda: A Link to the Past",
    "zelda_minish": "The Legend of Zelda: The Minish Cap",
    "-DEBUG-AGB-buttontest": "AGB-buttontest",
    "-DEBUG-arm": "arm",
    "-DEBUG-bios": "bios",
    "-DEBUG-flash64": "flash64",
    "-DEBUG-flash128": "flash128",
    "-DEBUG-gbaframetest": "gbaframetest",
    "-DEBUG-hello": "hello",
    "-DEBUG-memory": "memory",
    "-DEBUG-nes": "nes",
    "-DEBUG-none": "none",
    "-DEBUG-shades": "shades",
    "-DEBUG-sram": "sram",
    "-DEBUG-stripes": "stripes",
    "-DEBUG-suite": "suite",
    "-DEBUG-thumb": "thumb"
};


var defaultTitle = document.title;
var hashTags = location.hash.substr(1); //substr removes the leading #
var gameName = games[hashTags];
var startLetter = hashTags.charAt(0);

if (hashTags.length > 0) {
    console.log("[PLAYER] Current game: " + gameName + " [" + hashTags + "]");

    // Change page title

    var title = gameName + " on GBA Online";
    if (startLetter === "-") {
        document.title = "[DEBUG] " + title;
    } else {
        document.title = title;
    };

    /*// Add notification

    var t = document.createElement("p");
    t.innerHTML = "Loaded \"" + gameName + "\"";
    t.id = "loadedGameMsg";
    document.body.appendChild(t);

    // fade out after 3secs
    setTimeout(function () {
        $("#loadedGameMsg").fadeOut();
        setTimeout(function () {
            $("#loadedGameMsg").remove();
        }, 3000);
    }, 3000);*/
} else {
    document.title = defaultTitle;
    console.log("No game is currently loaded!");
};