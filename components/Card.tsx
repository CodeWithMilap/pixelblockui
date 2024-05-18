// components/Card.tsx

import Link from "next/link";

interface CardProps {
  imageUrl?: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <Link href={`/${link}`} className="block h-full">
      <div className="h-full overflow-hidden rounded-xl border bg-white shadow-Card3 backdrop-blur-lg dark:border-zinc-700 dark:bg-pxBlack dark:bg-opacity-10 dark:shadow-none">
        <div className="md:flex">
          <div className="p-8">
            <div className="mt-1 block text-lg font-medium leading-tight dark:text-zinc-50 ">
              {title}
            </div>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
