import { Card } from "./components/Card";
import { Cards } from "./components/Cards";
import { Counter } from "./components/Counter";
import { Forms } from "./components/Forms";
import { List } from "./components/List";

const item = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
];

function App() {
  return (
    <div>
      <h2>React With TypeScript</h2>

      <Card name="Product 1" price={19.99} />
      <Card name="Product 2" price={29.99} isActive={true} />

      <div>
        <Counter />
        <List items={item} />

        <Forms
          onSubmit={(order) => {
            console.log(order.name, order.price);
          }}
        />

        <Cards title="My Card">
          <p>This is the card content.</p>
        </Cards>
      </div>
    </div>
  );
}

export default App;
