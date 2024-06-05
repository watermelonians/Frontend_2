import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const getTagColor = (tagName) => {
    switch (tagName) {
      case "Tag1":
        return 'dark:bg-[#492B08] bg-[#FCE1C2]';
      case "Tag2":
        return 'dark:bg-[#7D1212] bg-[#F7C5C5]';
      case "Tag3":
        return 'dark:bg-[#0A470A] bg-[#C7F7C7]';
      case "Tag4":
        return 'dark:bg-[#0B6BCB] bg-[#C7DFF7]';
      default:
        return 'dark:bg-[#636B74] bg-[#DDE7EE]'; // Default color
    }
  };

  const getTagTextColor = (tagName) => {
    switch (tagName) {
      case "Tag1":
        return 'text-[#9A5B13] dark:text-[#F3C896]';
      case "Tag2":
        return 'text-[#C41C1C] dark:text-[#F09898]';
      case "Tag3":
        return 'text-[#1F7A1F] dark:text-[#A1E8A1]';
      case "Tag4":
        return 'text-[#12467B] dark:text-[#97C3F0]';
      default:
        return 'text-[#32383E] dark:text-[#CDD7E1]'; // Default color
    }
  };

const DropDownTags = ({ people, onSelectedTagsChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<Map<number, any>>(new Map());
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTagToggle = (person) => {
    const newSelectedTags = new Map(selectedTags);
    if (selectedTags.has(person.id)) {
        newSelectedTags.delete(person.id);
    } else {
        newSelectedTags.set(person.id, person);
    }
    setSelectedTags(newSelectedTags);
    // Call the parent callback function to pass the updated selected tags
    onSelectedTagsChange(newSelectedTags);
  };

  const suggestedMembers = people.filter((person) =>
    person.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center dark:bg-[#32383E] bg-[#DDE7EE] px-2 py-2 rounded-lg">
            <AiOutlinePlus className='dark:text-[#CDD7E1] text-[#32383E] h-3 w-3'/>
        </button>
        {isOpen && (
            <div className="origin-top absolute mt-2 w-60 h-70 rounded-md shadow-1 bg-[#E3EFFB] dark:bg-[#0a2744] ring-1 ring-black ring-opacity-5" style={{ zIndex: 999 }}>
            <div className="p-4">
                <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none bg-[#C7DFF7] placeholder:text-sm placeholder:text-[#636B74] placeholder:font-semibold focus:border-blue-300 w-full"
                placeholder="Search label"
                />
            </div>
            <div className="flex flex-col max-h-50 overflow-y-auto">
                <div className="text-sm font-semibold px-4 pt-2 pb-1 text-[#171A1C] dark:text-[#F0F4F8]">Selected</div>
                {Array.from(selectedTags.values()).map((person) => (
                    <div
                    key={person.id}
                    className="flex px-4 py-2 cursor-pointer flex-row items-center"
                    onClick={() => handleTagToggle(person)}
                    >
                        <input
                            type="checkbox"
                            checked={selectedTags.has(person.id)}
                            className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3 w-3 rounded text-[#0B6BCB] flex justify-end"
                            onChange={() => {}}
                        />
                        <div className='flex flex-grow'></div>
                        <div className="flex items-center space-x-4 w-full ml-2">
                            <div className={`${getTagColor(person.tag)} ${getTagTextColor(person.tag)} w-full rounded text-sm p-0.5 font-semibold pl-2`}>{person.tag}</div>
                        </div>
                    </div>
                ))}
                <div className="text-sm font-semibold px-4 pt-2 pb-1 text-[#171A1C] dark:text-[#F0F4F8]">Suggested for you</div>
                    {suggestedMembers.map((person) => (
                    <div
                        key={person.id}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center"
                        onClick={() => handleTagToggle(person)}
                    >
                        <input
                        type="checkbox"
                        checked={selectedTags.has(person.id)}
                        className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3 w-3 rounded text-[#0B6BCB] flex justify-end"
                        onChange={() => {}}
                        />
                        <div className='flex flex-grow'></div>
                        <div className="flex items-center space-x-4 w-full ml-2">
                            <div className={`${getTagColor(person.tag)} ${getTagTextColor(person.tag)} w-full rounded text-sm p-0.5 font-semibold pl-2`}>{person.tag}</div>
                        </div>
                    </div>
                    ))}
            </div>
            </div>
        )}
    </div>
  );
};

export default DropDownTags;
