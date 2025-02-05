import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext.jsx";

export default function UserForm() {
  const [inputName, setInputName] = useState("");
  const { name, setName } = useContext(UserContext);

  function handleChange(e) {
    setInputName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName); // Set the name in context
    window.history.pushState({}, "", "/quiz"); // Change the URL without reloading the page
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); // Dispatch a navigation event
  }

  return (
    // Add the form
<UserForm>
<form>
        <label>Name:</label>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
</UserForm>
  );
}
