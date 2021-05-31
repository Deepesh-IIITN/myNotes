import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Notes = (probs) => {
  const history = useHistory();
  const [allNotes, setallNotes] = useState([]);
  const callNotesPage = async () => {
    try {
      const res = await fetch("/notes", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setallNotes(data.notes);
      console.log(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callNotesPage();
  }, []);

  const [formData, setFormData] = useState({ tittle: "", content: "" });
  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const postData = async (event) => {
    event.preventDefault();
    const res = await fetch("/saveNotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, userID: probs.userID }),
    });
    const data = await res.json();
    if (!(data.status === 200)) {
      callNotesPage();
      setFormData({ tittle: "", content: "" });
    } else {
      window.alert("something went wrong");
    }
  };
  const arr = [1, 2, 3];
  function notesFunc() {
    return (
      <>
        {allNotes.map((x) => (
          <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
              <div className="note">
                <h5>{x.tittle}</h5>
                <p>{x.content}</p>
              </div>
            </div>
          </>
        ))}
      </>
    );
  }
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7 col-sm-9 col-10 m-auto d-flex justify-content-center">
              <div className="mt-5 note-box">
                <form method="POST" id="noteForm">
                  <textarea
                    placeholder="Tittle"
                    rows={1}
                    className="tittle"
                    name="tittle"
                    onChange={inputHandler}
                    value={formData.tittle}
                  ></textarea>
                  <hr />
                  <textarea
                    placeholder="note"
                    className="content"
                    name="content"
                    onChange={inputHandler}
                    value={formData.content}
                  ></textarea>
                </form>
                <img
                  src="https://www.clipartmax.com/png/middle/2-28449_large-add-symbol-clipart-plus-sign-transparent-background.png"
                  className="img-fluid plus-sign"
                  alt="add"
                  onClick={postData}
                />
              </div>
            </div>
          </div>
          <div className="row m-5">{notesFunc()}</div>
        </div>
      </div>
    </>
  );
};

export default Notes;
