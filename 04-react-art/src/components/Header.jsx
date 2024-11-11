import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="A canvas" />
            <h1 className="text-3xl font-bold underline">ReactArt</h1>
            <p>A community of artists and art-lovers.</p>
        </header>
    );
}