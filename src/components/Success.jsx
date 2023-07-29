import { useState } from "react";

export default function Success({inputValue, setInputValue, setIsSuccess}) {
    

    const handleClick = () => {
        setIsSuccess(false)
        setInputValue("")
    }

    return (
        <div className="
                flex flex-col 
                py-10 px-14 
                max-w-[400px]
                max-h-[400px]
                font-roboto">
                
                <img 
                    src="src/assets/images/icon-success.svg"
                    className="w-[20%]" >
                </img>

                <h1 className="
                    pt-5 mt-3
                    text-title text-dark_slate_grey font-bold font-roboto
                    leading-10">
                    Thanks for subscribing!
                </h1>
                
                <p className="
                    mt-6 pr-1
                    text-success text-dark_slate_grey
                    leading-4">
                    A confirmation email has been sent to
                        <span className="
                            font-bold text-tomato"> {inputValue}
                        </span>
                    . Please open it and click the button inside to confirm your subscription.
                </p>
                <button
                    onClick={handleClick}
                    className="
                        px-20 py-3 mt-8
                        w-full
                        text-paragraph font-bold
                        bg-dark_slate_grey text-white
                        rounded-md
                        hover:bg-gradient-to-l to-tomato from-tomato_gradient hover:duration-300 hover:shadow-shadow-tomato">
                    Dismiss message
                </button>

            </div>
    )
}