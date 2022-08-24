import { MdDeleteForever, MdArchive, MdUndo } from "react-icons/md";

const NoteItem = ({
  id,
  noteTitle,
  noteBody,
  noteCreatedAt,
  handleDeleteNote,
  handleArchiveNote,
  action,
}) => {
  // const toogleArchive = (item) => {
  //   action((notes) => {
  //     notes.map((note) => {
  //       if (note.id === item.id) {
  //         return {
  //           ...note,
  //           archived: !note.archived,
  //         };
  //       }
  //       return note;
  //     });
  //   });
  // };

  return (
    <div className="bg-sky-500 rounded-md backdrop-blur-sm backdrop-brightness-100 p-4 h-max max-w flex flex-col justify-between whitespace-pre-wrap">
      <div className="flex flex-col justify-between flex-wrap">
        <h3 className="py-3 font-bold text-lg">{noteTitle}</h3>
        <p className="py-3 text-sm">{noteBody}</p>
      </div>
      <footer className="pt-10 flex text-center justify-between">
        <small className="font-semibold">{noteCreatedAt}</small>
        <div className="flex flex-row gap-x-2.5">
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="cursor-pointer"
            size="1.5em"
          />
          <MdArchive
            // onClick={() => toogleArchive(id)}
            className="cursor-pointer"
            size="1.5em"
          />
        </div>
      </footer>
    </div>
  );
};

export default NoteItem;
