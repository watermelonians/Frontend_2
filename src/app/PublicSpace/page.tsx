"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PostCard, {PostCardProps} from "@/components/postCard/PostCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import PostDetails from "@/components/PostDetails/PostDetails";
import FeedbackCard from "@/components/Feedback_/Feedback_";
import getTagColor from "@/components/CategoryCard/Card";
// export const metadata: Metadata = {
//   title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };
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
  const [activePostId, setActivePostId] = useState(null);
  const handlePostCardClick = (postId) => {
    // Toggle the active post id between null and the clicked post id
    setActivePostId(activePostId === postId ? null : postId);
  };

  // Generate a list of postcards with a modified onClick handler
  const postCards = [1, 2, 3, 4, 5, 6].map((id) => (
    <PostCard
      key={id}
      {...postProps}
      onClick={() => handlePostCardClick(id)}
    />
  ));

  return (

      <div className="flex">
        {/* PostCards Container */}
        <div className={`transform transition-all ${activePostId ? 'w-1/2' : 'w-full'}`}>
          {postCards}
        </div>

        {/* Details Pane */}
        <div className={`transform transition-all ${activePostId ? 'w-1/2' : 'w-0'}`}>
          {/* Render the details of the active post here */}
          {activePostId && 
          <div className="mb-2">
            <PostDetails postTitle={"Key establishment problem"} postDate={"2012 april "} postContent={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des"} authorName={"Ahemd Guessoum "} authorRole={"Full Professor, AI Reasercher"} authorAvatarSrc={""} upvoteCount={0} feedbackCount={0} attachmentCount={0} tags={['predifined', 'Tag1']} problemId={""} image={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} comments={[]}/>
          </div>}
          <div className="flex flex-col gap-2">
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
            <FeedbackCard avatarSrc={"https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/06/hockerty_pinstripe_suit_for_a_short_guy_58b20450_8200_45a6_8722_60bb6db1a270.jpg"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"}/>
          </div>
        </div>
      </div>



  );
};

export default TablesPage;