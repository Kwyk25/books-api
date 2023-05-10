const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img id="img2"
          src="/images/404.jpg"
          alt="whoops you have a 404 error better luck next time"
        />
      </main>
    </Def>
  );
}

module.exports = error404;