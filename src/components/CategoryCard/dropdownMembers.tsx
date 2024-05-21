import React, { useState, useRef, useEffect } from 'react';

const DropDownMembers = ({ people, onSelectedMembersChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedmembers, setSelectedmembers] = useState(new Map());
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

  const handleMemberToggle = (person) => {
    const newSelectedMembers = new Map(selectedmembers);
    if (selectedmembers.has(person.id)) {
      newSelectedMembers.delete(person.id);
    } else {
      newSelectedMembers.set(person.id, person);
    }
    setSelectedmembers(newSelectedMembers);
    // Call the parent callback function to pass the updated selected members
    onSelectedMembersChange(newSelectedMembers);
  };

  const suggestedMembers = people.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center dark:text-[#DDE7EE] text-[#32383E] font-bold text-sm px-2 py-1 rounded outline outline-[#32383E] outline-2 w-30"
      >
        <span>Members</span>
        <div className='flex flex-grow'></div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-current text-[#32383E] dark:text-[#DDE7EE]">
          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z"/>
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top absolute mt-2 w-60 h-80 rounded-md shadow-1 bg-[#E3EFFB] dark:bg-[#0a2744] ring-1 ring-black ring-opacity-5" style={{ zIndex: 999 }}>
          <div className="p-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none bg-[#C7DFF7] placeholder:text-[#636B74] placeholder:font-semibold focus:ring focus:border-blue-300 w-full"
              placeholder="Search member"
            />
          </div>
          <div className="flex flex-col max-h-60 overflow-y-auto">
            <div className="text-sm font-semibold px-4 pt-2 pb-1 text-[#171A1C] dark:text-[#F0F4F8]">Selected</div>
              {Array.from(selectedmembers.values()).map((person) => (
                <div
                  key={person.id}
                  className="flex px-4 py-2 cursor-pointer flex-row"
                  onClick={() => handleMemberToggle(person)}
                >
                    <div className="flex items-center space-x-4">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="h-5 w-5 rounded-full"
                        />
                        <div>
                            <span className="text-sm">{person.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-grow'></div>
                    <input
                      type="checkbox"
                      checked={selectedmembers.has(person.id)}
                      className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3.5 w-3.5 rounded text-[#0B6BCB] flex justify-end"
                      onChange={() => {}}
                    />
                </div>
              ))}
            <div className="text-sm font-semibold px-4 pt-2 pb-1 text-[#171A1C] dark:text-[#F0F4F8]">Suggested for you</div>
                {suggestedMembers.map((person) => (
                <div
                    key={person.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex flex-row"
                    onClick={() => handleMemberToggle(person)}
                >
                    <div className="flex items-center space-x-4">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="h-5 w-5 rounded-full"
                        />
                        <div>
                            <span className="text-sm">{person.name}</span>
                        </div>
                    </div>
                    <div className='flex flex-grow'></div>
                    <input
                      type="checkbox"
                      checked={selectedmembers.has(person.id)}
                      className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3.5 w-3.5 rounded text-[#0B6BCB] flex justify-end"
                      onChange={() => {}}
                    />
                </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMembers;
