import { useAccorionContext } from "./Accordion.jsx"

export default function AccordionItem({ id, className, title, children }) {
    const { openItemId, toggleItem } = useAccorionContext();
    const isOpen = openItemId === id;

    return (
        <li className={className}>
            <h3 onClick={() => toggleItem(id)}>{title}</h3>
            <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
        </li>
    );
}