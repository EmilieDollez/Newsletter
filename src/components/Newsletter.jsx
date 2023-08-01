import NewsletterDetails from "./NewsletterDetails";
import NewsletterForm from "./NewsletterForm";

export default function Newsletter({inputValue, setInputValue, isValidEmail, setIsValidEmail, isSuccess, setIsSuccess}) {

    return (
        <div className="
            flex flex-col gap-y-6 
            px-10 py-10 mx-6 md:px-24 lg:my-8 lg:pl-14 lg:pr-10
            w-full lg:w-[52%] lg:max-h-2/3
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