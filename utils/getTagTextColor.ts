export const getTagTextColor = (tagName: string) : string => {
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