export interface IButtonProps {
  label: string | string[];
  disabled?: boolean;
  onPress: () => void;
}

export type TypeGlBtnProps = Omit<IButtonProps, 'disabled'>;
