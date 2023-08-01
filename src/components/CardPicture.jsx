export default function CardPicture() {
    
    return (

        <div className="
            w-full    
            lg:max-w-[48%] 
            lg:bg-right">
            
        {/* Image pour desktop */}
            <img 
                className=" 
                    max-w-full h-full 
                    py-5 px-5 
                    object-cover object-right 
                    rounded-5xl 
                    lg:block
                    hidden
                " 
                src="src/assets/images/illustration-sign-up-desktop.svg"
                alt="L'image d'un ordinateur" >
            </img>

            {/* Image pour mobile */}
            <img 
                className="
                    w-full
                    object-cover
                    lg:hidden
                " 
                src="src/assets/images/illustration-sign-up-mobile.svg"
                alt="L'image d'un ordinateur" >
            </img>
        </div>
    )
}