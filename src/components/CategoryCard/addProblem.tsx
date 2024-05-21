import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, useDisclosure, ModalContent } from '@nextui-org/react'; // Update imports if needed

const AddProblem = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    // State variables for title, tags, and description
    const [title, setTitle] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [description, setDescription] = useState('');
    const [validationError, setValidationError] = useState('');

    // Function to handle tag selection
    const handleTagSelect = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // Function to handle description input
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    // Function to handle problem submission
    const handleSubmit = () => {
        // Validate inputs
        if (!title || selectedTags.length === 0 || !description) {
            setValidationError('Please fill in all fields.');
            return;
        }

        // Implement submission logic here
        console.log('Title:', title);
        console.log('Selected Tags:', selectedTags);
        console.log('Description:', description);
        // Optionally, reset fields after submission
        setTitle('');
        setSelectedTags([]);
        setDescription('');
        setValidationError('');
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} className='mt-20 w-150 h-150 dark:bg-[#050C28] bg-[#EDF5FD] rounded-lg shadow-2xl shadow-[#000000BF] dark:shadow-[#EDF5FD]'>
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader>Add Problem</ModalHeader>
                    <ModalBody>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label>Tags:</label>
                            <div>
                                <button onClick={() => handleTagSelect('Tag1')}>Tag1</button>
                                <button onClick={() => handleTagSelect('Tag2')}>Tag2</button>
                                <button onClick={() => handleTagSelect('Tag3')}>Tag3</button>
                                {/* Add more buttons for other predefined tags */}
                            </div>
                            <div>
                                {/* Display selected tags */}
                                {selectedTags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" value={description} onChange={handleDescriptionChange} />
                        </div>
                        {validationError && <p className="text-red-500">{validationError}</p>}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
    );
};

export default AddProblem;
