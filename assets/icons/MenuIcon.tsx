const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      data-slot="icon"
      fill="none"
      strokeWidth="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      ></path>
    </svg>
  );
};

export default MenuIcon;
