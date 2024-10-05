export const colors = {
    "Happy": '#FFD700',        // Golden yellow for happiness
    "Sad": '#9370DB',          // Purple for sadness
    "Angry": '#FF4500',        // Fiery red for anger
    "Excited": '#FF8C00',      // Orange for excitement
    "Calm": '#4682B4',         // Calm blue for peacefulness
    "Fearful": '#FF6347',      // Tomato red for fear
    "Surprised": '#FFB6C1',    // Light pink for surprise
    "Anxious": '#FF1493',      // Deep pink for anxiety
    "Bored": '#808080',        // Gray for boredom
    "Confident": '#32CD32',    // Lime green for confidence
    "Embarrassed": '#FF69B4',  // Hot pink for embarrassment
    "Jealous": '#9ACD32',      // Yellow-green for jealousy
    "Grateful": '#FFDAB9',     // Peach for gratefulness
    "Lonely": '#A9A9A9',       // Dark gray for loneliness
    "Motivated": '#00FA9A',    // Medium spring green for motivation
    "Nostalgic": '#D2691E',    // Chocolate brown for nostalgia
    "Hopeful": '#87CEEB',      // Sky blue for hope
    "Stressed": '#B22222',     // Firebrick red for stress
    "Curious": '#FF4500',      // Fiery orange-red for curiosity
    "Proud": '#DAA520',        // Goldenrod for pride
};

