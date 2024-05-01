import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PostCard, {PostCardProps} from "@/components/postCard/PostCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Public Space",
  description:
    "See all the ANNOUNCEMENTS in the public space",
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
    <>

      <div className="flex flex-col gap-10">
        <PostCard {...postProps} />
        <PostCard {...postProps} />
        <PostCard {...postProps} />
        <PostCard {...postProps} />
        <PostCard {...postProps} />
        <PostCard {...postProps} />
      </div>
    </>
  );
};

export default TablesPage;