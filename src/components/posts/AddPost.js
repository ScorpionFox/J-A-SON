import React from "react";

export const AddPost = ({ onAddPost }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAddPost(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Post</h3>
      <input placeholder="Title" name="title" />
      <textarea placeholder="Body" name="body" />
      <button type="submit">Add</button>
      <hr />
    </form>
  );
};