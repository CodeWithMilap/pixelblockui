import {
  ISbStoriesParams,
  getStoryblokApi,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const isDev = process.env.NEXT_PUBLIC_STORYBLOK_VERSION === "draft";
export const revalidate = isDev ? 0 : 3600;

async function fetchData(slug: string) {

  const { isEnabled: isDraft } = draftMode();
  const sbParams: ISbStoriesParams = {
    resolve_links: "url",
    version: isDev || isDraft ? "draft" : "published",
    cv: isDev || isDraft ? Date.now() : undefined,
  };

  const storyblokApi = getStoryblokApi();

  // Fetch data from the Storyblok API and return the promise
  return storyblokApi
    .get(`cdn/stories/${slug}`, sbParams)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return { data: JSON.parse(e) };
    });
}

type Props = {
  params: { slug: string[] };
};

export default async function Home({ params }: Props) {
  const slug = params?.slug ? params.slug.join("/") : "home";
  const { data } = await fetchData(slug);
  return (
    <>
      {data.story &&
        <StoryblokStory story={data?.story} />
      }
    </>
  );
}
