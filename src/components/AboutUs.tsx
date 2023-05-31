import Image from 'next/image';

import worldMap from '@/assets/images/world_map.png';
import { ContainerAboutUs } from './ContainerAboutUs';

export function AboutUs() {
  return (
    <div className="relative bg-app-green bg-opacity-5 p-20 mt-20">
      <Image
        src={worldMap}
        alt='world map'
        className="mx-auto"
      />
      <section className="container mx-auto">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center w-[518px]">
            <h2 className="font-bold text-4xl mb-5">We always try to give you the best service</h2>
            <p>
              We always try to make our customer Happy. We provide all kind of facilities.
              Your Satisfaction is our main priority.
            </p>
          </div>
          <div className="flex justify-between mt-28 gap-40">
            <ContainerAboutUs title="15+" icon='calendar'>
              Years of
              Experience
            </ContainerAboutUs>
            <ContainerAboutUs title="15k" icon='chart'>
              Happy
              Travelers
            </ContainerAboutUs>
            <ContainerAboutUs title="650+" icon='map'>
              Places Visited
            </ContainerAboutUs>
            <ContainerAboutUs title="2k+" icon='history'>
              Travel History
            </ContainerAboutUs>
          </div>
        </div>
      </section>
    </div>
  );
}