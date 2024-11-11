import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center my-8 md:mb-16">
            <img
                className="object-contain mb-8 w-44 h-44"
                src={logo}
                alt="A canvas"
            />
            <h1 className="font-pacifico text-2xl md:text-3xl font-semibold uppercase text-center text-header-h1 m-0">ReactArt</h1>
            <p className="text-center text-header-p m-0">A community of artists and art-lovers.</p>
        </header>
    );
}