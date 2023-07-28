export default function Form() {
    return (
        <div className="form_content flex flex-col justify-evenly w-[50%] h-2/3 my-14 pl-12 pr-6 font-roboto text-charcoal_grey">

                <h1 className="form_title text-title font-bold mt-8 pt-10 pb-4 ">Stay updated!</h1>
                {/* <span className="text-sm">Join 60,000+ product managers receiving monthly updates on:</span> */}
                <ul className="text-sm leading-5"> Join 60,000+ product managers receiving monthly updates on:
                    <li className="flex gap-3 pt-6 pb-2">
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
                
                <form className="flex flex-col mt-12 text-sm font-roboto font-bold ">
                    Email address
                    <input type="text" value="" placeholder="email@company.com" className="mt-2 py-4 pl-6 border-solid border-2 rounded-md font-normal ">
                    </input>
                    <button type="submit" className="mt-4 py-4 bg-dark_slate_grey text-white rounded-lg">Subscribe to monthly newsletter</button>
                </form>
        </div>
    )
}