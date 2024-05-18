import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({ blok }) => (
  <Link
    href={blok.link.cached_url}
    {...storyblokEditable(blok)}
    className="relative block px-3 py-2 transition hover:text-blue-600 dark:hover:text-blue-700"
  >
    {blok.name}
  </Link>
);
export default MenuLink;
