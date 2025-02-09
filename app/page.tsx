'use client';
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [charLength, setCharLength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ label: "", color: "", fillBar: 0 });
  const [copied, setCopied] = useState(false);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const fillPercentage = ((charLength - 0) / (21 - 0)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #A4FFAF ${fillPercentage}%, #18171F ${fillPercentage}%)`;
    }
  }, [charLength]);

  const calculateStrength = () => {
    const MIN_LENGTH = 8;
    let score = 0;

    // If the password is too short, it's automatically "Too weak!"
    if (charLength < MIN_LENGTH) {
      setStrength({ label: "Too weak!", color: "bg-softRed", fillBar: 1 });
      return;
    }

    // Increase score for each character variety present
    if (includeUppercase) score++;
    if (includeLowercase) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;

    // Bonus points for longer passwords
    if (charLength >= 12) score++; // Bonus for 12+ characters
    if (charLength >= 16) score++; // Extra bonus for 16+ characters

    // Map the total score to a strength level
    let strength;
    if (score <= 1) {
      strength = { label: "Too weak!", color: "bg-softRed", fillBar: 1 };
    } else if (score === 2) {
      strength = { label: "Weak", color: "bg-warmOrange", fillBar: 2 };
    } else if (score <= 4) {
      strength = { label: "Medium", color: "bg-goldenYellow", fillBar: 3 };
    } else {
      strength = { label: "Strong", color: "bg-neonGreen", fillBar: 4 };
    }

    setStrength(strength);
  };

  const generatePassword = () => {
    let charSet = "";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (includeUppercase) charSet += upper;
    if (includeLowercase) charSet += lower;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;

    if (charLength === 0) {
      setPassword("Select at least 1 character");
      return;
    }

    if (charSet === "") {
      setPassword("Select at least one option");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < charLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
    calculateStrength();
  };

  const copyToClipboard = () => {
    if (password.length < 1) {
      return;
    }

    navigator.clipboard.writeText(password);
    setCopied(true);
    // Reset the copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="w-full max-w-lg px-4 py-8 mx-auto text-lightGray">
      <h1 className="text-lg text-center text-mutedPurple">Password Generator</h1>

      <div className="flex px-4 py-2 mt-4 bg-darkGray">
        <input
          type="text"
          className="flex-1 py-2 text-xl font-bold bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-lightGray/25"
          placeholder="P4$5W0rD!"
          value={password}
          readOnly
        />
        <button type="button" className="flex items-center gap-2 text-neonGreen hover:text-lightGray flex-0" onClick={copyToClipboard}>
          <span className="sr-only">Copy to clipboard</span>
          {copied && (
            <span className="uppercase">Copied!</span>
          )}
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.909 0.659016L20.341 3.09098C20.763 3.51294 21 4.08523 21 4.68197V17.25C21 18.4926 19.9926 19.5 18.75 19.5H15V21.75C15 22.9926 13.9926 24 12.75 24H2.25C1.00734 24 0 22.9926 0 21.75V6.75C0 5.50734 1.00734 4.5 2.25 4.5H6V2.25C6 1.00734 7.00734 0 8.25 0H16.3181C16.9147 3.12036e-06 17.4871 0.237058 17.909 0.659016ZM2.53126 21.75H12.4687C12.5434 21.75 12.6149 21.7204 12.6677 21.6677C12.7204 21.6149 12.75 21.5434 12.75 21.4687V19.5H8.25C7.00734 19.5 6 18.4926 6 17.25V6.75H2.53126C2.45665 6.75 2.38512 6.77963 2.33238 6.83238C2.27963 6.88512 2.25 6.95665 2.25 7.03126V21.4687C2.25 21.5434 2.27963 21.6149 2.33238 21.6677C2.38512 21.7204 2.45665 21.75 2.53126 21.75ZM18.4687 17.25H8.53126C8.45665 17.25 8.38512 17.2204 8.33238 17.1677C8.27963 17.1149 8.25 17.0434 8.25 16.9687V2.53126C8.25 2.45665 8.27963 2.38512 8.33238 2.33238C8.38512 2.27963 8.45665 2.25 8.53126 2.25H13.5V6.375C13.5 6.99632 14.0036 7.5 14.625 7.5H18.75V16.9687C18.75 17.0434 18.7204 17.1149 18.6677 17.1677C18.6149 17.2204 18.5434 17.25 18.4687 17.25ZM15.75 5.25H18.75V4.7985C18.75 4.76156 18.7427 4.72499 18.7286 4.69086C18.7145 4.65673 18.6937 4.62572 18.6677 4.59961L16.4004 2.33236C16.3476 2.27963 16.2761 2.25 16.2014 2.25H15.75V5.25Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div className="p-4 text-lg font-bold mt-7 bg-darkGray">
        <h2 className="flex justify-between">
          <span>Character Length</span>
          <span className="text-xl font-bold text-neonGreen">{charLength}</span>
        </h2>
        <div className="mt-2">
          <label htmlFor="charLength" className="sr-only">Character Length</label>
          <input
            value={charLength}
            ref={sliderRef}
            onChange={(e) => setCharLength(Number(e.target.value))}
            type="range"
            id="charLength"
            className="w-full slider"
            min="0"
            max="20"
            step="1"
          />
        </div>

        {/* Checkbox Options */}
        {[
          { label: "Include Uppercase Letters", state: includeUppercase, setState: setIncludeUppercase },
          { label: "Include Lowercase Letters", state: includeLowercase, setState: setIncludeLowercase },
          { label: "Include Numbers", state: includeNumbers, setState: setIncludeNumbers },
          { label: "Include Symbols", state: includeSymbols, setState: setIncludeSymbols }
        ].map((option, index) => (
          <div className="mt-5" key={index}>
            <input
              type="checkbox"
              checked={option.state}
              onChange={() => option.setState(!option.state)}
              id={option.label}
              className="hidden peer"
            />
            <label htmlFor={option.label} className="flex items-center gap-3 cursor-pointer">
              {option.state ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" fill="#A4FFAF" />
                  <path d="M4 10.6066L7.39341 14L15.3934 6" stroke="#18171F" strokeWidth="3" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="18" height="18" stroke="#E6E5EA" strokeWidth="2" />
                </svg>
              )}
              {option.label}
            </label>
          </div>
        ))}

        {/* Strength Gauge */}
        <div className="flex justify-between p-4 mt-5 uppercase bg-deepBlack">
          <span className="text-mutedPurple">Strength</span>
          <div className="flex items-center gap-2">
            <span className="text-lightGray">{strength.label}</span>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-6 ${i < strength.fillBar ? strength.color : "border-2 border-lightGray"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button type="button" className="flex items-center justify-center w-full gap-2 py-4 mt-5 text-lg font-bold uppercase border-2 text-deepBlack bg-neonGreen border-neonGreen hover:bg-transparent hover:text-neonGreen" onClick={generatePassword}>
          Generate
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </main>
  );
}
