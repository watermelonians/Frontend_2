import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import PostCard, {PostCardProps} from "@/components/postCard/PostCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const postProps: PostCardProps = {
  postTitle: "Sample Post Title",
  postDate: "April 21, 2024",
  postContent: "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elitconsectetur adipiscing elit",
  authorName: "John Doe",
  authorRole: "Software Engineer",
  authorAvatarSrc: "/avatar.jpg",
  upvoteCount: 110,
  feedbackCount: 5,
  attachmentCount: 2,
  tags: ["pre", "Tag2", "Tag3", "predifined"]
};






const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col ">
      <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-500"
      />
      <button
        className="absolute top-0 right-0 mt-2 mr-3"
      >
        {/* You can replace the 'x' with any icon for clearing the search */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
      </div>
     <div className="flex flex-col gap-4 ">
      <div className=""></div>
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
      <PostCard {...postProps} />
     </div>
        

    </DefaultLayout>
  );
};

export default TablesPage;
