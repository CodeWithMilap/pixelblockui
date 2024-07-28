import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ blok, toggleMobileMenu }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${blok.link.cached_url}`);

  return (
    <Link
      href={`/${blok.link.cached_url}`}
      {...storyblokEditable(blok)}
      className={`relative block px-3 transition hover:text-blue-600 dark:hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}
    >
      <span onClick={toggleMobileMenu}>{blok.name}</span>
    </Link>
  );
};

export default MenuLink;
