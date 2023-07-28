import Form from "./Form"

export default function Card() {

    return (
        <div className="card_content flex w-[55%] h-[55%] m-auto bg-white rounded-3xl">
            <Form />
            <div className="w-[50%]">
                <img className="h-full py-5 px-5 object-cover object-left-60 rounded-5xl" src="src/assets/images/illustration-sign-up-mobile.svg"></img>
            </div>
            
        </div>
    )
}