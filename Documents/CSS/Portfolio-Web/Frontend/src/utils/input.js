import { Controller } from "react-hook-form";

const Input = ({name, type, placeholder, error, control, as="input" })=>{

    return(
        <div>
            <Controller 
            name={name} 
            control={control} 
            render={({field })=>{const Component = as; 
                return (
                    <Component
                    {...field}
                    id={name}
                    type={as === "input" ? type : undefined} 
                    placeholder={placeholder}
                    className={`bg-transparent border-b py-3 outline-none w-full focus:border-accent placeholder:text-gradient transition-all ${
                        error ? "border-red-500" : ""
                    } ${as === "textarea" ? "resize-none h-32" : ""}`}
                    />)
            }}/>
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}

export default Input;