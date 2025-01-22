import { useAccorionContext } from "./Accordion.jsx"
import { useAccordionItemContext } from "./AccordionItem.jsx";

export default function AccordionTitle({ className, children }) {
    const { id } = useAccordionItemContext();
    const { toggleItem } = useAccorionContext();

    return (
        <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    );
}