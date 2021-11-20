import React, { useState } from "react";

const List = () => {
  const [state, setstate] = useState(0);
  const { quote, author } = Data[state];
  const [hex, setHex] = useState("black");

  const NextQuote = () => {
    setstate(Math.floor(Math.random() * Data.length));
    setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: `${hex}` }}>
        <div className="row" id="random">
          <h1 className="h1 col-12 text-center text-white">
            Random Quote Generator without API
          </h1>
          <div className="col-md-3 col-sm-2"></div>
          <div className="col-md-6 col-sm-8" id="quote">
            <div className="quote" style={{ color: `${hex}` }}>
              {quote}
            </div>
            <div className="author text-end py-3" style={{ color: `${hex}` }}>
              --- {author}
            </div>
            <div className="text-center my-2">
              <button id="btn" className="py-2 px-3" onClick={NextQuote}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
