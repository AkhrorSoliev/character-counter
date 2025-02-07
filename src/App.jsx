import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Textarea from "./components/Textarea";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section title="Analyze your text in real-time." />
        <Textarea />
      </main>
    </>
  );
}

export default App;
