import { useAccorionContext } from "./Accordion.jsx"

export default function AccordionContent({ id, className, children }) {
    const { openItemId } = useAccorionContext();
    const isOpen = openItemId === id;

    return (
        <div className={isOpen ? `${className ?? ""} open` : `${className ?? ""} close`}>{children}</div>
    );
}