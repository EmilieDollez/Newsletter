export default function CardPicture() {
    
    return (

        <div className="
            w-full">
            
        {/* Image pour desktop */}
            <img 
                className="
                    w-[400px]
                    lg:block
                    hidden
                "
                src="/images/illustration-sign-up-desktop.svg"
                alt="Un ordinateur et une tablette" >
            </img>

            {/* Image pour mobile et tablette */}
            <img 
                className="
                    w-full
                    md:max-h-[400px]
                    md:object-cover md:object-top
                    md:rounded-b-3xl
                    block lg:hidden
                " 
                src="/images/illustration-sign-up-mobile.svg"
                alt="Un ordinateur et une tablette" >
            </img>
        </div>
    )
}