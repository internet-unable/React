import reactImg from '../assets/react-core-concepts.png';

const reactDesc = ['Fundamental', 'Crucial', 'Core'];
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export default function Header() {
    const dynamicDesc = reactDesc[getRandomIndex(3)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {dynamicDesc} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}