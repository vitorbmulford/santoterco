export type SacredTheme = typeof lightTheme;

const palette = {
  parchment: '#F1E7D3',
  parchmentDeep: '#E8DBBF',
  ink: '#312619',
  wine: '#5E1D2E',
  marianBlue: '#22406E',
  agedGold: '#A6853B',
  muted: '#7E6E54',
  rule: '#D8C7A0',
  hint: '#9A8A6E',
  cream: '#F4E9D0',
  phone: '#17140F',
};

const darkPalette = {
  parchment: '#0F1B33',
  parchmentDeep: '#182740',
  ink: '#ECE2CB',
  wine: '#b11f45',
  marianBlue: '#93ABDD',
  agedGold: '#CBA85E',
  muted: '#A6B4D0',
  rule: '#2A3C5E',
  hint: '#8391AE',
  cream: '#101827',
  phone: '#080E1A',
};

export const lightTheme = {
  colors: {
    background: palette.parchment,
    surface: palette.parchmentDeep,
    ink: palette.ink,
    wine: palette.wine,
    blue: palette.marianBlue,
    gold: palette.agedGold,
    muted: palette.muted,
    rule: palette.rule,
    hint: palette.hint,
    buttonText: palette.cream,
    chrome: palette.phone,
    shadow: 'rgba(50, 30, 10, 0.28)',
    veil: 'rgba(166, 133, 59, 0.14)',
  },
  fonts: {
    display: 'Georgia',
    body: 'Georgia',
  },
  radius: {
    small: 3,
    medium: 8,
    archTop: 116,
  },
  spacing: {
    screen: 26,
  },
};

export const darkTheme: SacredTheme = {
  ...lightTheme,
  colors: {
    background: darkPalette.parchment,
    surface: darkPalette.parchmentDeep,
    ink: darkPalette.ink,
    wine: darkPalette.wine,
    blue: darkPalette.marianBlue,
    gold: darkPalette.agedGold,
    muted: darkPalette.muted,
    rule: darkPalette.rule,
    hint: darkPalette.hint,
    buttonText: darkPalette.cream,
    chrome: darkPalette.phone,
    shadow: 'rgba(0, 0, 0, 0.34)',
    veil: 'rgba(203, 168, 94, 0.14)',
  },
};
