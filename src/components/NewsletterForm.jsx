import { useState } from "react";

export default function NewsletterForm({inputValue, setInputValue, isValidEmail, setIsValidEmail, IsSuccess, setIsSuccess}) {
    
        console.log('email entré', inputValue)

        const handleChange = (event) => {
            setIsValidEmail(true)
            setInputValue(event.target.value)
        }

        console.log('email valide ?', isValidEmail)

        const validateEmail = (email) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return emailRegex.test(email);
          };
        // renvoie 'true' si le format d'email est valide (un @ et un . après)

        const isEmptyInput = (inputValue) => {
            const emptyRegex = /^\s*$/;
            return emptyRegex.test(inputValue);
        };
        // renvoie 'true' si la chaine de caractère est vide

        const handleSubmit = (event) => {
            
            event.preventDefault()
            
            // isValid renverra 'true" si validateEmail est 'true' et 'isEmptyInput' est 'false'
            // Cela revient à faire ces deux lignes de code successivement : 
                    // setIsValidEmail(isEmptyInput(inputValue))
                    // setIsValidEmail(validateEmail(inputValue))
            const isValid = validateEmail(inputValue) && !isEmptyInput(inputValue)
            
            // isValid étant true, on le passe aux deux useState qui deviennent à leur tour 'true'
            setIsValidEmail(isValid)
            setIsSuccess(isValid)

        }

    return (

        <form className="
            lg:flex lg:flex-col
            lg:mt-8 
            text-base font-bold lg:font-roboto lg:text-paragraph lg:font-bold">

            <div className=
                {`${!isValidEmail ? "flex justify-between" : ""}`}>
                
                { isValidEmail ? (  
                        <div className="
                            pb-2
                            text-xs"> 
                                Email address 
                        </div> 
                    ) : (
                        <>
                        <div className="
                            pb-2
                            text-xs"> 
                                Email address 
                        </div>
                    
                        <div className="
                            pb-2
                            text-xs text-tomato"> 
                            Valid email required 
                        </div>
                        </>
                    ) 
                }
            </div>
                
            <input 
                type="text" 
                placeholder="email@company.com" 
                value={inputValue} 
                onChange={handleChange} 
                className=
                    {`px-[46px] pl-4 lg:mt-1 lg:py-4 lg:pl-6 
                    w-full min-h-[56px]
                    rounded-lg border-[1px] border-solid border-opacity-30 border-grey_25% lg:border-2 lg:rounded-md 
                    font-normal lg:text-xs lg:text-input_title
                    ${!isValidEmail ? 
                        "text-tomato placeholder-tomato border-tomato bg-tomato_light font-light" 
                        : "placeholder:font-light placeholder:text-grey_25% placeholder:text-opacity-60 focus:border-dark_slate_grey"
                    } 
                    hover:cursor-pointer 
                    focus:outline-none `}>
            </input>
            
            <button 
                type="submit" 
                onClick={handleSubmit} 
                className="
                    px-[46px] mt-6 lg:mt-4 lg:py-4 
                    w-full min-h-[56px]
                    bg-dark_slate_grey 
                    text-white lg:text-paragraph
                    rounded-lg border-[0.5px] border-solid
                    hover:border-tomato_shadow hover:bg-gradient-to-tr to-tomato_gradient_left from-tomato_gradient_right hover:duration-300 hover:shadow-shadow-tomato">
                    Subscribe to monthly newsletter
            </button>

        </form>
    )

}