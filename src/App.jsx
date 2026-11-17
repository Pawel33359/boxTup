import Header from "./components/Header";
import Footer from "./components/Footer";
import PackingControls from "./components/packing/PackingControls";
import PackingPreview from "./components/packing/PackingPreview";

function App() {
  return (
    <div class="container">
      <Header />
      <main>
        <PackingControls />
        <PackingPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
