import React, { useState } from "react";

function CreateArea(props) {
 /*new material */

  const [isExpanded, setExpanded] = useState(false);

/*over*/ 
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
 /* new maateria; */
   function expand() {
    setExpanded(true);
   }
 /* over */
  return (
    <div>
      <form className="create-note">
        {isExpanded ?
            <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3: 1}
        />
        {isExpanded ? <button onClick={submitNote}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

        </button> : null}
      </form>
    </div>
  );
}

export default CreateArea;
  