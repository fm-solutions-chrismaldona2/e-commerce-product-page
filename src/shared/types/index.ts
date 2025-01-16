import { ReactNode, SVGProps } from "react";

export interface SvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export interface LayoutComponent {
  children?: ReactNode;
}
