import Footer from "./components/Footer";
import Rotas from "./routes";
import { ResetStyles } from "./styles/reset";

function App() {
  return (
    <>
      <ResetStyles />
      <div className="containerGlobal">
        <Rotas />
      </div>
      <Footer />
    </>
  );
}

export default App;
