import { useAccorionContext } from "./Accordion.jsx"
import { useAccordionItemContext } from "./AccordionItem.jsx";

export default function AccordionContent({ className, children }) {
    const { id } = useAccordionItemContext();
    const { openItemId } = useAccorionContext();
    const isOpen = openItemId === id;

    return (
        <div className={isOpen ? `${className ?? ""} open` : `${className ?? ""} close`}>{children}</div>
    );
}