import { ROUTES } from "@/lib/routes-config";
import Anchor from "./anchor";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";

export function Leftbar() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="py-4">
        {ROUTES.map(({ href, items, title }) => {
          return (
            <div className="flex flex-col gap-3 mt-5" key={href}>
              <h4 className="font-semibold text-lg text-black dark:text-white">{title}</h4>
              <div className="flex flex-col gap-3 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                {items.map((subItem) => {
                  const key = `/docs/${href}${subItem.href}`;
                  return (
                    <Anchor
                      activeClassName="font-medium dark:text-white text-black"
                      href={key}
                      key={key}
                      disabled={subItem.disabled}
                    >
                      {subItem.title}
                    </Anchor>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </aside>
  );
}

// export function SheetLeftbar() {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="ghost" size="icon" className="md:hidden flex">
//           <AlignLeftIcon />
//         </Button>
//       </SheetTrigger>

//       <SheetContent className="flex flex-col gap-4 px-0" side="left">
//         <SheetHeader>
//           <SheetClose className="px-5" asChild>
//             sdas
//           </SheetClose>
//         </SheetHeader>
//         <ScrollArea className="flex flex-col gap-4">
//           <div className="flex flex-col gap-2 mt-3 mx-2 px-8">
//             {NAVLINKS.map((item) => {
//               return (
//                 <SheetClose asChild key={item.title + item.href}>
//                   <Anchor
//                     activeClassName="text-black dark:text-white font-medium"
//                     absolute
//                     href={item.href}
//                   >
//                     {item.title}
//                   </Anchor>
//                 </SheetClose>
//               );
//             })}
//           </div>
//           <div className="mx-2 px-8">
//             {ROUTES.map(({ href, items, title }) => {
//               return (
//                 <div className="flex flex-col gap-3 mt-5" key={href}>
//                   <h4 className="font-medium">{title}</h4>
//                   <div className="flex flex-col gap-3 dark:text-neutral-300/85 text-neutral-800 ml-0.5">
//                     {items.map((subItem) => {
//                       const key = `/docs/${href}${subItem.href}`;
//                       return (
//                         <SheetClose asChild key={key}>
//                           <Anchor
//                             activeClassName="font-medium dark:text-white text-black"
//                             href={key}
//                             disabled={subItem.disabled}
//                           >
//                             {subItem.title}
//                           </Anchor>
//                         </SheetClose>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </ScrollArea>
//       </SheetContent>
//     </Sheet>
//   );
// }
