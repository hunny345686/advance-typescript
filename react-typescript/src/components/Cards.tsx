import type { PropsWithChildren, ReactNode } from "react";

interface CardsProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export function Cards({ title, footer, children }: CardsProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
