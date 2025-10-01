
const Alert = ({message, error})=>{
    return(
        <div className={`uppercase text-center font-semibold mt-3 ${error ? 'text-red-500' : 'text-green-500' }`}>
            {message}
        </div>
    )
}

export default Alert; 