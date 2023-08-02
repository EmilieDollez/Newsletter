import { useState } from "react";

export default function Success({inputValue, setInputValue, setIsSuccess}) {
    
    
    const handleClick = () => {
        setIsSuccess(false)
        setInputValue("")
    }

    return (
        <div className="
            flex flex-col items-start gap-6 
            pt-[149px] pb-10 px-6 md:px-24 lg:pt-12 lg:px-16 lg:mx-auto
            lg:max-w-[504px] lg:max-h-[520px] 
            text-dark_slate_grey font-roboto font-normal">
                
                <img 
                    src="/images/icon-success.svg"
                    className="
                        w-16 lg:w-[64px]" >
                </img>

                <h1 className="
                    pt-4
                    text-title font-bold leading-10 lg:text-[56px] lg:leading-[56px]">
                    Thanks for subscribing! 
                </h1>
                
                <p className="
                    text-base 
                    ">
                    A confirmation email has been sent to
                        <span className="
                            font-medium text-tomato"> {inputValue}
                        </span>
                    . Please open it and click the button inside to confirm your subscription.
                </p>
                <button
                    onClick={handleClick}
                    className="
                        mt-[239px] pt-[18px] pb-[14px] lg:mt-4 lg:mb-6
                        w-full
                        text-base text-white lg:text-base lg:font-medium
                        bg-dark_slate_grey
                        rounded-lg lg:rounded-md
                        hover:border-tomato_shadow hover:bg-gradient-to-tr to-tomato_gradient_left from-tomato_gradient_right hover:duration-300 hover:shadow-shadow_tomato">
                    Dismiss message
                </button>

            </div>
    )
}