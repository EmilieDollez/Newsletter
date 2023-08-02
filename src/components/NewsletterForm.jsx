export default function NewsletterForm({inputValue, setInputValue, isValidEmail, setIsValidEmail, IsSuccess, setIsSuccess}) {

        const handleChange = (event) => {
            setIsValidEmail(true)
            setInputValue(event.target.value)
        }

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
            text-xs font-medium">

            <div className=
                {`${!isValidEmail ? "flex justify-between" : ""}`}>
                
                { isValidEmail ? (  
                        <div className="
                            pb-2
                            md:text-sm"> 
                                Email address 
                        </div> 
                    ) : (
                        <>
                        <div className="
                            pb-2
                            md:text-sm"> 
                                Email address 
                        </div>
                    
                        <div className="
                            pb-2
                            text-tomato md:text-sm"> 
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
                    {`px-[46px] pl-4 min-h-[56px] lg:mt-1 lg:pl-6 
                    w-full 
                    rounded-lg border-[1px] border-solid border-opacity-30 border-grey-25% lg:border-2 lg:rounded-md 
                    font-normal text-base 
                    ${!isValidEmail ? 
                        "text-tomato placeholder-tomato border-tomato bg-tomato_light font-light focus:border-tomato" 
                        : "placeholder:font-light placeholder:text-grey-25% placeholder:text-opacity-60 focus:border-dark_slate_grey"
                    } 
                    hover:cursor-pointer 
                    focus:outline-none `}>
            </input>
            
            <button 
                type="submit" 
                onClick={handleSubmit} 
                className="
                    px-auto mt-6 min-h-[56px]
                    w-full 
                    bg-dark_slate_grey 
                    text-white text-base font-normal md:text-base lg:text-base 
                    rounded-lg border-[0.5px] border-solid
                    hover:border-tomato_shadow hover:bg-gradient-to-tr to-tomato_gradient_left from-tomato_gradient_right hover:duration-300 hover:shadow-shadow_tomato">
                    Subscribe to monthly newsletter
            </button>

        </form>
    )

}