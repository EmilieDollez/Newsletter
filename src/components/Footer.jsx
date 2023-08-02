export default function Footer() {
  return (
    <div
      className="
            flex flex-col items-center
            pb-2
            text-dark_slate_grey text-xs lg:text-grey lg:text-sm"
    >
      <p>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="
                    pl-1 
                    font-bold lg:text-white
                    hover:text-tomato"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by
        <a
          href="https://www.frontendmentor.io/profile/EmilieDollez"
          target="_blank"
          className="
                    px-1 
                    font-bold lg:text-white 
                    hover:text-tomato"
        >
          Emilie DOLLEZ
          <em
            className="
                        pl-1
                        font-normal text-dark_slate_grey text-xs lg:text-grey"
          >
            (EmyZeBee).
          </em>
        </a>
      </p>
    </div>
  );
}
