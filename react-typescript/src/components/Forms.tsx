import { useState } from "react";

interface FromProps {
  onSubmit(order: { name: string; price: number }): void;
}

export function Forms({ onSubmit }: FromProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ name, price });
    setName("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPrice(Number(e.target.value))
        }
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
