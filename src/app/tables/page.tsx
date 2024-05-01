import { Metadata } from "next";
import PostCard, { PostCardProps } from "@/components/postCard/PostCard";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const postProps: PostCardProps = {
  postTitle: "Sample Post Title",
  postDate: "April 21, 2024",
  postContent: "This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  authorName: "John Doe",
  authorRole: "Software Engineer",
  authorAvatarSrc: "/avatar.jpg",
  upvoteCount: 110,
  feedbackCount: 5,
  attachmentCount: 2,
  tags: ["Tag1", "Tag2", "Tag3", "dnsio"]
};






const TablesPage = () => {
  return (
    <>
     
          <PostCard {...postProps} />

    </>
  );
};

export default TablesPage;