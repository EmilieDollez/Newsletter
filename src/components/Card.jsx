import { useState } from "react"

import CardPicture from "./CardPicture"
import Newsletter from "./Newsletter"
import Success from "./Success"

export default function Card() {

    const [inputValue, setInputValue] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isSuccess, setIsSuccess] = useState()

    return (
        <div className="card_content flex justify-between gap-x-2 max-w-[722px] max-h-[800px] m-auto bg-white rounded-3xl">
            
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