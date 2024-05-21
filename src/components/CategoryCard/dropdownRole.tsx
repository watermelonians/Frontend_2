import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const DropDownRole = ({ people, onSelectedRolesChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRoles, setSelectedRoles] = useState<Map<number, any>>(new Map());
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
    const newSelectedRoles = new Map(selectedRoles);
    if (selectedRoles.has(person.id)) {
        newSelectedRoles.delete(person.id);
    } else {
        newSelectedRoles.set(person.id, person);
    }
    setSelectedRoles(newSelectedRoles);
    // Call the parent callback function to pass the updated selected members
    onSelectedRolesChange(newSelectedRoles);
  };

  const suggestedMembers = people.filter((person) =>
    person.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-row items-center dark:text-[#DDE7EE] text-[#32383E] font-bold text-sm px-2 py-1 rounded outline outline-[#32383E] outline-2 w-30">
            <span>Roles</span>
            <div className='flex flex-grow'></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-current text-[#32383E] dark:text-[#DDE7EE]"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z"/></svg>                
        </button>
        {isOpen && (
            <div className="origin-top absolute mt-2 w-55 h-70 rounded-md shadow-1 bg-[#E3EFFB] dark:bg-[#0a2744] ring-1 ring-black ring-opacity-5" style={{ zIndex: 999 }}>
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
                    <div className="grid grid-cols-2 px-1">
                        {Array.from(selectedRoles.values()).map((person) => (
                            <div
                            key={person.id}
                            className="flex px-4 py-2 cursor-pointer flex-row items-center"
                            onClick={() => handleMemberToggle(person)}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedRoles.has(person.id)}
                                    className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3.5 w-3.5 rounded text-[#0B6BCB] flex justify-end"
                                    onChange={() => {}}
                                />
                                <div className='flex flex-grow'></div>
                                <div className="flex items-center space-x-4 w-full ml-2">
                                    <div className={`bg-[#C7DFF7] text-[#12467B] w-full rounded text-sm p-1 font-semibold pl-2`}>{person.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-sm font-semibold px-4 pt-2 pb-1 text-[#171A1C] dark:text-[#F0F4F8]">Select role</div>
                    <div className="grid grid-cols-2 px-1">
                        {suggestedMembers.map((person) => (
                        <div
                            key={person.id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex flex-row items-center"
                            onClick={() => handleMemberToggle(person)}
                        >
                            <input
                            type="checkbox"
                            checked={selectedRoles.has(person.id)}
                            className="form-checkbox border border-[#97C3F0] bg-[#EDF5FD] h-3.5 w-3.5 rounded text-[#0B6BCB] flex justify-end"
                            onChange={() => {}}
                            />
                            <div className='flex flex-grow'></div>
                            <div className="flex items-center space-x-4 w-full ml-2">
                                <div className={`bg-[#C7DFF7] text-[#12467B] w-full rounded text-sm p-1 font-semibold pl-2`}>{person.role}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default DropDownRole;
