import "./App.css";
import Hero from "./components/Hero";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    document.documentElement.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX + "px";
      const mouseY = evt.clientY + "px";
      const root = document.documentElement;
      cursor.style.setProperty("display", "inline-block");
      setTimeout(() => {
        root.style.setProperty("--cursorX", mouseX);
        root.style.setProperty("--cursorY", mouseY);
      }, 160);
    });

    document.documentElement.addEventListener("mouseleave", (evt) => {
      cursor.style.setProperty("display", "none");
    });
  }, []);

  return (
    <div className="App">
      <span id="cursor">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" stroke-width="0" fill="#f7f8fa" />
        </svg>
      </span>
      <Hero />
    </div>
  );
}

export default App;
