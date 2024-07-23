const BurguerBtn = (props)=>{
    return(
        <div
        className={`menu-mobile ${props.clicked ? 'clickMenuMobile' : ''}` }
        onClick={ props.handleClick }
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

    )

};

export default BurguerBtn;