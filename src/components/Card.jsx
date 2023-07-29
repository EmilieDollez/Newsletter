import Form from "./Form"

export default function Card() {

    return (
        <div className="card_content flex justify-between gap-x-2 max-w-[722px] max-h-[800px] m-auto bg-white rounded-3xl">
            <Form />
            <div className="max-w-[48%] bg-right">
                <img className="block max-w-full h-full py-5 px-5 object-cover object-right rounded-5xl" src="src/assets/images/illustration-sign-up-desktop.svg"></img>
            </div>
            
        </div>
    )
}