export function Footer() {
  return (
    <footer className="container mt-20 mx-auto">
      <div className="grid grid-cols-3 justify-center">
        <div>
          <strong className="font-bold text-xl">
            Company
          </strong>
          <nav className="mt-5 text-app-gray text-lg">
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <strong className="font-bold text-xl">
            Contact
          </strong>
          <nav className="mt-5 text-app-gray text-lg">
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#">Help/FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affilates</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <strong className="font-bold text-xl">
            More
          </strong>
          <nav className="mt-5 text-app-gray text-lg">
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#">Airlinefees</a>
              </li>
              <li>
                <a href="#">Airline</a>
              </li>
              <li>
                <a href="#">Low fare tips</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className="text-center mt-10 mb-28">
        All rights reserved
      </p>
    </footer>
  )
}