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

        <form className="flex flex-col mt-8 font-roboto text-paragraph font-bold">

            <div className={`${!isValidEmail ? "flex justify-between" : ""}`}>
                { isValidEmail ? (  
                        <div> 
                            Email address 
                        </div> 
                    ) : (
                        <>
                        <div> 
                            Email address 
                        </div>
                    
                        <div className="text-tomato"> 
                            Validate email required 
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
                className={`mt-1 py-4 pl-6 border-solid border-2 rounded-md font-normal text-xs text-input_title
                ${!isValidEmail ? "text-tomato placeholder-tomato border-tomato bg-tomato_light" : "text-grey placeholder-slate-300 focus:border-dark_slate_grey"} 
                hover:cursor-pointer 
                focus:outline-none `}>
            </input>
            
            <button 
                type="submit" 
                onClick={handleSubmit} 
                className="
                    mt-4 py-4 
                    bg-dark_slate_grey 
                    text-white text-paragraph 
                    rounded-lg
                    hover:bg-gradient-to-l to-tomato from-tomato_gradient hover:duration-300 hover:shadow-shadow-tomato">
                    Subscribe to monthly newsletter
            </button>

        </form>
    )

}