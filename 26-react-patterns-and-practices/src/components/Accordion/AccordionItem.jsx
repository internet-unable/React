import { useAccorionContext } from "./Accordion.jsx"

export default function AccordionItem({ id, className, title, children }) {
    const { openItemId, openItem, closeItem } = useAccorionContext();
    const isOpen = openItemId === id;

    function handleClick() {
        if (isOpen) {
            closeItem();
        } else {
            openItem(id);
        }
    }

    return (
        <li className={className}>
            <h3 onClick={handleClick}>{title}</h3>
            <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
        </li>
    );
}