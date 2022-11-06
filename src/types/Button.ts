type typeButtons = "common" | "gradient";

export interface ButtonProps {
  title?: string;
  type?: typeButtons;
  onClick?: () => void;
  style?: object;
}
