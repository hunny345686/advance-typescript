import { jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ name, price, isActive = false }) {
    return (_jsxs("div", { className: `card ${isActive ? "active" : ""}`, children: [_jsxs("h2", { children: [name, " ", isActive && "(Active)"] }), _jsxs("p", { children: ["Price: $", price] })] }));
}
//# sourceMappingURL=Card.js.map