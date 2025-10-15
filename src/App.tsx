import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Rotas from "./routes";
import { ResetStyles } from "./styles/reset";
import { store } from "./store";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <ResetStyles />
      <div className="containerGlobal">
        <Rotas />
      </div>
      <Cart />
      <Footer />
    </Provider>
  );
}

export default App;
