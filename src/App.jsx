import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Stats from "./components/Stats";
import Textarea from "./components/Textarea";
import Letters from "./components/Letters";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Title title="Analyze your text in real-time." />
        <Textarea />
        <Stats />
        <Letters />
      </main>
    </>
  );
}

export default App;
