export default function Form() {
    return (
        <div className="form_content flex flex-col justify-evenly w-[50%] h-2/3 my-5 pl-12 pr-6 font-roboto">

                <h1 className="form_title text-title font-bold pt-10">Stay updated!</h1>
                {/* <span className="text-sm">Join 60,000+ product managers receiving monthly updates on:</span> */}
                <ul className="text-sm leading-5"> Join 60,000+ product managers receiving monthly updates on:
                    <li className="flex gap-3 py-2">
                        <img src="src/assets/images/icon-list.svg"></img>
                        Product discovery and building what matters
                    </li>
                    <li className="flex gap-3 pb-2">
                        <img src="src/assets/images/icon-list.svg"></img>
                        Measuring to ensure updates are a success
                    </li>
                    <li className="flex gap-3">
                        <img src="src/assets/images/icon-list.svg"></img>
                        And much more!
                    </li>
                </ul>
                
                <form className="text-sm">Email address
                email@company.com
                Subscribe to monthly newsletter
                </form>
        </div>
    )
}