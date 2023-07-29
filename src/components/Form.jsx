import { useState } from "react"

export default function Form() {

        const [inputValue, setInputValue] = useState("")
        const [isValidEmail, setIsValidEmail] = useState(true)

        console.log('email entré', inputValue)

        const handleChange = (event) => {
            setInputValue(event.target.value)
        }

        console.log('email valide ?', isValidEmail)

        const validateEmail = (email) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return emailRegex.test(email);
          };

        const handleSubmit = (event) => {
            event.preventDefault()
            setIsValidEmail(validateEmail(inputValue))
            console.log('tu as cliqué')
            // !isValidEmail ? alert('error') : alert('tout est bon!')
        }

        
    
    return (
        <div className="form_content flex flex-col w-[52%] h-2/3 my-8 pl-14 pr-10 font-roboto text-charcoal_grey">

                <h1 className="form_title text-title font-bold mt-8 mb-4 ">Stay updated!</h1>
                <ul className="text-paragraph"> Join 60,000+ product managers receiving monthly updates on:
                    <li className="flex gap-x-3 pt-2 pb-2 mt-2">
                        <img src="src/assets/images/icon-list.svg"></img>
                        Product discovery and building what matters
                    </li>
                    <li className="flex gap-x-3 pb-2">
                        <img src="src/assets/images/icon-list.svg"></img>
                        Measuring to ensure updates are a success
                    </li>
                    <li className="flex gap-x-3">
                        <img src="src/assets/images/icon-list.svg"></img>
                        And much more!
                    </li>
                </ul>
                
                <form className="flex flex-col mt-8 text-input_title font-roboto font-bold">

                    <div className={`${!isValidEmail ? "flex justify-evenly gap-32" : ""}`}>
                    { isValidEmail ? (  
                        <div> Email address </div> ) :
                        (
                        <>
                        <div> Email address </div>
                        <div className="text-tomato"> Validate email required </div>
                        </>
                        ) 
                    }
                    </div>
                    
                    <input type="text" placeholder="email@company.com" value={inputValue} onChange={handleChange} className={`mt-1 py-4 pl-6 border-solid border-2 rounded-md font-normal text-xs ${!isValidEmail ? "text-tomato placeholder-tomato border-tomato bg-tomato_light" : "text-grey placeholder-slate-300 focus:border-dark_slate_grey"} hover:cursor-pointer focus:outline-none `}>
                    </input>
                    <button type="submit" onClick={handleSubmit} className="mt-4 py-4 bg-dark_slate_grey text-white text-paragraph rounded-lg">Subscribe to monthly newsletter</button>
                </form>
        </div>
    )
}