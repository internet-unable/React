import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionContent from "./components/Accordion/AccordionContent.jsx";

export default function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">
                    <Accordion.Item id="experience" className="accordion-item">
                        <Accordion.Title className="accordion-item-title">
                            We got 20 years of experiece
                        </Accordion.Title>
                        <AccordionContent className="accordion-item-content">
                            <article>
                                <p>You can&apos;t go wrong with us</p>
                                <p>We are in the business of planning trips for more then 20 years</p>
                            </article>
                        </AccordionContent>
                    </Accordion.Item>

                    <Accordion.Item id="local-guides" className="accordion-item">
                        <Accordion.Title className="accordion-item-title">
                            We&apos;re working with local guides
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>We are not doing it along from out office</p>
                                <p>Instead we are working with local guides to ensure a safe and pleasent vacation</p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>
        </main>
    );
}
