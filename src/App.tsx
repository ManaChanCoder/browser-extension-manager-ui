import Layout from "./layouts/Layout";

// store
import { themeStorage } from "./store/themeStore";

const App = () => {
  const isDark = themeStorage((state) => state.isDark);
  return (
    <div className={`main-container ${isDark ? "light-mode" : "dark-mode"}`}>
      <div className="container">
        <Layout />
      </div>
    </div>
  );
};

export default App;
