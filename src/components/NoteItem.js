import { MdDeleteForever, MdArchive, MdUndo } from "react-icons/md";

const NoteItem = ({
  id,
  noteTitle,
  noteBody,
  noteCreatedAt,
  handleDeleteNote,
  handleArchiveNote,
  noteArchived,
}) => {
  return (
    <div className="bg-teal-200 rounded-md backdrop-blur-sm backdrop-brightness-100 p-4 h-max max-w flex flex-col justify-between whitespace-pre-wrap">
      <div className="flex flex-col justify-between flex-wrap">
        <h3 className="py-3 font-bold text-lg text-gray-800">{noteTitle}</h3>
        <p className="py-3 text-sm text-gray-800">{noteBody}</p>
      </div>
      <footer className="pt-10 flex text-center justify-between">
        <small className="font-semibold text-gray-500">{noteCreatedAt}</small>
        <div className="flex flex-row gap-x-2.5">
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="cursor-pointer"
            size="1.5em"
          />
          {noteArchived ? (
            <MdUndo
              onClick={() => handleArchiveNote(id)}
              className="cursor-pointer"
              size="1.5em"
            />
          ) : (
            <MdArchive
              onClick={() => handleArchiveNote(id)}
              className="cursor-pointer"
              size="1.5em"
            />
          )}
        </div>
      </footer>
    </div>
  );
};

export default NoteItem;
