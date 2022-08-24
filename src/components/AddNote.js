import { useState } from "react";

import { MdAddCircle } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const characterTitleLimit = 50;

  const onHandleChangeTitle = (e) => {
    if (characterTitleLimit - e.target.value.length >= 0) {
      setNoteTitle(e.target.value);
    }
  };

  const onHandleChangeContent = (e) => {
    setNoteContent(e.target.value);
  };

  const onHandleAddNote = () => {
    if (noteTitle.trim().length && noteContent.trim().length > 0) {
      handleAddNote({
        title: noteTitle,
        body: noteContent,
      });
      setNoteTitle("");
      setNoteContent("");
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl pb-6 font-bold">Buat Catatan</h2>
      <div className="bg-amber-100 rounded-md backdrop-blur-sm backdrop-brightness-100 p-4 h-max max-w flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <input
            type="text"
            placeholder="Masukkan Judul...."
            className="p-2 text-lg font-bold bg-amber-100 text-gray-800 border-none placeholder:font-normal placeholder:text-sm focus:outline-none placeholder-slate-400 placeholder:font-mono"
            value={noteTitle}
            onChange={onHandleChangeTitle}
          ></input>
          <textarea
            rows="8"
            cols="10"
            placeholder="Masukkan Catatan...."
            className="p-2 text-sm bg-amber-100 text-gray-800 border-none resize-none focus:outline-none placeholder-slate-400 placeholder:font-mono"
            value={noteContent}
            onChange={onHandleChangeContent}
          ></textarea>
        </div>
        <footer className="pt-10 flex text-center justify-between">
          <small className="font-semibold text-slate-600">
            {characterTitleLimit - noteTitle.length} Character Remaining
          </small>
          <MdAddCircle
            className="cursor-pointer"
            size="1.5em"
            onClick={onHandleAddNote}
          />
        </footer>
      </div>
    </div>
  );
};

export default AddNote;
