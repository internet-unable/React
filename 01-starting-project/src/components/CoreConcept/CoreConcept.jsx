import './CoreConcept.css';

export default function CoreConcept({title = 'Title', description, image}) {
    return (
        <li>
            <img src={image} alt={`${title}. ${description}`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}