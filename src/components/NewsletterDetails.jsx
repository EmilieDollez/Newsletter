export default function NewsletterDetails() {

    return (
        <>
        <h1 className="form_title text-title font-bold font-roboto mt-8 mb-4 ">Stay updated!</h1>
        <ul className="text-paragraph"> Join 60,000+ product managers receiving monthly updates on:
            <li className="flex gap-x-3 pt-2 pb-2 mt-2">
                <img src="src/assets/images/icon-list.svg"></img>
                Product discovery and building what matters
            </li>
            <li className="flex gap-x-3 pb-2">
                <img src="src/assets/images/icon-list.svg"></img>
                Measuring to ensure updates are a success
            </li>
            <li className="flex gap-x-3">
                <img src="src/assets/images/icon-list.svg"></img>
                And much more!
            </li>
        </ul>
        </>
)
}