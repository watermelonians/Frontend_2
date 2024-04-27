// Card.js
import { AiOutlineLike, AiOutlineComment, AiOutlinePaperClip, AiOutlineEye, AiOutlineAlignLeft } from 'react-icons/ai';

const getTagColor = (tagName) => {
    switch (tagName) {
      case "Tag1":
        return 'bg-[#492B08]';
      case "Tag2":
        return 'bg-[#7D1212]';
      case "Tag3":
        return 'bg-[#0A470A]';
      case "Tag4":
        return 'bg-[#0B6BCB]';
      default:
        return 'bg-teal-100'; // Default color
    }
  };

const Card = ({ title, avatarSrc, date, category }) => {
    return (
      <li className="mt-3">
        <a href="#" className="block p-5 bg-[#050C28] rounded-xl shadow">
          <div className="flex justify-between">
            <p className="text-sm font-bold leading-snug text-gray-900 text-left">{title}</p>
          </div>
          <div className="flex justify-between items-baseline">
                <div className="mt-2">
                    {category.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 leading-tight inline-flex items-center rounded-lg mr-1 font-semibold text-xs ${getTagColor(tag)}`}>
                        #{tag}
                    </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-start mt-2">
                <AiOutlineLike className="mr-2 text-white hover:text-blue-700 cursor-pointer" />
                <AiOutlineAlignLeft className="mr-2 text-white hover:text-blue-700 cursor-pointer" />
                <AiOutlineComment className="mr-2 text-white hover:text-blue-700 cursor-pointer" />
                <AiOutlinePaperClip className="mr-2 text-white hover:text-blue-700 cursor-pointer" />
                <AiOutlineEye className="text-white hover:text-blue-700 cursor-pointer" />
                <div className='flex-grow'></div>
                <span>
                    <img className="h-4 w-4 rounded-full" src={avatarSrc} alt="avatar" />
                </span>
            </div>
        </a>
      </li>
    );
  };
  
  export default Card;
  