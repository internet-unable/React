export default function Input({label, id, type = 'text'}) {
    return(
        <>
            <div className="flex flex-col">
                {label && <label className="uppercase mb-1.5" for={id}>{label}</label>}
                {type === 'textarea' ? (
                    <textarea id={id} className=""></textarea>
                ) : (
                    <input type={type} id={id} className="" />
                )}
            </div>
        </>
    );
}