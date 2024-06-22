import { getToc, sluggify } from "@/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

export default async function Toc({ path }: { path: string }) {
  const tocs = await getToc(path);

  return (
    <div className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-10 pt-4">
        <ScrollArea>
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-black dark:text-white capitalize">On this page</h3>
              <div className="flex flex-col gap-2.5 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                {tocs.map((toc) => {
                  const slug = sluggify(toc.text);
                  return (
                    <Link
                      key={slug}
                      href={`#${slug}`}
                      className={clsx({
                        "pl-0": toc.level == 2,
                        "pl-4": toc.level == 3,
                        "pl-8": toc.level == 4,
                      })}
                    >
                      {toc.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
