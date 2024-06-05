import React from "react";
import { BentoGridItem } from "@/components/BentoGridItem/bento-grid";
import Image from "next/image";
import cards_05 from "public/images/cards/cards_05.png";
import { cn } from "utils/cn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discussion Space",
  description: "Discussion of Problems and Solutions",
};

export default async function DiscussionSpace() {
  async function getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json();
    return data;
  }
  //const { id, name } = (await getUser()) as User;

  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
      )}
    >
      {items.map((item, i) => (
        <>
          <BentoGridItem
            key={i}
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
        </>
      ))}
    </div>
  );
}

const items = [
  {
    title: "Add discount code to checkout page",
    avatarSrc: "https://i.pravatar.cc/100",
    username: "Username",
    date: "2019-09-14",
    time: "12:12",
    Tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
    cluster: "Problem",
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
    cluster: "Problem",
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
    cluster: "Problem",
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
    cluster: "Problem",
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
    cluster: "Problem",
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
    cluster: "Problem",
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
    cluster: "Problem",
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
];
