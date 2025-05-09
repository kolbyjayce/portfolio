import { useEffect, useRef, useState } from "react";
import { Cursor } from "./cursor";
import styles from "./input-line.module.css";

export function InputLine() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key.length === 1) {
        // Printable characters
        setText((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setText((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        // You can handle command submission here
        console.log("Submitted command:", text);
        setText("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [text]);

  // Keep the hidden input focused for accessibility (optional)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container} onClick={() => inputRef.current?.focus()}>
      <div className={styles.line}>
        <span className={styles.prompt}>user@kolby-portfolio:~$ </span>
        <span className={styles.input}>{text}</span>
        <Cursor />
      </div>
      <input ref={inputRef} style={{ opacity: 0, position: "absolute" }} />
    </div>
  );
}
