import { showFormattedDate } from "../utils/NotesData";
import NoteItem from "./NoteItem";

const NoteList = ({
  notes,
  handleArchiveNote,
  handleDeleteNote,
  handleSearchNote,
  label,
}) => {
  return (
    <div className="py-4">
      {/* <AddNote handleAddNote={handleAddNote} /> */}
      <h2 className="text-2xl pb-6 font-bold">{label}</h2>
      <div className="grid col-span-3 grid-cols-auto gap-4">
        {notes.length === 0 ? (
          <div className="text-center text-2xl text-gray-500">
            <p className="text-center">Tidak ada catatan</p>
          </div>
        ) : (
          notes.map((note, index) => (
            <NoteItem
              key={index}
              id={note.id}
              noteTitle={note.title}
              noteBody={note.body}
              // action={handleArchiveNote}
              noteCreatedAt={showFormattedDate(note.createdAt)}
              handleDeleteNote={handleDeleteNote}
              handleArchiveNote={handleArchiveNote}
              handleSearchNote={handleSearchNote}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
