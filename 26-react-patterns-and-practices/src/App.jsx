import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionContent from "./components/Accordion/AccordionContent.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
    {
        id: 'african-savanna',
        image: savannaImg,
        title: 'African Savanna',
        description: 'Experience the beauty of nature.',
    },
    {
        id: 'amazon-river',
        image: amazonImg,
        title: 'Amazon River',
        description: 'Get to know the largest river in the world.',
    },
    {
        id: 'caribbean-beach',
        image: caribbeanImg,
        title: 'Caribbean Beach',
        description: 'Enjoy the sun and the beach.',
    },
    {
        id: 'desert-dunes',
        image: desertImg,
        title: 'Desert Dunes',
        description: 'Discover the desert life.',
    },
    {
        id: 'forest-waterfall',
        image: forestImg,
        title: 'Forest Waterfall',
        description: 'Listen to the sound of the water.',
    },
];

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

            <section>
                <SearchableList items={PLACES} />
                <SearchableList items={["item 1", "item 2"]} />
            </section>
        </main>
    );
}
