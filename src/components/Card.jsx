import { useState } from "react"

import CardPicture from "./CardPicture"
import Newsletter from "./Newsletter"
import Success from "./Success"

export default function Card() {

    const [inputValue, setInputValue] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isSuccess, setIsSuccess] = useState()

    return (
        <div className="card_content
            flex flex-col-reverse items-center lg:flex-row lg:gap-x-16
            bg-white 
            lg:rounded-5xl
            w-full lg:max-w-[928px] lg:max-h-[641px]
            m-auto pb-10 lg:p-6 lg:mx-auto lg:mt-[219px] lg:mb-[220px] 
            ">
            
        {/* {isSuccess ? ( */}
 
             <Success 
                inputValue = {inputValue}
                setIsSuccess = {setIsSuccess}
                setInputValue = {setInputValue} 
            />

         {/* ):(
            <>
            <Newsletter 
               inputValue = {inputValue}
               setInputValue = {setInputValue} 
               isValidEmail = {isValidEmail}
               setIsValidEmail = {setIsValidEmail}
               isSuccess = {isSuccess}
               setIsSuccess = {setIsSuccess}
            />

            <CardPicture />  
            </>

        )} */}
        </div>
    )
}