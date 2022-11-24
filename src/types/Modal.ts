import { ChildrenProps } from "./common";

export interface ModalProps extends ChildrenProps {
  onClose: () => void;
  clickRef: React.RefObject<HTMLDivElement>;
}
