import { NotionAPI } from "notion-client";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";
import { getAllPagesInSpace, uuidToId, getPageProperty } from "notion-utils";
import { fetchAllData } from "@/lib/notion";
import BlogWidget from "@/app/blogs/blogWidget";
import { notion } from "@/lib/notion";

export default async function Home() {
  const getPage = async (pageId: string) => {
    return notion.getPage(pageId);
  };

  const projectRootPageId = process.env.BLOG_ROOT_PAGE_ID || "undefined";
  const projectRootSpaceId = process.env.BLOG_ROOT_SPACE_ID;

  const pageMap = await getAllPagesInSpace(
    projectRootPageId,
    projectRootSpaceId,
    getPage,
    {
      traverseCollections: false,
    }
  );

  const paths = Object.keys(pageMap)
    .map((pageId) => pageId.replace(/-/g, ""))
    .filter((path) => path && path !== "/");

  const recordMaps = await fetchAllData(paths);
  console.log(recordMaps);

  return (
    <main>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {recordMaps.map((recordMap, index) => (
          <BlogWidget recordMap={recordMap} key={index} />
        ))}
      </div>
    </main>
  );
}
