import { useState } from "react"

import CardPicture from "./CardPicture"
import Newsletter from "./Newsletter"
import Success from "./Success"

export default function Card() {

    const [inputValue, setInputValue] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isSuccess, setIsSuccess] = useState()

    return (
        <div className=
        {`flex flex-col-reverse items-center lg:flex-row lg:gap-x-16 bg-white lg:rounded-4xl w-full m-auto pb-10 lg:mx-auto "
            ${isSuccess ? "lg:max-w-[504px] lg:max-h-[520px] lg:p-0" : "lg:max-w-[928px] lg:max-h-[641px] lg:p-6"}`}>
            
            
        {isSuccess ? (
 
             <Success 
                inputValue = {inputValue}
                setIsSuccess = {setIsSuccess}
                setInputValue = {setInputValue} 
            />

         ):(
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

        )}
        </div>
    )
}