import Image from 'next/image';

import banner from '@/assets/images/banner.png'
import { Button } from './Button';

export function Banner() {
  return (

    <div>
      <Image
        src={banner}
        alt="Banner Image"
        fill
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-white from-0%  to-[#00000055] to-10%">
        <h1 className="text-white text-7xl text-center font-extrabold leading-relaxed ">Your Imagination Is <span className="block">Your Only Limit</span></h1>

        <div className="text-white text-center my-10">
          <p>
            We always try to make our customer Happy. We provide all kind of facilities.
          </p>
          <p>
            Your Satisfaction is our main priority
          </p>
        </div>

        <Button variant="primary" style="font-semibold text-2xl">
          Discover more
        </Button>
      </div>
    </div>
  )
}