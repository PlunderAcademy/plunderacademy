"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Simplified BIP-39 Wordlist (subset for demo - real BIP-39 has 2048 words)
const wordList = [
  "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse",
  "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act",
  "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit",
  "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent",
  "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert",
  "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter",
  "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger",
  "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique",
  "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic",
  "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest",
  "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset",
  "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction",
  "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake",
  "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge",
  "bag", "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain",
  "barrel", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become",
  "beef", "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit",
  "best", "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology",
  "bird", "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless",
  "blind", "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body",
  "boil", "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss",
  "bottom", "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread",
  "breeze", "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze",
  "broom", "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb",
  "bulk", "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy",
  "butter", "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call",
  "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas",
  "canyon", "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry",
  "cart", "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category",
  "cattle", "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century",
  "cereal", "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase",
  "chat", "cheap", "check", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child",
  "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle",
  "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk",
  "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close",
  "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut",
  "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort",
  "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control",
  "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "corner", "correct",
  "cost", "cottage", "cotton", "couch", "cough", "count", "counter", "country", "couple", "courage",
  "course", "court", "cousin", "cover", "cow", "crack", "cradle", "craft", "cram", "crane",
  "crash", "crater", "crawl", "crazy", "cream", "credit", "creek", "crew", "cricket", "crime",
  "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial", "cruel", "cruise", "crumble",
  "crunch", "crush", "cry", "crystal", "cube", "culture", "cup", "cupboard", "curious", "current",
  "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad", "damage", "damp", "dance",
  "danger", "daring", "dash", "daughter", "dawn", "day", "deal", "debate", "debris", "decade",
  "december", "decide", "decline", "decorate", "decrease", "deer", "defense", "define", "defy", "degree",
  "delay", "deliver", "demand", "demise", "denial", "dentist", "deny", "depart", "depend", "deposit",
  "depth", "deputy", "derive", "describe", "desert", "design", "desk", "despair", "destroy", "detail",
  "detect", "develop", "device", "devote", "diagram", "dial", "diamond", "diary", "dice", "diesel",
  "diet", "differ", "digital", "dignity", "dilemma", "dinner", "dinosaur", "direct", "dirt", "disagree",
  "discover", "disease", "dish", "dismiss", "disorder", "display", "distance", "divert", "divide", "divorce",
  "dizzy", "doctor", "document", "dog", "doll", "dolphin", "domain", "donate", "donkey", "donor",
  "door", "dose", "double", "dove", "draft", "dragon", "drama", "draw", "dream", "dress",
  "drift", "drill", "drink", "drip", "drive", "drop", "drum", "dry", "duck", "dumb",
  "dune", "during", "dust", "dutch", "duty", "dwarf", "dynamic", "eager", "eagle", "early",
  "earn", "earth", "easily", "east", "easy", "echo", "ecology", "economy", "edge", "edit",
  "educate", "effort", "egg", "eight", "either", "elbow", "elder", "electric", "elegant", "element",
  "elephant", "elevator", "elite", "else", "embark", "embody", "embrace", "emerge", "emotion", "employ",
  "empower", "empty", "enable", "enact", "end", "endless", "endorse", "enemy", "energy", "enforce",
  "engage", "engine", "enhance", "enjoy", "enlist", "enough", "enrich", "enroll", "ensure", "enter",
  "entire", "entry", "envelope", "episode", "equal", "equip", "era", "erase", "erode", "erosion",
  "error", "erupt", "escape", "essay", "essence", "estate", "eternal", "ethics", "evidence", "evil",
  "evoke", "evolve", "exact", "example", "excess", "exchange", "excite", "exclude", "excuse", "execute",
  "exercise", "exhaust", "exhibit", "exile", "exist", "exit", "exotic", "expand", "expect", "expire",
  "explain", "expose", "express", "extend", "extra", "eye", "eyebrow", "fabric", "face", "faculty",
  "fade", "faint", "faith", "fall", "false", "fame", "family", "famous", "fan", "fancy",
  "fantasy", "farm", "fashion", "fat", "fatal", "father", "fatigue", "fault", "favorite", "feature",
  "february", "federal", "fee", "feed", "feel", "female", "fence", "festival", "fetch", "fever",
  "few", "fiber", "fiction", "field", "figure", "file", "film", "filter", "final", "find",
  "fine", "finger", "finish", "fire", "firm", "first", "fiscal", "fish", "fit", "fitness",
  "fix", "flag", "flame", "flash", "flat", "flavor", "flee", "flight", "flip", "float",
  "flock", "floor", "flower", "fluid", "flush", "fly", "foam", "focus", "fog", "foil",
  "fold", "follow", "food", "foot", "force", "forest", "forget", "fork", "fortune", "forum",
  "forward", "fossil", "foster", "found", "fox", "fragile", "frame", "frequent", "fresh", "friend",
  "fringe", "frog", "front", "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny",
  "furnace", "fury", "future", "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage",
  "garbage", "garden", "garlic", "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze",
  "general", "genius", "genre", "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle",
  "ginger", "giraffe", "girl", "give", "glad", "glance", "glare", "glass", "glide", "glimpse",
  "globe", "gloom", "glory", "glove", "glow", "glue", "goat", "goddess", "gold", "good",
  "goose", "gorilla", "gospel", "gossip", "govern", "gown", "grab", "grace", "grain", "grant",
  "grape", "grass", "gravity", "great", "green", "grid", "grief", "grit", "grocery", "group",
  "grow", "grunt", "guard", "guess", "guide", "guilt", "guitar", "gun", "gym", "habit",
  "hair", "half", "hammer", "hamster", "hand", "handle", "harbor", "hard", "harsh", "harvest",
  "hat", "have", "hawk", "hazard", "head", "health", "heart", "heavy", "hedgehog", "height",
  "hello", "helmet", "help", "hen", "hero", "hidden", "high", "hill", "hint", "hip",
  "hire", "history", "hobby", "hockey", "hold", "hole", "holiday", "hollow", "home", "honey",
  "hood", "hope", "horn", "horror", "horse", "hospital", "host", "hotel", "hour", "hover",
  "hub", "huge", "human", "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry",
  "hurt", "husband", "hybrid", "ice", "icon", "idea", "identify", "idle", "ignore", "ill",
  "illegal", "illness", "image", "imitate", "immense", "immune", "impact", "impose", "improve", "impulse",
  "inch", "include", "income", "increase", "index", "indicate", "indoor", "industry", "infant", "inflict",
  "inform", "inhale", "inherit", "initial", "inject", "injury", "inmate", "inner", "innocent", "input",
  "inquiry", "insane", "insect", "inside", "inspire", "install", "intact", "interest", "into", "invest",
  "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar",
  "jar", "jazz", "jealous", "jeans", "jelly", "jewel", "job", "join", "joke", "journey",
  "joy", "judge", "juice", "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen",
  "keep", "ketchup", "key", "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit",
  "kitchen", "kite", "kitten", "kiwi", "knee", "knife", "knock", "know", "lab", "label",
  "labor", "ladder", "lady", "lake", "lamp", "language", "laptop", "large", "later", "latin",
  "laugh", "laundry", "lava", "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf",
  "learn", "leave", "lecture", "left", "leg", "legal", "legend", "leisure", "lemon", "lend",
  "length", "lens", "leopard", "lesson", "letter", "level", "liar", "liberty", "library", "license",
  "life", "lift", "light", "like", "limb", "limit", "link", "lion", "liquid", "list",
  "little", "live", "lizard", "load", "loan", "lobster", "local", "lock", "logic", "lonely",
  "long", "loop", "lottery", "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber",
  "lunar", "lunch", "luxury", "lyrics", "machine", "mad", "magic", "magnet", "maid", "mail",
  "main", "major", "make", "mammal", "man", "manage", "mandate", "mango", "mansion", "manual",
  "maple", "marble", "march", "margin", "marine", "market", "marriage", "mask", "mass", "master",
  "match", "material", "math", "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure",
  "meat", "mechanic", "medal", "media", "melody", "melt", "member", "memory", "mention", "menu",
  "mercy", "merge", "merit", "merry", "mesh", "message", "metal", "method", "middle", "midnight",
  "milk", "million", "mimic", "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery",
  "miss", "mistake", "mix", "mixed", "mixture", "mobile", "model", "modify", "mom", "moment",
  "monitor", "monkey", "monster", "month", "moon", "moral", "more", "morning", "mosquito", "mother",
  "motion", "motor", "mountain", "mouse", "move", "movie", "much", "muffin", "mule", "multiply",
  "muscle", "museum", "mushroom", "music", "must", "mutual", "myself", "mystery", "myth", "naive",
  "name", "napkin", "narrow", "nasty", "nation", "nature", "near", "neck", "need", "negative",
  "neglect", "neither", "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news",
  "next", "nice", "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose",
  "notable", "note", "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut",
  "oak", "obey", "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean",
  "october", "odor", "off", "offer", "office", "often", "oil", "okay", "old", "olive",
  "olympic", "omit", "once", "one", "onion", "online", "only", "open", "opera", "opinion",
  "oppose", "option", "orange", "orbit", "orchard", "order", "ordinary", "organ", "orient", "original",
  "orphan", "ostrich", "other", "outdoor", "outer", "output", "outside", "oval", "oven", "over",
  "own", "owner", "oxygen", "oyster", "ozone", "pact", "paddle", "page", "pair", "palace",
  "palm", "panda", "panel", "panic", "panther", "paper", "parade", "parent", "park", "parrot",
  "party", "pass", "patch", "path", "patient", "patrol", "pattern", "pause", "pave", "payment",
  "peace", "peanut", "pear", "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper",
  "perfect", "permit", "person", "pet", "phone", "photo", "phrase", "physical", "piano", "picnic",
  "picture", "piece", "pig", "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol",
  "pitch", "pizza", "place", "planet", "plastic", "plate", "play", "please", "pledge", "pluck",
  "plug", "plunge", "poem", "poet", "point", "polar", "pole", "police", "pond", "pony",
  "pool", "popular", "portion", "position", "possible", "post", "potato", "pottery", "poverty", "powder",
  "power", "practice", "praise", "predict", "prefer", "prepare", "present", "pretty", "prevent", "price",
  "pride", "primary", "print", "priority", "prison", "private", "prize", "problem", "process", "produce",
  "profit", "program", "project", "promote", "proof", "property", "prosper", "protect", "proud", "provide",
  "public", "pudding", "pull", "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase",
  "purity", "purpose", "purse", "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter",
  "question", "quick", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar",
  "radio", "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid",
  "rare", "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel",
  "rebuild", "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse",
  "region", "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember",
  "remind", "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "reply",
  "report", "represent", "reprove", "public", "rescue", "resemble", "resist", "resource", "response", "result",
  "retire", "retreat", "return", "reunion", "reveal", "review", "reward", "rhythm", "rib", "ribbon",
  "rice", "rich", "ride", "ridge", "rifle", "right", "rigid", "ring", "riot", "ripple",
  "risk", "ritual", "rival", "river", "road", "roast", "robot", "robust", "rocket", "romance",
  "roof", "rookie", "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber",
  "rude", "rug", "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe",
  "sail", "salad", "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy",
  "satoshi", "sauce", "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene",
  "scheme", "school", "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub",
  "sea", "search", "season", "seat", "second", "secret", "section", "security", "seed", "seek",
  "segment", "select", "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session",
  "settle", "setup", "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff",
  "shield", "shift", "shine", "ship", "shiver", "shock", "shoe", "shoot", "shop", "short",
  "shoulder", "shove", "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege",
  "sight", "sign", "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing",
  "siren", "sister", "sit", "situation", "six", "size", "skate", "sketch", "ski", "skill",
  "skin", "skirt", "skull", "slab", "slam", "sleep", "slender", "slice", "slide", "slight",
  "slim", "slogan", "slot", "slow", "slush", "small", "smart", "smile", "smoke", "smooth",
  "snack", "snake", "snap", "sniff", "snow", "soap", "soccer", "social", "sock", "soda",
  "soft", "solar", "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry",
  "sort", "soul", "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn",
  "speak", "special", "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin",
  "spirit", "split", "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring",
  "spy", "square", "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp",
  "stand", "start", "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick",
  "still", "sting", "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street",
  "strike", "strong", "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway",
  "success", "such", "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny",
  "sunset", "super", "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey",
  "suspect", "sustain", "swallow", "swamp", "swap", "swarm", "swear", "sweet", "swift", "swim",
  "swing", "switch", "sword", "symbol", "symptom", "syrup", "system", "table", "tackle", "tag",
  "tail", "talent", "talk", "tank", "tape", "target", "task", "taste", "tattoo", "taxi",
  "teach", "team", "tell", "ten", "tenant", "tennis", "tent", "term", "test", "text",
  "thank", "that", "theme", "then", "theory", "there", "they", "thing", "this", "thought",
  "three", "thrive", "throw", "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber",
  "time", "tiny", "tip", "tired", "tissue", "title", "toast", "tobacco", "today", "toddler",
  "toe", "together", "toilet", "token", "tomato", "tomorrow", "tone", "tongue", "night", "tool",
  "tooth", "top", "topic", "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist",
  "toward", "tower", "town", "toy", "track", "trade", "traffic", "tragic", "train", "transfer",
  "trap", "trash", "travel", "tray", "treat", "tree", "trend", "trial", "tribe", "trick",
  "trigger", "trim", "trip", "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust",
  "truth", "try", "tube", "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle",
  "twelve", "twenty", "twice", "twin", "twist", "two", "type", "typical", "ugly", "umbrella",
  "unable", "unaware", "uncle", "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform",
  "unique", "unit", "universe", "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade",
  "uphold", "upon", "upper", "upset", "urban", "urge", "usage", "use", "used", "useful",
  "useless", "usual", "utility", "vacant", "vacuum", "vague", "valid", "valley", "valve", "van",
  "vanish", "vapor", "various", "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue",
  "verb", "verify", "version", "very", "vessel", "veteran", "viable", "vibrant", "vicious", "victory",
  "video", "view", "village", "vintage", "violin", "virtual", "virus", "visa", "visit", "visual",
  "vital", "vivid", "vocal", "voice", "void", "volcano", "volume", "vote", "voyage", "wage",
  "wagon", "wait", "walk", "wall", "walnut", "want", "warfare", "warm", "warrior", "wash",
  "wasp", "waste", "water", "wave", "way", "wealth", "weapon", "wear", "weasel", "weather",
  "web", "wedding", "weekend", "weird", "welcome", "west", "wet", "whale", "what", "wheat",
  "wheel", "when", "where", "whip", "whisper", "wide", "width", "wife", "wild", "will",
  "win", "window", "wine", "wing", "wink", "winner", "winter", "wire", "wisdom", "wise",
  "wish", "witness", "wolf", "woman", "wonder", "wood", "wool", "word", "work", "world",
  "worry", "worth", "wrap", "wreck", "wrestle", "wrist", "write", "wrong", "yard", "year",
  "yellow", "you", "young", "youth", "zebra", "zero", "zone", "zoo"
];

