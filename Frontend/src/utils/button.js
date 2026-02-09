
const Button = ({ children, type, disabled, to })=>{

    const handleClick = () => {

    if (!to) return;

    if (to.startsWith("#")) {
      // Scroll interno en la misma página
      const elementId = to.replace("#", "");
      document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Redirección a otra página
      window.location.href = to;
    }
  };

    return(
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn btn-lg ${disabled ? 'opacity-50' : 'opacity-100'}`} disabled={disabled}>
                {children}
        </button>
    )
}

export default Button; 