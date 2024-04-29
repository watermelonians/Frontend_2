"use client";
import Calendar from "@/components/Calender";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import ChartOne from "@/components/Charts/ChartOne";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";


const items = [
  {
    title: 'Modules',
    content: (
      <CategoryCard 
      title="Operating System" 
      items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard>
    ),
  },
  {
    title: 'Students',
    content: (
      <CategoryCard title="Group 3" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: []
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2"]
        },
        // Add more items as needed
      ]}></CategoryCard>
    ),
  },
  {
    title: 'Adminitration',
    content: (
      <CategoryCard title="Admin" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3"]
        },
        // Add more items as needed
      ]}></CategoryCard>
    ),
  },
  {
    title: 'Logistics',
    content: (
      <CategoryCard title="Amphiteater" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard>
    ),
  },
  {
    title: 'Clubs',
    content: (
      <><><CategoryCard title="GDSC ENSIA" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard><CategoryCard title="GDSC ENSIA" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard></><CategoryCard title="GDSC ENSIA" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard><CategoryCard title="GDSC ENSIA" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard><CategoryCard title="GDSC ENSIA" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard></>
    ),
  },
  {
    title: 'Residancy',
    content: (
      <CategoryCard title="Mahelma 3" items={[
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag3", "Tag4"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1"]
        },
        {
          title: "Update user profile page UI",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-15",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        {
          title: "Add discount code to checkout page",
          avatarSrc: "https://i.pravatar.cc/100",
          date: "2019-09-14",
          category: ["Tag1", "Tag2", "Tag3", "Tag4"]
        },
        // Add more items as needed
      ]}></CategoryCard>
    ),
  },
];

const FeedbackBoard: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <Calendar items={items} />
      </DefaultLayout>
    </>
  );
};

export default FeedbackBoard;