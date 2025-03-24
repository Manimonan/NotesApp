import React from "react";
import Modal from "react-modal";
import NoteCard from "../../Components/Cards/NoteCard";
import AddEditNotes from "./AddEditNotes";
import { IoMdAdd } from "react-icons/io";

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = React.useState({
    isShown: false,
    type: "add",
    date: null,
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NoteCard
            title="Meeting on 23rd March"
            date="23rd March 2025"
            content="Meeting with the team to discuss the future of the project"
            tags={["Meeting", "Work"]}
            isPinned={true}
            onPinNote={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
      </div>
      <button
        onClick={() =>
          setOpenAddEditModal({ isShown: true, type: "add", date: new Date() })
        }
        className="w-16 h-16 flex rounded-2xl bg-slate-400 hover:bg-blue-500 absolute right-10 bottom-10 items-center justify-center "
      >
        <IoMdAdd className="text-[32px] text-white course-pointer " />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          content: {
            width: "50%",
            margin: "auto",
            height: "fit-content",
            padding: "20px",
          },
        }}
        contentLabel="Add/Edit Note"
        className="modal"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal}
          onclose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", date: null })
          }
        />
      </Modal>
    </>
  );
}

export default Home;
