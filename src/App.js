import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { MdUndo, MdArchive } from "react-icons/md";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/NotesData";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (note) => {
    const createdAt = new Date();
    const newNote = {
      id: nanoid(),
      title: note.title,
      body: note.body,
      createdAt: createdAt,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  const archiveNote = (id) => {
    const newNote = notes;
    const index = newNote.findIndex((note) => note.id === id);
    newNote[index].archived = !notes[index].archived;
    console.log(newNote);
    setNotes(newNote);
  };

  // const handleSearchNote = (searchTerm) => {
  //   notes.filter((note) => note.title.toLocaleLowerCase().includes(searchTerm));
  // };

  return (
    <div className="max-w-6xl mr-auto ml-auto p-4">
      <Header handleSearchNote={setSearchTerm} />
      <div className="grid gap-4 grid-cols-4">
        <div className="col-span-3">
          <NoteList
            // notes={notes.filter((note) =>
            //   note.title.toLocaleLowerCase().includes(searchTerm),
            // )}
            notes={notes.filter((note) => note.archived === false)}
            // notes={filteredNotes}
            label="Catatan Aktif"
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleArchiveNote={archiveNote}
          />
          <NoteList
            notes={notes.filter((note) => note.archived === true)}
            label="Arsip"
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleArchiveNote={archiveNote}
          />
        </div>
        <AddNote handleAddNote={addNote} />
      </div>
    </div>
  );
};

export default App;
