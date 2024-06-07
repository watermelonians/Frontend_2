"use client";

import React, { useEffect, useState } from "react";
import { BentoGridItem } from "@/components/BentoGridItem/bento-grid";
import { cn } from "utils/cn";
import { AiFillCaretDown, AiOutlineLeft } from "react-icons/ai";
import ProblemDetailsDisc from "./[id]/page";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function DiscussionSpace() {
  const allClusters = Array.from({ length: 7 }, (_, i) => `Cluster 0${i + 1}`);
  const [visibleClusters, setVisibleClusters] = useState(5);
  const [selectedCluster, setSelectedCluster] = useState(allClusters[0]);
  const [fetchedItems, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Simulate async data fetching
    const fetchedItems = [
      {
        title: "Add discount code to checkout page 1",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 01",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page 2",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 02",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 01",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 07",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 05",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 06",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      {
        title: "Add discount code to checkout page",
        avatarSrc: "https://i.pravatar.cc/100",
        username: "Username",
        date: "2019-09-14",
        time: "12:12",
        Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
        cluster: "Cluster 01",
        archive: false,
        follow: false,
        upvoteCount: 214,
        like: false,
        feedbackCount: 5,
        myVote: true,
        priority: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
        attachments: [
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
          {
            title: "Displayed text here", 
            date: "2019-09-14",
            time: "12:12",
            username: "Username",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            url: "https://i.pravatar.cc/100",
          },
    
        ],
        solved: true,
      },
      // Add other items here...
    ];

    setItems(fetchedItems);
  }, []);

  const handleToggleShow = () => {
    setVisibleClusters(visibleClusters === 5 ? allClusters.length : 5);
  };

  const handleClusterClick = (cluster) => {
    setSelectedCluster(cluster);
    setSelectedItem(null); // Deselect item when switching clusters
    window.history.pushState(null, "", `/DiscussionSpace/${cluster.toLowerCase().replace(/\s/g, '')}`);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-row">
      <div className="fixed right-2 max-w-35 h-150 flex flex-col overflow-auto bg-gradient-to-b from-[#0B6BCB06] to-[#0B6BCB20] rounded-br-xl box-border">
        {allClusters.slice(0, visibleClusters).map((cluster, index) => (
          <button
            key={index}
            onClick={() => handleClusterClick(cluster)}
            className={`flex w-30  p-1.5 m-2 rounded justify-center items-center ${selectedCluster === cluster ? 'dark:bg-[#7D1212] bg-[#F7C5C5]' : 'dark:bg-[#430A0A] bg-[#FCE4E4]'
              }`}
          >
            <AiOutlineLeft className="mr-2 dark:text-[#F7C5C5] text-[#7D1212]" />
            <p className="dark:text-[#F7C5C5] text-[#7D1212] font-semibold text-xs truncate">{cluster}</p>
          </button>
        ))}
        <div onClick={handleToggleShow} className="flex w-30 p-1 m-2 mt-4 rounded justify-center items-center cursor-pointer">
          <p className="dark:text-[#0B6BCB] text-[#0B6BCB] font-semibold text-xs truncate">{visibleClusters === 5 ? 'Show More' : 'Show Less'}</p>
          <AiFillCaretDown className={`h-3 w-3 dark:text-[#0B6BCB] text-[#0B6BCB] transform ml-1 ${visibleClusters === 5 ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>
      <div className={cn("flex-1 p-4")}>
        {selectedItem ? (
          <div>
            <button onClick={handleBackClick} className="mb-4 text-blue-500">
              <AiOutlineLeft /> Back
            </button>
            <ProblemDetailsDisc item={selectedItem} />
          </div>
        ) : (
          <div
            className={cn(
              "grid grid-cols-1 grid-rows-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 md:grid-rows-3 max-w-270"
            )}
          >
            {fetchedItems
              .filter((item) => item.cluster === selectedCluster)
              .map((item, i) => (
                <div key={i} onClick={() => handleItemClick(item)}>
                  <BentoGridItem
                    id={i}
                    title={item.title}
                    Tags={item.Tags}
                    upvote_={item.upvoteCount}
                    feedbackCount={item.feedbackCount}
                    avatarSrc={item.avatarSrc}
                    username={item.username}
                    date={item.date}
                    time={item.time}
                    cluster={item.cluster}
                    archive={item.archive}
                    follow={item.follow}
                    like={item.like}
                    myVote={item.myVote}
                    priority={item.priority}
                    description={item.description}
                    attachments={item.attachments}
                    solved={item.solved}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}