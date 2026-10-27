/** Map symbols from the weather pack. Selection is always explicit. */
declare const WeatherMapIcons: {
    /** Clear daytime weather. */
    readonly clearDay: {
        readonly id: "weather.clear_day";
        readonly pathData: "M18 12 C18 15.3137 15.3137 18 12 18 C8.6863 18 6 15.3137 6 12 C6 8.6863 8.6863 6 12 6 C15.3137 6 18 8.6863 18 12 Z M11 1 L13 1 L13 5 L11 5 Z M11 19 L13 19 L13 23 L11 23 Z M1 11 L5 11 L5 13 L1 13 Z M19 11 L23 11 L23 13 L19 13 Z";
        readonly viewBoxSize: 24;
    };
    /** Cloudy weather. */
    readonly cloud: {
        readonly id: "weather.cloud";
        readonly pathData: "M5 18 C2.8 18 1 16.2 1 14 C1 11.9 2.6 10.2 4.7 10 C5.5 6.5 8.3 5 12 5 C15.8 5 18.8 7.8 19.2 11.5 C21.4 12 23 13.8 23 16 C23 18.2 21.2 20 19 20 L5 20 Z";
        readonly viewBoxSize: 24;
    };
    /** Rain. */
    readonly rain: {
        readonly id: "weather.rain";
        readonly pathData: "M5 14 C2.8 14 1 12.2 1 10 C1 7.9 2.6 6.2 4.7 6 C5.5 2.5 8.3 1 12 1 C15.8 1 18.8 3.8 19.2 7.5 C21.4 8 23 9.8 23 12 C23 14.2 21.2 16 19 16 L5 16 Z M5 18 L8 18 L6 23 L3 23 Z M11 18 L14 18 L12 23 L9 23 Z M17 18 L20 18 L18 23 L15 23 Z";
        readonly viewBoxSize: 24;
    };
    /** Snow. */
    readonly snow: {
        readonly id: "weather.snow";
        readonly pathData: "M5 14 C2.8 14 1 12.2 1 10 C1 7.9 2.6 6.2 4.7 6 C5.5 2.5 8.3 1 12 1 C15.8 1 18.8 3.8 19.2 7.5 C21.4 8 23 9.8 23 12 C23 14.2 21.2 16 19 16 L5 16 Z M5 19 L7 17 L9 19 L7 21 Z M10 22 L12 20 L14 22 L12 24 Z M15 19 L17 17 L19 19 L17 21 Z";
        readonly viewBoxSize: 24;
    };
    /** Thunderstorm. */
    readonly thunderstorm: {
        readonly id: "weather.thunderstorm";
        readonly pathData: "M5 14 C2.8 14 1 12.2 1 10 C1 7.9 2.6 6.2 4.7 6 C5.5 2.5 8.3 1 12 1 C15.8 1 18.8 3.8 19.2 7.5 C21.4 8 23 9.8 23 12 C23 14.2 21.2 16 19 16 L5 16 Z M12 15 L18 15 L14 19 L17 19 L9 24 L11 20 L8 20 Z";
        readonly viewBoxSize: 24;
    };
    /** Wind. */
    readonly wind: {
        readonly id: "weather.wind";
        readonly pathData: "M2 6 C7 6 8 3 12 3 C15 3 17 5 17 7 C17 10 14 11 11 11 L2 11 L2 8 L11 8 C13 8 14 8 14 7 C14 6 13 6 12 6 C9 6 8 9 2 9 Z M2 14 L17 14 C20 14 22 16 22 18 C22 21 19 22 16 22 L13 22 L13 19 L16 19 C18 19 19 19 19 18 C19 17 18 17 17 17 L2 17 Z";
        readonly viewBoxSize: 24;
    };
    /** Fog. */
    readonly fog: {
        readonly id: "weather.fog";
        readonly pathData: "M4 5 L20 5 L20 8 L4 8 Z M1 10 L17 10 L17 13 L1 13 Z M7 15 L23 15 L23 18 L7 18 Z M3 20 L19 20 L19 23 L3 23 Z";
        readonly viewBoxSize: 24;
    };
};

export { WeatherMapIcons };
