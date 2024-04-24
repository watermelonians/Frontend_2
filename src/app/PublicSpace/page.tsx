import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PostCard, {PostCardProps} from "@/components/postCard/PostCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const postProps: PostCardProps = {
  isUpvoted: false,
  postTitle: "Sample Post Title",
  postDate: "April 21, 2024",
  postContent: "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  authorName: "John Doe",
  authorRole: "Software Engineer",
  authorAvatarSrc: "",
  upvoteCount: 110,
  feedbackCount: 5,
  attachmentCount: 2,
  tags: ["Tag1", "Tag2", "Tag3", "predifined"]
}; 

const TablesPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
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