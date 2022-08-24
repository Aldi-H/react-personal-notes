import { nanoid } from "nanoid";
import { useState } from "react";

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
      archived: false,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const deleltedNotes = notes.filter((note) => note.id !== id);
    setNotes(deleltedNotes);
  };

  const archiveNote = (id) => {
    const archiveNote = notes.filter((note) => note.id !== id);
    const archivedNote = notes.filter((note) => note.id === id);
    archivedNote[0].archived = !archivedNote[0].archived;
    setNotes([...archiveNote, archivedNote[0]]);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLocaleLowerCase().includes(searchTerm),
  );

  return (
    <div className="max-w-screen-xl mr-auto ml-auto p-4">
      <Header handleSearchNote={setSearchTerm} />
      <div className="grid lg:grid-cols-4 gap-4">
        <AddNote handleAddNote={addNote} />
        <div className="lg:col-span-3">
          <NoteList
            notes={filteredNotes.filter((note) => note.archived === false)}
            label="Catatan Aktif"
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleArchiveNote={archiveNote}
          />
          <NoteList
            notes={filteredNotes.filter((note) => note.archived === true)}
            label="Arsip"
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
            handleArchiveNote={archiveNote}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
