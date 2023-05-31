type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  style?: string;
}

export function Button(
  { variant, style = '', children }: ButtonProps
) {

  let buttonStyle = `${style} py-3 px-5 rounded-lg border border-black text-white`;
  if (variant === 'primary') {
    buttonStyle += ' bg-app-lightGreen hover:bg-app-green transition duration-300';
  } else if (variant === 'secondary') {
    buttonStyle += ' bg-app-gray';
  }

  return <button className={buttonStyle}>{children}</button>
  
}