import { ButtonHTMLAttributes, ReactNode, SVGProps } from "react";

export interface SvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export interface LayoutComponentProps {
  children?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}
