import Image, { StaticImageData } from 'next/image';

import { Button } from './Button';

import thailand2 from '@/assets/images/thailand2.png'
import japan from '@/assets/images/japan.png';
import mountains from '@/assets/images/mountains.png';

type ContainerProps = {
  image: StaticImageData;
  period: string;
  price: string;
  locate: string;
  children: React.ReactNode;
}

function Container(
  { image, period, price, locate, children }: ContainerProps
) {

  return (
    <div className="flex flex-col rounded-2xl bg-white">
      <Image
        src={image}
        alt={`${locate} Image`}
        className="h-[338px] w-full"
      />
      <div className="flex flex-col w-[424px] p-4">
        <div className="flex justify-between text-xl">
          <span>{period}</span>
          <span>{price} / Person</span>
        </div>
        <p className="my-5  font-semibold">
          {children}
        </p>
        <div className="flex justify-between">
          <span className="font-bold text-xl">{locate}</span>
          <span className="underline">Know More</span>
        </div>
      </div>
    </div>
  );
}

export function Packages() {
  return (
    <section className="bg-app-green bg-opacity-5">
      <div className="container mx-auto p-16">
        <h3 className="font-bold text-4xl mb-16 text-center ">Best Packages For You</h3>
        <div className="flex justify-between mb-28">
          <Button variant='primary' style="w-44 border-none">
            Hot Deals
          </Button>
          <Button variant='secondary' style="w-44">
            Backpack
          </Button>
          <Button variant='secondary' style="w-44">
            South Asia
          </Button>
          <Button variant='secondary' style="w-44">
            Honeymoon
          </Button>
          <Button variant='secondary' style="w-44">
            Europe
          </Button>
          <Button variant='secondary' style="w-44">
            More
          </Button>
        </div>
        <div className="flex justify-between">
          <Container
            image={thailand2}
            period="3 Days, 2 Nights"
            price="$500"
            locate='Thailand'
          >
            Explore the Beauty of the island for 3 days
            and 2 nights with our travel agency
          </Container>

          <Container
            image={japan}
            period="3 Days, 2 Nights"
            price="$800"
            locate='Japan'
          >
            Enjoy the Shrimes and blossoms here in
            this beautiful country
          </Container>

          <Container
            image={mountains}
            period="3 Days, 2 Nights"
            price="$600"
            locate='Mountains'
          >
            Explore the majestic mountains and
            landscapes day and nights
          </Container>
        </div>
        <div className="text-center my-28">
          <Button variant="primary" style="font-semibold text-2xl border-none">
            Discover more
          </Button>
        </div>
      </div>
    </section>
  )
}