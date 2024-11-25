export default function Answer({ text, ...prop }) {
    return (
        <li className="answer" {...prop}>
            <button>{text}</button>
        </li>
    );
}