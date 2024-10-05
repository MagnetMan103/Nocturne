export const colors = {
    "High energy unpleasant": '#FF4500',  // Red
    "High energy pleasant": '#FFD700',    // Yellow
    "Low energy unpleasant": '#4682B4',   // Blue
    "Low energy pleasant": '#32CD32',     // Green
    "Happy": '#CCFFCC',        // Very Light Green
    "Sad": '#D1B3FF',          // Light Purple
    "Angry": '#FF9999',        // Light Red
    "Excited": '#FFF4B2',      // Light Gold
    "Calm": '#D6F5FF',         // Very Light Blue
    "Fearful": '#FFCCCB',      // Light Tomato (light reddish-pink)
    "Surprised": '#FFFFE6',    // Very Light Yellow
    "Anxious": '#FFB299',      // Light Orange Red
    "Bored": '#D9D9D9',        // Light Grey
    "Confident": '#B3D1FF',    // Light Steel Blue
    "Embarrassed": '#FFD6DC',  // Very Light Pink
    "Jealous": '#E6FFCC',      // Very Light Chartreuse (green-yellow)
    "Grateful": '#FFE5CC',     // Light Peach
    "Lonely": '#B3B3B3',       // Lighter Slate Grey
    "Motivated": '#B3FFB3',    // Light Lime Green
    "Nostalgic": '#E6B89E',    // Light Chocolate (light brown)
    "Hopeful": '#D9F2FF',      // Light Sky Blue
    "Stressed": '#F5A3A3',     // Light Crimson
    "Curious": '#FFCC99',      // Light Orange
    "Proud": '#F5DEB3',        // Lighter Goldenrod
}


export type Mood = keyof typeof colors;