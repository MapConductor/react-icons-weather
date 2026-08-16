# MapConductor Weather Icons — React

Weather glyphs for MapConductor React markers. The pack is region-neutral and selected explicitly by the application.

## Installation

The first npm release is in preparation. Its install command will be:

```sh
npm install @mapconductor/react-icons @mapconductor/react-icons-weather
```

To try the source now, clone `react-icons` at branch `0.2.0-2` and this repository beside it, then run `npm install && npm run build` in both directories. Install the built directories into your app with `npm install /path/to/react-icons /path/to/react-icons-weather`.

## Quick start

```ts
import { PinGlyphIcon } from '@mapconductor/react-icons';
import { WeatherMapIcons } from '@mapconductor/react-icons-weather';

const rainMarker = new PinGlyphIcon(WeatherMapIcons.rain, {
  fillColor: '#1565c0',
  glyphColor: '#ffffff',
});

const bitmapIcon = rainMarker.toBitmapIcon();
```

All seven weather glyphs can be used with `PinGlyphIcon`. Glyph IDs and shapes match the Android and iOS packages.

<!-- BEGIN GENERATED ICON CATALOG -->
## Included glyphs

Glyph IDs are stable across Android, iOS, and React.

| Preview | API | Stable ID | Description |
|---|---|---|---|
| <img src="docs/icons/clear_day.svg" width="40" height="40" alt="Clear daytime weather"> | `WeatherMapIcons.clearDay` | `weather.clear_day` | Clear daytime weather |
| <img src="docs/icons/cloud.svg" width="40" height="40" alt="Cloudy weather"> | `WeatherMapIcons.cloud` | `weather.cloud` | Cloudy weather |
| <img src="docs/icons/rain.svg" width="40" height="40" alt="Rain"> | `WeatherMapIcons.rain` | `weather.rain` | Rain |
| <img src="docs/icons/snow.svg" width="40" height="40" alt="Snow"> | `WeatherMapIcons.snow` | `weather.snow` | Snow |
| <img src="docs/icons/thunderstorm.svg" width="40" height="40" alt="Thunderstorm"> | `WeatherMapIcons.thunderstorm` | `weather.thunderstorm` | Thunderstorm |
| <img src="docs/icons/wind.svg" width="40" height="40" alt="Wind"> | `WeatherMapIcons.wind` | `weather.wind` | Wind |
| <img src="docs/icons/fog.svg" width="40" height="40" alt="Fog"> | `WeatherMapIcons.fog` | `weather.fog` | Fog |
<!-- END GENERATED ICON CATALOG -->
