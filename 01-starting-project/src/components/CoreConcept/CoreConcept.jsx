import './CoreConcept.css';

export default function CoreConcept({title = 'Title', description, image}) {
    // default value for title
    return (
        <li>
            <img src={image} alt={`${title}. ${description}`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}