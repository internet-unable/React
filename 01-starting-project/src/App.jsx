import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDesc = ['Fundamental', 'Crucial', 'Core'];
function getRandomInd(max) {
    return Match.floor(Math.random() * max);
}

function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDesc.getRandomInd(3)} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

function CoreConcept({title = 'Title', desc, image}) {
    // default value for title
    return (
        <li>
            <img src={image} alt={`${title}. ${desc}`} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            desc={CORE_CONCEPTS[0].desc}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            desc={CORE_CONCEPTS[1].desc}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
