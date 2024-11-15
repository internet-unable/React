export default function Input({label, id, type = 'text'}) {
    const labelStyles = 'text-neutral-500 font-semibold uppercase mb-1';
    const inputStyles = 'bg-stone-300 px-2 py-2 rounded border-b-2 border-stone-400 focus:border-black';

    return(
        <>
            <div className="flex flex-col mb-4">
                {label && <label className={labelStyles} for={id}>{label}</label>}
                {type === 'textarea' ? (
                    <textarea className={inputStyles} id={id}></textarea>
                ) : (
                    <input className={inputStyles} type={type} id={id} />
                )}
            </div>
        </>
    );
}