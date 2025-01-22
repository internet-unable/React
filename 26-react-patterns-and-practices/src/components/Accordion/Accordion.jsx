import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccorionContext = createContext();

export function useAccorionContext() {
    const ctx = useContext(AccorionContext);

    if (!ctx) {
        throw new Error("Accordion related components must be wrapped by <Accordion>");
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState();

    const contextValue = {
        openItemId,
        toggleItem,
    };

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    return (
        <AccorionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccorionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;