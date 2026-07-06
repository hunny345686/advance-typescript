import type { Test } from "../types/types.tsx";

interface ListProps {
  items: Test[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <>
          <li key={item.id}>{item.name}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
        </>
      ))}
    </ul>
  );
};
