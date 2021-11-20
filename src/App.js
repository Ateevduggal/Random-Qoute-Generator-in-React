import React, { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [hex, setHex] = useState("#fff");
  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQ = data.quotes;
        let ranNum = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNum];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
        setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
      });
  };

  const NextQuote = () => {
    getQuotes();
  };
  return (
    <>
      <div className="container" style={{ backgroundColor: `${hex}` }}>
        <div className="row" id="random">
          <h1 className="h1 col-12 text-center text-white">
            Random Quote Generator with API
          </h1>
          <div className="col-md-3 col-sm-2"></div>
          <div className="col-md-6 col-sm-8" id="quote">
            <div className="quote" style={{ color: `${hex}` }}>
              {quote}
            </div>
            <div className="author text-end py-3" style={{ color: `${hex}` }}>
              ---{author}
            </div>
            <div className="text-center my-3">
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

export default App;
