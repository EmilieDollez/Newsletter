import NewsletterDetails from "./NewsletterDetails";
import NewsletterForm from "./NewsletterForm";

export default function Newsletter({inputValue, setInputValue, isValidEmail, setIsValidEmail, isSuccess, setIsSuccess}) {

    return (
        <div className="form_content flex flex-col w-[52%] h-2/3 my-8 pl-14 pr-10 font-roboto text-charcoal_grey">

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