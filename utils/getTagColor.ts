export const getTagColor = (tagName: string) : string => {
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