import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Stats from "./components/Stats";
import Textarea from "./components/Textarea";
import Letters from "./components/Letters";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        <Title title="Analyze your text in real-time." />
        <Textarea
          setText={setText}
          setExcludeSpaces={setExcludeSpaces}
          excludeSpaces={excludeSpaces}
        />
        <Stats text={text} />
        <Letters text={text} excludeSpaces={excludeSpaces} />
      </main>
    </>
  );
}

export default App;