export const emotions = {
    red: [
        { emotion: "enraged", hex: "#FF0000" },  // Bright Red
        { emotion: "terrified", hex: "#C8102E" }, // Dark Red
        { emotion: "panicked", hex: "#B22222" },  // Firebrick Red
        { emotion: "shocked", hex: "#FF4500" },   // Orange Red
        { emotion: "impassioned", hex: "#DC143C" }, // Crimson
        { emotion: "hyper", hex: "#FF6347" },     // Tomato
        { emotion: "livid", hex: "#8B0000" },     // Dark Red
        { emotion: "irate", hex: "#B22222" },     // Firebrick
        { emotion: "overwhelmed", hex: "#FF7F50" }, // Coral
        { emotion: "stressed", hex: "#CD5C5C" },  // Indian Red
        { emotion: "annoyed", hex: "#FF8C00" },   // Dark Orange
        { emotion: "pressured", hex: "#FF1493" }, // Deep Pink
        { emotion: "furious", hex: "#FF4500" },   // Orange Red
        { emotion: "frightened", hex: "#FF6347" }, // Tomato
        { emotion: "anxious", hex: "#FFB6C1" },   // Light Pink
        { emotion: "apprehensive", hex: "#FF69B4" }, // Hot Pink
        { emotion: "irritated", hex: "#FF7F50" },  // Coral
        { emotion: "restless", hex: "#FF6347" },   // Tomato
        { emotion: "jealous", hex: "#FF1493" },    // Deep Pink
        { emotion: "scared", hex: "#FF4500" },     // Orange Red
        { emotion: "angry", hex: "#C72C41" },       // Strong Red
        { emotion: "jittery", hex: "#D50032" },     // Red-Orange
        { emotion: "fomo", hex: "#FF4500" },       // Orange Red
        { emotion: "confused", hex: "#FF8C00" },   // Dark Orange
        { emotion: "envious", hex: "#FF6347" },    // Tomato
        { emotion: "repulsed", hex: "#8B0000" },   // Dark Red
        { emotion: "frustrated", hex: "#C8102E" }, // Dark Red
        { emotion: "embarrassed", hex: "#FF69B4" }, // Hot Pink
        { emotion: "concerned", hex: "#DC143C" },  // Crimson
        { emotion: "tense", hex: "#FF4500" },      // Orange Red
        { emotion: "contempt", hex: "#B22222" },   // Firebrick
        { emotion: "troubled", hex: "#FF6347" },   // Tomato
        { emotion: "worried", hex: "#CD5C5C" },    // Indian Red
        { emotion: "nervous", hex: "#FF1493" },    // Deep Pink
        { emotion: "peeved", hex: "#FF7F50" },     // Coral
        { emotion: "uneasy", hex: "#C72C41" },      // Strong Red
    ],
    blue: [
        { emotion: "disgusted", hex: "#0000FF" },  // Blue
        { emotion: "trapped", hex: "#1E90FF" },    // Dodger Blue
        { emotion: "insecure", hex: "#4682B4" },   // Steel Blue
        { emotion: "disheartened", hex: "#4169E1" }, // Royal Blue
        { emotion: "down", hex: "#5F9EA0" },        // Cadet Blue
        { emotion: "bored", hex: "#00BFFF" },      // Deep Sky Blue
        { emotion: "humiliated", hex: "#6495ED" }, // Cornflower Blue
        { emotion: "ashamed", hex: "#00CED1" },    // Dark Turquoise
        { emotion: "lost", hex: "#00BFFF" },        // Deep Sky Blue
        { emotion: "disappointed", hex: "#ADD8E6" }, // Light Blue
        { emotion: "meh", hex: "#B0E0E6" },         // Powder Blue
        { emotion: "tired", hex: "#87CEEB" },       // Sky Blue
        { emotion: "pessimistic", hex: "#4682B4" }, // Steel Blue
        { emotion: "vulnerable", hex: "#B0E0E6" },  // Powder Blue
        { emotion: "disconnected", hex: "#A9A9A9" }, // Dark Gray
        { emotion: "forlorn", hex: "#778899" },    // Light Slate Gray
        { emotion: "sad", hex: "#6A5ACD" },         // Slate Blue
        { emotion: "fatigued", hex: "#708090" },    // Slate Gray
        { emotion: "guilty", hex: "#4682B4" },      // Steel Blue
        { emotion: "numb", hex: "#B0C4DE" },        // Light Steel Blue
        { emotion: "excluded", hex: "#00CED1" },    // Dark Turquoise
        { emotion: "spent", hex: "#7B68EE" },       // Medium Slate Blue
        { emotion: "discouraged", hex: "#8A2BE2" }, // Blue Violet
        { emotion: "disengaged", hex: "#00BFFF" },  // Deep Sky Blue
        { emotion: "depressed", hex: "#4682B4" },   // Steel Blue
        { emotion: "hopeless", hex: "#6495ED" },    // Cornflower Blue
        { emotion: "alienated", hex: "#5F9EA0" },    // Cadet Blue
        { emotion: "nostalgic", hex: "#1E90FF" },   // Dodger Blue
        { emotion: "lonely", hex: "#00CED1" },      // Dark Turquoise
        { emotion: "apathetic", hex: "#87CEEB" },   // Sky Blue
        { emotion: "miserable", hex: "#B0E0E6" },    // Powder Blue
        { emotion: "despair", hex: "#B0C4DE" },     // Light Steel Blue
        { emotion: "glum", hex: "#4682B4" },        // Steel Blue
        { emotion: "burned out", hex: "#6A5ACD" },  // Slate Blue
        { emotion: "exhausted", hex: "#708090" },   // Slate Gray
        { emotion: "helpless", hex: "#778899" },    // Light Slate Gray
    ],
    yellow: [
        { emotion: "surprised", hex: "#FFFF00" },   // Yellow
        { emotion: "awe", hex: "#FFD700" },         // Gold
        { emotion: "exhilarated", hex: "#FFFACD" }, // Lemon Chiffon
        { emotion: "thrilled", hex: "#FFFFE0" },    // Light Yellow
        { emotion: "elated", hex: "#FFEFD5" },      // Papaya Whip
        { emotion: "ecstatic", hex: "#F0E68C" },    // Khaki
        { emotion: "excited", hex: "#FFF8DC" },     // Cornsilk
        { emotion: "determined", hex: "#FFEA00" },  // Bright Yellow
        { emotion: "successful", hex: "#FFE135" },  // Banana Yellow
        { emotion: "amazed", hex: "#F4D03F" },      // Sunflower Yellow
        { emotion: "inspired", hex: "#F9E79F" },     // Light Sunflower
        { emotion: "empowered", hex: "#F5E05B" },   // Daffodil Yellow
        { emotion: "energized", hex: "#FFD700" },   // Gold
        { emotion: "eager", hex: "#FFF8DC" },       // Cornsilk
        { emotion: "enthusiastic", hex: "#F0E68C" }, // Khaki
        { emotion: "joyful", hex: "#FFEFD5" },      // Papaya Whip
        { emotion: "productive", hex: "#FFFFE0" },  // Light Yellow
        { emotion: "proud", hex: "#F4D03F" },       // Sunflower Yellow
        { emotion: "cheerful", hex: "#FFEA00" },    // Bright Yellow
        { emotion: "curious", hex: "#FFFACD" },     // Lemon Chiffon
        { emotion: "upbeat", hex: "#FFE135" },      // Banana Yellow
        { emotion: "happy", hex: "#F9E79F" },       // Light Sunflower
        { emotion: "motivated", hex: "#F5E05B" },   // Daffodil Yellow
        { emotion: "optimistic", hex: "#FFD700" },  // Gold
        { emotion: "pleasant", hex: "#FFFF00" },    // Yellow
        { emotion: "focused", hex: "#FFEFD5" },     // Papaya Whip
        { emotion: "alive", hex: "#FFEA00" },       // Bright Yellow
        { emotion: "confident", hex: "#FFFACD" },   // Lemon Chiffon
        { emotion: "engaged", hex: "#F4D03F" },      // Sunflower Yellow
        { emotion: "challenged", hex: "#F5E05B" },   // Daffodil Yellow
        { emotion: "pleased", hex: "#FFE135" },     // Banana Yellow
        { emotion: "playful", hex: "#FFD700" },     // Gold
        { emotion: "delighted", hex: "#FFFFE0" },   // Light Yellow
        { emotion: "wishful", hex: "#FFFACD" },     // Lemon Chiffon
        { emotion: "hopeful", hex: "#F9E79F" },      // Light Sunflower
        { emotion: "accomplished", hex: "#F4D03F" }, // Sunflower Yellow
    ],
    green: [
        { emotion: "calm", hex: "#008000" },        // Green
        { emotion: "at ease", hex: "#3CB371" },     // Medium Sea Green
        { emotion: "understood", hex: "#4CAF50" },  // Green
        { emotion: "respected", hex: "#66CDAA" },   // Medium Aquamarine
        { emotion: "fulfilled", hex: "#2E8B57" },    // Sea Green
        { emotion: "blissful", hex: "#32CD32" },    // Lime Green
        { emotion: "good", hex: "#9ACD32" },        // Yellow Green
        { emotion: "thoughtful", hex: "#7FFF00" },  // Chartreuse
        { emotion: "appreciated", hex: "#98FB98" }, // Pale Green
        { emotion: "supported", hex: "#3CB371" },    // Medium Sea Green
        { emotion: "loved", hex: "#00FF7F" },       // Spring Green
        { emotion: "connected", hex: "#20B2AA" },   // Light Sea Green
        { emotion: "relaxed", hex: "#90EE90" },     // Light Green
        { emotion: "chill", hex: "#00FA9A" },       // Medium Spring Green
        { emotion: "compassionate", hex: "#2E8B57" }, // Sea Green
        { emotion: "included", hex: "#66CDAA" },     // Medium Aquamarine
        { emotion: "valued", hex: "#98FB98" },      // Pale Green
        { emotion: "grateful", hex: "#8FBC8F" },    // Dark Sea Green
        { emotion: "sympathetic", hex: "#3CB371" }, // Medium Sea Green
        { emotion: "comfortable", hex: "#7CFC00" },  // Lawn Green
        { emotion: "empathetic", hex: "#98FB98" },  // Pale Green
        { emotion: "content", hex: "#00FF7F" },     // Spring Green
        { emotion: "accepted", hex: "#2E8B57" },    // Sea Green
        { emotion: "moved", hex: "#66CDAA" },       // Medium Aquamarine
        { emotion: "mellow", hex: "#9ACD32" },      // Yellow Green
        { emotion: "peaceful", hex: "#8FBC8F" },    // Dark Sea Green
        { emotion: "balanced", hex: "#90EE90" },    // Light Green
        { emotion: "safe", hex: "#3CB371" },        // Medium Sea Green
        { emotion: "secure", hex: "#2E8B57" },      // Sea Green
        { emotion: "blessed", hex: "#00FF7F" },     // Spring Green
        { emotion: "carefree", hex: "#66CDAA" },    // Medium Aquamarine
        { emotion: "tranquil", hex: "#90EE90" },    // Light Green
        { emotion: "thankful", hex: "#3CB371" },    // Medium Sea Green
        { emotion: "relieved", hex: "#2E8B57" },    // Sea Green
        { emotion: "satisfied", hex: "#00FF7F" },    // Spring Green
        { emotion: "serene", hex: "#8FBC8F" },      // Dark Sea Green
    ],
};


export type Mood = keyof typeof colors;