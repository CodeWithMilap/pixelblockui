import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({ blok , toggleMobileMenu}) => (
  <Link
    href={`/${blok.link.cached_url}`}
    {...storyblokEditable(blok)}
    className="relative block px-3 transition hover:text-blue-600 dark:hover:text-blue-700"
  >
    <span onClick={toggleMobileMenu}>{blok.name}</span>
  </Link>
);
export default MenuLink;
