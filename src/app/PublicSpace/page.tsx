"use client"
import PostCard, {PostCardProps} from "@/components/postCard/PostCard";
import { useState } from "react";
import PostDetails from "@/components/PostDetails/PostDetails";
import FeedbackCard from "@/components/Feedback_/Feedback_";
import AddCardModal from "@/components/CategoryCard/modal";
import AddPost from "@/components/postCard/addPost";
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
  authorAvatarSrc: "https://i.pravatar.cc/100",
  upvoteCount: 110,
  feedbackCount: 5,
  attachmentCount: 2,
  tags: ["Tag1", "Tag2", "Tag3", "predifined"]
}; 
const TablesPage = () => {
  const [activePostId, setActivePostId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handlePostCardClick = (postId) => {
    // Toggle the active post id between null and the clicked post id
    setActivePostId(activePostId === postId ? null : postId);
  };
  const addCard = (newCard) => {
    
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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

    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        {/* Top Search Bar */}
        <div className="flex-grow flex-col">
          <div className="flex flex-row items-center bg-[#C7DFF7] px-2 py-1 rounded-lg mr-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Here"
              className="flex-grow bg-[#C7DFF7] border-none border-transparent placeholder:text-[#636B74] placeholder:font-semibold placeholder:text-sm"
            />
            <svg className="mr-2" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1296 9.87956H10.4712L10.2379 9.65456C11.0546 8.70456 11.5462 7.47122 11.5462 6.12956C11.5462 3.13789 9.12122 0.712891 6.12956 0.712891C3.13789 0.712891 0.712891 3.13789 0.712891 6.12956C0.712891 9.12122 3.13789 11.5462 6.12956 11.5462C7.47122 11.5462 8.70456 11.0546 9.65456 10.2379L9.87956 10.4712V11.1296L14.0462 15.2879L15.2879 14.0462L11.1296 9.87956ZM6.12956 9.87956C4.05456 9.87956 2.37956 8.20456 2.37956 6.12956C2.37956 4.05456 4.05456 2.37956 6.12956 2.37956C8.20456 2.37956 9.87956 4.05456 9.87956 6.12956C9.87956 8.20456 8.20456 9.87956 6.12956 9.87956Z" fill="#9FA6AD"/>
            </svg>
          </div>
        </div>
        
        
        {/* Buttons Container */}
        <div className="flex gap-2">
          {/* Filter Button */}
          <button className="bg-[#E3EFFB] text-[#12467B] text-xs font-semibold px-4 py-4 rounded-lg">Sort & Filter</button>
          {/* Add New Post Button */}
          <button className="bg-[#0B6BCB] text-[#FFFFFF] text-xs font-semibold px-4 py-4 rounded-lg" onClick={() => setShowModal(true)}>Create New Post</button>
        </div>
      </div>
      
      <div className="flex gap-2">
        {/* PostCards Container */}
        <div className={`transform transition-all flex flex-col gap-2 ${activePostId ? 'w-1/2' : 'w-full'}`}>
          {postCards}
        </div>

        {/* Details Pane */}
        <div className={`transform transition-all ${activePostId ? 'w-1/2' : 'w-0'}`}>
          {/* Render the details of the active post here */}
          {activePostId && 
            <><div className="mb-2">
            <PostDetails postTitle={"Key establishment problem"} postDate={"2012 april "} postContent={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des"} authorName={"Ahemd Guessoum "} authorRole={"Full Professor, AI Reasercher"} authorAvatarSrc={"https://i.pravatar.cc/100"} upvoteCount={0} feedbackCount={0} attachmentCount={0} tags={['predifined', 'Tag1']} problemId={""} image={"https://i.pravatar.cc/100"} comments={[]} />
          </div><div className="flex flex-col">
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
              <FeedbackCard avatarSrc={"https://i.pravatar.cc/100"} name={"Kamel Boukhalfa"} role={"Big data consultant"} content={"Hello students I am happy to tell you that this problem will be solved asap dont worry"} Date={"12 april 2025"} />
            </div></>
          }
          
          </div>
      </div>
      <AddPost showModal={showModal} setShowModal={setShowModal} addCard={addCard} />
    </div>
  );
};
export default TablesPage;