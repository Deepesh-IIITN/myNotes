import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-7 col-sm-9 col-10 m-auto d-flex justify-content-center">
              <div className="mt-5 note-box">
                <form>
                  <textarea
                    placeholder="Tittle"
                    rows={1}
                    className="tittle"
                    name="tittle"
                  ></textarea>
                  <hr />
                  <textarea
                    placeholder="note"
                    className="content"
                    name="note"
                  ></textarea>
                </form>
                <img
                  src="https://www.clipartmax.com/png/middle/2-28449_large-add-symbol-clipart-plus-sign-transparent-background.png"
                  className="img-fluid plus-sign"
                />
              </div>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-lg-3 col-md-4 p-2 col-sm-2 note">
              <h5>About</h5>
              <p>hii all guys how are you</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
