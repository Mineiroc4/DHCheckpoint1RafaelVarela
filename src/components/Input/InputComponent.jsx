import style from "./InputComponent.module.css";

function InputComponent({ title, type, value, fnOnChange, fnOnKeyUp }) {
    return (
        <>
            <label>{title ?? "Indefinido"}</label>
            <br />

            <input
                type={type ?? "text"}
                value={value}
                onChange={fnOnChange}
                onKeyUp={fnOnKeyUp}
            />
            <br />
        </>
    );
}

export default InputComponent;