import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { FLATTEND_ROUTES } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { cache } from "react";

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export async function generateMetadata({
  params: { slug = [] },
}: {
  params: { slug: string[] };
}) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return FLATTEND_ROUTES.filter((item) => item.disabled != true).map(
    (item) => ({
      slug: item.href.split("/"),
    }),
  );
}

export default async function DocsPage({
  params: { slug = [] },
}: {
  params: { slug: string[] };
}) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
      <div className="w-full py-10 mx-auto min-w-0">
        <DocsBreadcrumb paths={slug} />
        <div className="prose prose-th:text-left dark:prose-invert prose-code:font-code  prose-pre:bg-[#1e293b] prose-headings:scroll-m-20 w-full max-w-none">
          <h1 className="break-all">{res.frontmatter.title}</h1>
          <p className="-mt-5 text-muted-foreground text-lg mb-2">
            {res.frontmatter.description}
          </p>
          {res.content}
          <Pagination pathname={pathName} />
        </div>
      </div>

      <Toc path={pathName} />
    </div>
  );
}
