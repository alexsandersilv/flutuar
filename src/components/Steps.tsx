import Image, { StaticImageData } from 'next/image';

import destinationImage from '@/assets/svgs/selection.svg'
import swim from '@/assets/svgs/water-sport.svg';
import taxiImage from '@/assets/svgs/taxii.svg';

type ComponentProps = {
  image: StaticImageData;
  title: string;
  children: React.ReactNode;
  style: React.CSSProperties
}


function Component(
  { image, title, children, style }: ComponentProps) {
  return (
    <div className="flex items-center gap-8 my-8">
      <div className="my-6 p-4 rounded-lg shadow" style={style}>
        <Image
          src={image}
          alt={`${title} Image`}
          className="w-12 h-12"
        />
      </div>

      <div className="flex flex-col gap-2 text-app-gray">
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </div>
  )
}


export function Steps() {
  return (
    <section className="container mx-auto my-16">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Book Your Next Trip in 3 Easy Steps</h2>
        <span className="text-xl">Easy and Fast</span>
      </div>
      <div>
        <ul>
          <li>
            <Component image={destinationImage} title="Choose Destination" style={{ backgroundColor: '#F0BB1F', color: '#ccc' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid impedit earum eveniet voluptate modi officia tempore porro quam, perferendis veritatis. Aspernatur enim, perferendis animi minus quasi debitis mollitia neque.
            </Component>
          </li>
          <li>
            <Component image={swim} title="Make Payment" style={{ backgroundColor: '#F15A2B' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid impedit earum eveniet voluptate modi officia tempore porro quam, perferendis veritatis. Aspernatur enim, perferendis animi minus quasi debitis mollitia neque.
            </Component>
          </li>
          <li>
            <Component image={taxiImage} title="Reach Airport on Selected Date" style={{ backgroundColor: '#006380' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione sequi nostrum excepturi libero blanditiis tempora sit laudantium, expedita placeat optio minima repellendus atque dicta. Iure esse expedita quaerat cum?
            </Component>
          </li>
        </ul>
      </div>
    </section>
  );
}