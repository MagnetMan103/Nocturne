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

export type Mood = keyof typeof colors;