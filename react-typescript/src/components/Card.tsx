interface CardProps {
  name: string;
  price: number;
  isActive?: boolean;
}

export function Card({ name, price, isActive = false }: CardProps) {
  return (
    <div className={`card ${isActive ? "active" : ""}`}>
      <h2>
        {name} {isActive && "(Active)"}
      </h2>
      <p>Price: ${price}</p>
    </div>
  );
}
