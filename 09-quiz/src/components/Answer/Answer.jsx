import { useContext } from 'react';
import { AppContext } from '../../store/app-context.jsx';

export default function Answer({ id, text }) {
    const { answerSelect } = useContext(AppContext);
    // let styles = '';

    return (
        <li className="answer">
            <button
                type="button"
                // className=""
                onClick={() => answerSelect(id)}
            >
                {text}
            </button>
        </li>
    );
}