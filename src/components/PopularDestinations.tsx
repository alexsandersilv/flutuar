import Image, { StaticImageData } from 'next/image'

import worldMap2 from '@/assets/images/world_map2.jpg';

import thailand from '@/assets/images/thailand.png';
import indonesia from '@/assets/images/indonesia.png'
import newZealand from '@/assets/images/new_Zealand.png'

type ContainerProps = {
  image: StaticImageData;
  title: string;
  foo: string[];
}

function Container(
  { image, title, foo }: ContainerProps
) {

  return (
    <div className="flex items-center gap-12 bg-white rounded-2xl shadow-2xl ">
      <div>
        <Image
          src={image}
          alt='Thailand Image'
        />
      </div>

      <div className="w-[659px] flex justify-around items-center font-semibold gap-12 text-xl">
        <strong>{title}</strong>
        <div>
          {foo.map(name => {
            return (
              <span key={name} className="block">{name}</span>
            )
          })}

        </div>

        <div>
          &gt;
        </div>
      </div>
    </div>
  );
}

export function PopularDestinations() {
  return (
    <section>
      <div className="my-20 font-bold text-4xl text-center">
        <h2>Our Popular Destinations</h2>
      </div>
      <div className="flex justify-between">
        <Image
          src={worldMap2}
          alt='World Map 2'
        />
        <div className="flex flex-col gap-10 mr-40">
    
          <Container image={thailand} title="Thailand" foo={['20+ Spots', '2D & 3N+']} />
          <Container image={indonesia} title="Indonesia" foo={['25+ Spots', '3D & 3N']} />
          <Container image={newZealand} title="New Zealand" foo={['25+ Spots', '3D & 2N']} />

        </div>
      </div>
    </section>
  );
}