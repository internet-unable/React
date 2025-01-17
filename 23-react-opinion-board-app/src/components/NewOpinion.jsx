import { use, useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { isNotEmpty } from "../../util/validation";

import Submit from "./Submit";

export function NewOpinion() {
    const { addOpinion } = use(OpinionsContext);
    const [formState, formAction, isPending] = useActionState(shareOpinionAction, { errors: null });

    async function shareOpinionAction(prevFormState, formData) {
        const userName = formData.get("userName");
        const title = formData.get("title");
        const body = formData.get("body");
        let errors = [];

        if (!isNotEmpty(userName)) {
            errors.push("Please provide your name");
        }

        if (!isNotEmpty(title)) {
            errors.push("Please provide a title");
        }

        if (!isNotEmpty(body)) {
            errors.push("Please provide your opinion");
        }

        if (errors.length > 0) {
            return {
                errors,
                enteredValues: {
                    userName,
                    title,
                    body
                }
            };
        }

        await addOpinion({ userName, title, body });
        return { errors: null };
    }

    return (
        <div id="new-opinion">
            <h2>Share your opinion!</h2>
            <form action={formAction}>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="userName">Your Name</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            defaultValue={formState.enteredValues?.userName}
                        />
                    </p>

                    <p className="control">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={formState.enteredValues?.title}
                        />
                    </p>
                </div>
                <p className="control">
                    <label htmlFor="body">Your Opinion</label>
                    <textarea
                        id="body"
                        name="body"
                        rows={5}
                        defaultValue={formState.enteredValues?.body}
                    ></textarea>
                </p>

                <Submit />

                {formState.errors && (
                    <ul className="errors">
                        {formState.errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                )}
            </form>
        </div>
    );
}
