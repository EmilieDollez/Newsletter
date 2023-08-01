import NewsletterDetails from "./NewsletterDetails";
import NewsletterForm from "./NewsletterForm";

export default function Newsletter({inputValue, setInputValue, isValidEmail, setIsValidEmail, isSuccess, setIsSuccess}) {

    return (
        <div className="
            flex flex-col gap-y-6 
            px-6 py-10 mx-6 md:px-40 lg:pl-10 lg:pr-0 lg:mx-0 lg:py-auto
            w-full
            font-roboto text-dark_slate_grey">

            <NewsletterDetails />

            <NewsletterForm 
                inputValue = {inputValue}
                setInputValue = {setInputValue} 
                isValidEmail = {isValidEmail}
                setIsValidEmail = {setIsValidEmail}
                isSuccess = {isSuccess}
                setIsSuccess = {setIsSuccess}
            />
            
        </div>
    )
}