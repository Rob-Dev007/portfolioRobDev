import Swal from "sweetalert2";

const Toast = ({icon, title, text, error = false})=>{
    return(
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#f0fdf4",
            color:  `${error ?  "#e62424ff" : "#16a34a" }`
        })
    )
}

export default Toast; 