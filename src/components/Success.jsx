import { useState } from "react";

export default function Success({inputValue, setInputValue, setIsSuccess}) {
    

    const handleClick = () => {
        setIsSuccess(false)
        setInputValue("")
    }

    return (
        <div className="
            flex flex-col items-start
            pt-[149px] pb-10 px-6 lg:py-10 lg:px-14 
            lg:max-w-[400px] lg:max-h-[400px] lg:font-roboto">
                
                <img 
                    src="src/assets/images/icon-success.svg"
                    className="w-16 lg:w-[20%]" >
                </img>

                <h1 className="
                    lg:pt-5 lg:mt-3
                    lg:text-title lg:text-dark_slate_grey lg:font-bold font-roboto
                    lg:leading-10">
                    Thanks for subscribing!
                </h1>
                
                <p className="
                    lg:mt-6 lg:pr-1
                    lg:text-success lg:text-dark_slate_grey
                    lg:leading-4">
                    A confirmation email has been sent to
                        <span className="
                            lg:font-bold lg:text-tomato"> {inputValue}
                        </span>
                    . Please open it and click the button inside to confirm your subscription.
                </p>
                <button
                    onClick={handleClick}
                    className="
                        mt-[263px] lg:px-20 lg:py-3 lg:mt-8
                        lg:w-full
                        lg:text-paragraph lg:font-bold
                        lg:bg-dark_slate_grey lg:text-white
                        lg:rounded-md
                        lg:hover:bg-gradient-to-l lg:to-tomato lg:from-tomato_gradient lg:hover:duration-300 lg:hover:shadow-shadow-tomato">
                    Dismiss message
                </button>

            </div>
    )
}