export default function NewsletterDetails() {

    return (
        <>
        <h1 className="
            text-dark_slate_grey text-title font-bold leading-10 md:text-title_desktop lg:text-title_desktop lg:font-bold lg:leading-[56px]">
            Stay updated!
        </h1>
        <p className="
            text-base font-normal">
            Join 60,000+ product managers receiving monthly updates on: 
        </p>
        <ul className="
            text-base font-normal"> 
            <li className="
                flex items-start gap-x-4 
                pb-3
                leading-6">
                <img 
                    src="/images/icon-list.svg"
                    className="w-[21px]"></img>
                    Product discovery and building what matters
            </li>
            <li className="
                flex items-start gap-x-4
                leading-6
                pb-3">
                <img 
                    src="/images/icon-list.svg"
                    className="w-[21px]"></img>
                    Measuring to ensure updates are a success
            </li>
            <li className="
                flex items-start gap-x-4 
                mb-4 
                leading-6"> 
                <img 
                    src="/images/icon-list.svg"
                    className="w-[21px]"></img>
                    And much more!
            </li>
        </ul>
        </>
)
}