interface WordCard {
  index: number;
  word: string;
  active: boolean;
}

export function Bip39SeedPhraseGenerator() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [statusText, setStatusText] = useState("Press Start to generate a wallet...");
  const [entropyBits, setEntropyBits] = useState<number[]>([]);
  const [chunks, setChunks] = useState<number[][]>([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(-1);
  const [binaryDisplay, setBinaryDisplay] = useState("00000000000");
  const [decimalDisplay, setDecimalDisplay] = useState(0);
  const [wordDisplay, setWordDisplay] = useState("...");
  const [showConversion, setShowConversion] = useState(false);
  const [walletWords, setWalletWords] = useState<WordCard[]>(
    Array.from({ length: 12 }, (_, i) => ({ index: i, word: "...", active: false }))
  );
  const [buttonText, setButtonText] = useState("Generate Seed Phrase");

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const startAnimation = async () => {
    setIsAnimating(true);
    setButtonText("Generating...");
    
    // Reset state
    setEntropyBits([]);
    setChunks([]);
    setCurrentChunkIndex(-1);
    setShowConversion(false);
    setWalletWords(Array.from({ length: 12 }, (_, i) => ({ index: i, word: "...", active: false })));

    // Phase 1: Entropy (128 bits)
    setStatusText("Step 1: Generating 128 bits of random Entropy (Randomness)");
    await sleep(1000);

    const newBits: number[] = [];
    for (let i = 0; i < 128; i++) {
      const bitVal = Math.random() > 0.5 ? 1 : 0;
      newBits.push(bitVal);
      
      if (i % 8 === 0) {
        setEntropyBits([...newBits]);
        await sleep(30);
      }
    }
    setEntropyBits(newBits);

    // Phase 2: Checksum (4 bits)
    await sleep(800);
    setStatusText("Step 2: Calculating Checksum (SHA-256) to validate data");
    
    const checksumBits: number[] = [];
    for (let i = 0; i < 4; i++) {
      const bitVal = Math.random() > 0.5 ? 1 : 0;
      checksumBits.push(bitVal);
      setEntropyBits([...newBits, ...checksumBits]);
      await sleep(100);
    }

    const allBits = [...newBits, ...checksumBits];
    setStatusText("Total: 132 bits (128 Entropy + 4 Checksum)");
    await sleep(1500);

    // Phase 3: Grouping into 11-bit chunks
    setStatusText("Step 3: Splitting into 11-bit segments");
    
    const newChunks: number[][] = [];
    for (let i = 0; i < allBits.length; i += 11) {
      const chunk = allBits.slice(i, i + 11);
      newChunks.push(chunk);
      setChunks([...newChunks]);
      await sleep(200);
    }

    // Phase 4: Conversion Loop
    setStatusText("Step 4: Mapping each 11-bit number to the Word List (0-2047)");
    setShowConversion(true);

    for (let i = 0; i < 12; i++) {
      const currentChunk = newChunks[i];
      const chunkStr = currentChunk.join('');
      const decimalValue = parseInt(chunkStr, 2);
      const word = wordList[decimalValue % wordList.length];

      setCurrentChunkIndex(i);
      setBinaryDisplay(chunkStr);
      setDecimalDisplay(decimalValue);
      
      setWordDisplay("Scanning...");
      await sleep(300);
      setWordDisplay(word);
      
      setWalletWords(prev => prev.map((w, idx) => 
        idx === i ? { ...w, word, active: true } : w
      ));

      await sleep(600);
    }

    // Final
    setShowConversion(false);
    setStatusText("Done! Your Seed Phrase is ready. NEVER SHARE THIS.");
    setCurrentChunkIndex(-1);
    setIsAnimating(false);
    setButtonText("Generate New Wallet");
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 md:my-8 p-4 md:p-6 bg-slate-900 rounded-lg border border-sky-400/20 shadow-lg shadow-sky-400/10">
      <h2 className="text-xl md:text-2xl font-bold text-sky-400 text-center mb-3 md:mb-4">
        BIP-39 Wallet Generator
      </h2>
      
      {/* Status Bar */}
      <div className="bg-slate-800 p-3 md:p-4 rounded-lg mb-6 md:mb-8 min-h-[60px] flex items-center justify-center border border-sky-400 shadow-md shadow-sky-400/20">
        <div className="text-sm md:text-lg font-bold text-center">{statusText}</div>
      </div>

      {/* Binary Stream */}
      <div className="flex flex-wrap justify-center gap-1 mb-8 md:mb-10 min-h-[80px] md:min-h-[100px] px-2">
        {chunks.length > 0 ? (
          chunks.map((chunk, chunkIdx) => (
            <div
              key={chunkIdx}
              className={`border rounded px-1 py-0.5 flex gap-0.5 transition-all ${
                currentChunkIndex === chunkIdx
                  ? "border-pink-400 bg-slate-700"
                  : "border-sky-400"
              }`}
            >
              {chunk.map((bit, bitIdx) => (
                <span
                  key={bitIdx}
                  className={`text-xs md:text-sm font-mono ${
                    chunkIdx === 11 && bitIdx >= 7
                      ? "text-pink-400 font-bold"
                      : bit === 1
                      ? "text-green-400"
                      : "text-slate-400"
                  }`}
                >
                  {bit}
                </span>
              ))}
            </div>
          ))
        ) : (
          entropyBits.map((bit, idx) => (
            <span
              key={idx}
              className={`text-xs md:text-sm font-mono ${
                idx >= 128
                  ? "text-pink-400 font-bold"
                  : bit === 1
                  ? "text-green-400"
                  : "text-slate-400"
              }`}
            >
              {bit}
            </span>
          ))
        )}
      </div>

      {/* Conversion Stage */}
      <div
        className={`flex flex-col items-center mb-8 md:mb-12 min-h-[180px] md:min-h-[200px] transition-opacity duration-500 px-4 ${
          showConversion ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-xs md:text-sm mb-2 md:mb-3 text-center">Converting 11-bit chunk to Decimal Index:</div>
        <div className="text-base md:text-xl font-mono mb-2 md:mb-3 break-all">{binaryDisplay}</div>
        <div className="text-lg md:text-xl mb-2 md:mb-3">⬇</div>
        <div className="text-base md:text-xl mb-2 md:mb-3">
          Index: <span className="text-pink-400">{decimalDisplay}</span>
        </div>
        <div className="text-lg md:text-xl mb-2 md:mb-3">⬇</div>
        <div className="text-xl md:text-2xl font-bold text-sky-400 uppercase mt-1 md:mt-2">{wordDisplay}</div>
      </div>

      {/* Wallet Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
        {walletWords.map((card) => (
          <div
            key={card.index}
            className={`bg-slate-800 p-2 md:p-4 rounded-lg border flex flex-col items-center transition-all duration-500 ${
              card.active
                ? "opacity-100 border-sky-400 shadow-md shadow-sky-400/30 translate-y-0"
                : "opacity-30 border-slate-600 translate-y-5"
            }`}
          >
            <div className="text-xs text-slate-500 mb-1">{card.index + 1}</div>
            <div className="text-xs md:text-base font-bold truncate max-w-full">{card.word}</div>
          </div>
        ))}
      </div>

      {/* Start Button */}
      <div className="flex justify-center">
        <Button
          onClick={startAnimation}
          disabled={isAnimating}
          className="px-5 py-2.5 md:px-6 md:py-3 text-base md:text-lg font-bold w-full sm:w-auto"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

