import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); // Set Default number for Password
  const [numberAllowed, setNumberAllowed] = useState(false); // Set Password includes number Yes or Not
  const [charAllowed, setCharAllowed] = useState(true); // Password generated with Char
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:,.<>?~";

    // Running Loop to Generate Password
    for (let i = 1; i < array.length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-96 text-orange-500"
        style={{ backgroundColor: "#303030" }}
      >
        <span className="text-xl">Password Generator</span>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-orange-500 text-white px-5  py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={16}
              max={64}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
