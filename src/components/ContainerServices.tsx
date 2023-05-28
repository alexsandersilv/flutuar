'use client';

import Image from 'next/image';

import { Icon as IconFy } from '@iconify/react';

import ticket from '@/assets/svgs/ticket.svg';

type ContainerServicesProps = {
  title: string;
  icon:  'ticket' | 'hotel' | 'paper-plane';
  style?: string;
  children: React.ReactNode;
}

function Icon(
  { icon }: { icon: 'ticket' | 'hotel' | 'paper-plane' }
) {

  if (icon == 'ticket') {
    return <Image
      src={ticket}
      alt="Profile Image"
      priority
    />
  } else if (icon == 'hotel') {
    return <IconFy icon="carbon:hotel"  style={{ color: "#00B8E0", width: "45px", height: "45px" }} />
  } else if (icon == 'paper-plane') {
    return <IconFy icon="cil:paper-plane" style={{ color: "#E48B78", width: "45px", height: "45px" }} />
  } else {
    return <></>
  }
}

export function ContainerServices(
  { title, icon, style, children }: ContainerServicesProps
) {
  return (
    <>
      <div className={`w-[104rem] p-10 text-left rounded-2xl ${style}`}>
        <div className="mb-11">
          <Icon icon={icon} />
        </div>
        <h3 className="font-bold text-2xl mb-5">{title}</h3>
        <p>{children}</p>
      </div>

    </>
  )
}