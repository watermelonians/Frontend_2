import React, { useState } from 'react';
import Card from './Card';
import AddCardModal from './modal';

const CategoryCard = ({ title, items }) => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState(items);

  const addCard = (newCard) => {
    
  };

  return (
    <div className="relative p-3 w-80 flex-grow bg-gray-100 rounded-xl bg-[#E3EFFB] dark:bg-[#0A274440]">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold dark:text-[#F0F4F8] text-[#171A1C]">{title}</h3>
          <a className="p-2 text-xs font-bold dark:text-[#CDD7E1] text-[#171A1C]" href='/Analytics'>Go to category page</a>
        </div>
      </div>
      <div className="p-2 mt-2 h-100 overflow-y-auto flex-nowrap bg-[#C7DFF7] dark:bg-[#12467B40] rounded-md">
        {cards.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <div className="absolute inset-x-4 bottom-2 justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#1F7A1F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-71.5 justify-center items-center"
        >
          Add a new card
        </button>
      </div>
      <AddCardModal showModal={showModal} setShowModal={setShowModal} addCard={addCard} />
    </div>
  );
};

export default CategoryCard;
