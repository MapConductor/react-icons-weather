const assert = require('node:assert/strict');
const test = require('node:test');
const { WeatherMapIcons } = require('../dist/index.js');
const { PinGlyphIcon } = require('@mapconductor/react-icons');

test('exports the initial weather collection', () => {
  assert.equal(Object.keys(WeatherMapIcons).length, 7);
  assert.ok(Object.values(WeatherMapIcons).every((icon) => icon.id.startsWith('weather.')));
});

test('renders every weather glyph in the common pin container', () => {
  for (const glyph of Object.values(WeatherMapIcons)) {
    const bitmap = new PinGlyphIcon(glyph).toBitmapIcon();
    assert.match(bitmap.url, /^data:image\/svg\+xml/);
  }
});
