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
            flex flex-col-reverse items-center lg:justify-between lg:flex-row lg:gap-x-2
            bg-white 
            lg:rounded-3xl
            w-full lg:max-w-[722px] lg:max-h-[800px]
            m-auto pb-10
            ">
            
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