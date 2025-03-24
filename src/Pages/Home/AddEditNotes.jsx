import React from "react";
import Taginput from "../../Components/Taginput";
import { MdClose } from "react-icons/md";

function AddEditNotes({ noteData, type, onclose }) {
  const [titles, setTitles] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [error, setError] = React.useState(null);

  //Add new note
  const addNewNote = async () => {};

  //Edit note
  const editNote = async () => {};

  const handelAddNote = () => {
    if (!titles) {
      setError("Please enter a title");
      return;
    }
    if (!contents) {
      setError("Please enter a content");
      return;
    }
    if (tags.length === 0) {
      setError("Please enter a tag");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="bg-amber-50 p-4 rounded-md relative">
      <button
        onClick={onclose}
        className="absolute right-4 top-4 rounded-full flex items-center justify-center border border-slate-200 p-1"
      >
        <MdClose className="text-slate-700 text-2xl  cursor-pointer" />
      </button>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xl font-semibold text-slate-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter a notes title"
          className="border border-slate-200 p-2 rounded-md"
          value={titles}
          onChange={(e) => setTitles(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xl font-semibold text-slate-700">
          Content
        </label>
        <textarea
          rows="10"
          type="text"
          id="content"
          placeholder="Enter a notes content"
          className="border border-slate-200 p-2 rounded-md"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xl font-semibold text-slate-700">
          Tags
        </label>
        <Taginput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={handelAddNote}
          className="bg-blue-400 text-white p-2 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddEditNotes;
