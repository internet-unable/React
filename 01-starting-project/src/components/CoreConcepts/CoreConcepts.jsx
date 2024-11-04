import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConcepts() {
    return(
        <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
            </ul>
        </section>
    );
}