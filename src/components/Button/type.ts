export interface IButtonProps {
  label: string | string[];
  disabled?: boolean;
  onPress: () => void;
  width?: number | string;
  type?: string;
}
