import { useState } from "react";

export default function Success({inputValue, setInputValue, setIsSuccess}) {
    
    
    const handleClick = () => {
        setIsSuccess(false)
        setInputValue("")
    }

    return (
        <div className="
            flex flex-col items-start gap-6 lg:justify-center
            pt-[149px] pb-10 px-6 lg:py-10 lg:px-14 lg:mx-auto
            lg:max-w-[504px] lg:max-h-[520px] 
            text-dark_slate_grey font-roboto font-normal">
                
                <img 
                    src="src/assets/images/icon-success.svg"
                    className="w-16 lg:w-[20%]" >
                </img>

                <h1 className="
                    pt-4 lg:pt-5 lg:mt-3
                    text-title font-bold leading-10">
                    Thanks for subscribing! 
                </h1>
                
                <p className="
                    lg:mt-6 lg:pr-1
                    text-base lg:text-sm
                    lg:leading-4">
                    A confirmation email has been sent to
                        <span className="
                            font-bold text-tomato"> ash@loremcompany.com{inputValue}
                        </span>
                    . Please open it and click the button inside to confirm your subscription.
                </p>
                <button
                    onClick={handleClick}
                    className="
                        mt-[239px] pt-[18px] pb-[14px] lg:px-20 lg:py-3 lg:mt-8
                        w-full
                        text-base text-white lg:text-paragraph lg:font-bold
                        bg-dark_slate_grey
                        rounded-lg lg:rounded-md
                        lg:hover:bg-gradient-to-l lg:to-tomato lg:from-tomato_gradient lg:hover:duration-300 lg:hover:shadow-shadow-tomato">
                    Dismiss message
                </button>

            </div>
    )
}