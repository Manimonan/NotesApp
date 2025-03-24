import React from "react";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";

function Taginput({ tags, setTags }) {
  const [inputValue, setInputValue] = React.useState("");

  const handelAddTag = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const removeTag = (tagToRemoved) => {
    setTags(tags.filter((tag) => tag !== tagToRemoved));
  };
  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-2 ">
              #{tag}
              <button
                onClick={() => removeTag(tag)}
                className=" text-blue-500 p-2 rounded-md cursor-pointer"
              >
                <FiMinusSquare />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Add tags"
          className="border border-slate-200 p-2 rounded-md"
          onChange={handelAddTag}
          onKeyDown={handelKeyDown}
        />
        <button
          onClick={() => addNewTag()}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        >
          <FiPlusSquare />
        </button>
      </div>
    </div>
  );
}

export default Taginput;
