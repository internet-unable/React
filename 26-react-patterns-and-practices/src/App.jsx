import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionItem from "./components/Accordion/AccordionItem.jsx";

export default function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">
                    <AccordionItem className="accordion-item" title="We got 20 years of experiece">
                        <article>
                            <p>You can&apos;t go wrong with us</p>
                            <p>We are in the business of planning trips for more then 20 years</p>
                        </article>
                    </AccordionItem>

                    <AccordionItem className="accordion-item" title="We're working with local guides">
                        <article>
                            <p>We are not doing it along from out office</p>
                            <p>Instead we are working with local guides to ensure a safe and pleasent vacation</p>
                        </article>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
