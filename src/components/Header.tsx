import Image from 'next/image';

import perfilImage from '@/assets/svgs/perfil.svg';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 text-white">
      <div className="flex justify-between items-center mt-5 mx-16">
        <div>
          X
        </div>

        <nav>
          <ul className="flex gap-20 font-semibold text-xl">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Packages</li>
          </ul>
        </nav>

        <div>
          <Image
            src={perfilImage}
            alt="Profile Image"
            priority
          />
        </div>
      </div>
    </header>
  );
}