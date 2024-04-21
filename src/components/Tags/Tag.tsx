import { CSSProperties, FunctionComponent } from "react";

interface TagProps {
  name: string;
}

const Tag: FunctionComponent<TagProps> = ({ name }) => {
  // Define a mapping of tag names to predefined colors
  const chipStyle: Record<string, CSSProperties["backgroundColor"]> = {
    Tag1: "#492b08", 
    Tag2: "#7d1212", 
    Tag3: "#0a470a", 
    Tag4: "#32383e"   
   
  };
  const labelStyle: Record<string, CSSProperties["color"]> = {
    Tag1: "#f3c896", 
    Tag2: "#f09898", 
    Tag3: "#a1e8a1",
    Tag4: "#cdd7e1" 
  };

  // Get the color for the current tag name
  const tagColor = chipStyle[name] || "#808080"; // Default color for unknown tags
const labelColor = labelStyle[name] || ""; // Default color for unknown tags

  return (
    <div className="rounded-lg bg-warning-soft-color overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata2 px-boundvariablesdata3" style={{ backgroundColor: tagColor }}>
      <div className="relative leading-[166%] font-semibold" style={{ color: labelColor }}>{name}</div>
    </div>
  );
};

export default Tag;

