// src/styles/theme.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#1877F2',        // Facebook blue
  secondary: '#42B72A',      // Facebook green
  background: '#FFFFFF',     // White background
  card: '#FFFFFF',           // Card background
  text: '#050505',           // Primary text
  secondaryText: '#65676B',  // Secondary text
  border: '#E4E6EB',         // Light border
  notification: '#E41E3F',   // Notification red
  lightGray: '#F0F2F5',      // Light gray for backgrounds
  divider: '#CCD0D5',        // Divider color
  placeholder: '#8A8D91',    // Placeholder text
  highlight: '#E7F3FF',      // Light blue highlight
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 8,
  padding: 12,

  // Font sizes
  largeTitle: 24,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  body1: 16,
  body2: 14,
  body3: 12,
  small: 10,

  // App dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, fontWeight: '700' },
  h1: { fontSize: SIZES.h1, fontWeight: '600' },
  h2: { fontSize: SIZES.h2, fontWeight: '600' },
  h3: { fontSize: SIZES.h3, fontWeight: '600' },
  h4: { fontSize: SIZES.h4, fontWeight: '600' },
  body1: { fontSize: SIZES.body1, fontWeight: '400' },
  body2: { fontSize: SIZES.body2, fontWeight: '400' },
  body3: { fontSize: SIZES.body3, fontWeight: '400' },
  small: { fontSize: SIZES.small, fontWeight: '400' },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;