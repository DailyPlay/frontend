export type TFont =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'buttonLarge'
  | 'buttonMedium'
  | 'buttonSmall';

export interface IFontStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  color?: string;
  margin?: string;
}

export interface IFontProps {
  fontType: TFont;
  children: string | string[] | number;
  color?: string;
  margin?: string;
}
