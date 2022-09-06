import React from "react";
import "./styles.css";

export default function App() {
  const [isHeaderShow, setIsHeaderShow] = React.useState(false);

  React.useEffect(() => {
    const footerElm = document.querySelector("#footer");
    const cb = function (entries) {
      entries.forEach((entry) => {
        console.warn("entry", entry);
        if (entry.isIntersecting) {
          console.warn("見えた");
          setIsHeaderShow(true);
        } else {
          console.warn("隠れた");
          setIsHeaderShow(false);
        }
      });
    };

    const copyrightOptions = {
      root: null,
      rootMargin: `${0}px`,
      // rootMargin: `0px`,
      threshold: [1.0, 0.1]
    };

    const copyrightIo = new IntersectionObserver(cb, copyrightOptions); //追加
    copyrightIo.observe(footerElm!);

    return () => {
      copyrightIo.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header className={`header${isHeaderShow ? " is-show" : ""}`} />
      <main className="main">
        <div className="div1" />
        <div className="div2" />
        <div className="div3" />
      </main>
      <footer id="footer" className="footer" />
    </div>
  );
}
