interface NavLinkProps {
  href: string;
  children: string;
  current?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  current = false,
  onClick,
}) => {
  const baseStyle = 'block py-2 pl-3 pr-4 lg:p-0';
  const defaultStyle =
    'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700';
  const currentStyle =
    'text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700';

  return (
    <a
      href={href}
      className={`${baseStyle} ${current ? currentStyle : defaultStyle}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
