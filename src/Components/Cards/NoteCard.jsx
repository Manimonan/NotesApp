import React from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md gap-3 transition-all case-in-out duration-300">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>
      <p className="text-sm text-slate-700 pt-1.5 pb-2">
        {content?.slice(0, 60)}
      </p>
      <div className="text-xs text-slate-600 p-1">{tags}</div>

      <div className=" flex items-center gap-4 p-2 border border-amber-200 rounded-md">
        <MdCreate
          className="text-slate-400 cursor-pointer hover:text-black"
          onClick={onEdit}
        />
        <MdDelete
          className="text-slate-400 cursor-pointer hover:text-black"
          onClick={onDelete}
        />
        <BsFillPinAngleFill
          className={`icon-btn ${
            isPinned ? "text-slate-400 " : "text-sky-500"
          }`}
          onClick={onPinNote}
        />
      </div>
    </div>
  );
}

export default NoteCard;
