import { useAccorionContext } from "./Accordion.jsx"

export default function AccordionTitle({ id, className, children }) {
    const { toggleItem } = useAccorionContext();

    return (
        <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    );
}