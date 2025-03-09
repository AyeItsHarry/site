import type { CollectionEntry } from "astro:content";
import guideFilter from "./guideFilter";

const getSortedGuides = (posts: CollectionEntry<"guide">[]) => {
  return posts
    .filter(guideFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedGuides;
