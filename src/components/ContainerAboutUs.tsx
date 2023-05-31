'use client';

import { Icon as IconFy } from '@iconify/react';

type ContainerAboutUsProps = {
  title: string;
  icon: 'calendar' | 'chart' | 'map' | 'history';
  children: React.ReactNode;
}

function Icon(
  { icon } :  { icon: 'calendar' | 'chart' | 'map' | 'history'}
) {
  if (icon == 'calendar') {
    return <IconFy icon="simple-line-icons:calender" style={{ color: "#005F15", width: "42px", height: "42px" }} />
  } else if (icon == 'chart') {
    return <IconFy icon="ant-design:bar-chart-outlined" style={{ color: "#005F15", width: "42px", height: "42px" }} />
  } else if (icon == 'map') {
    return <IconFy icon="carbon:map" style={{ color: "#005F15", width: "42px", height: "42px" }} />
  } else if (icon == 'history') {
    return <IconFy icon="gridicons:history" style={{ color: "#005F15", width: "42px", height: "42px" }} />
  } else {
    return <></>
  }
}

export function ContainerAboutUs(
  { title, icon, children }: ContainerAboutUsProps
) {
  
  return (
    <div className="bg-white rounded-2xl p-10 w-60 flex flex-col items-center gap-7">
      <div>
        <Icon icon={icon} />
      </div>
      <h3 className="font-bold text-4xl">{title}</h3>
      <p className="text-xl text-center w-28">{children}</p>
    </div>
  )
}