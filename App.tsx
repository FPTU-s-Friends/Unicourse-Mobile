import AppProvider from "./src/context/providers/AppProvider";
import Router from "./src/routes";
export default function App() {
  return (
    <AppProvider>
      <Router></Router>
    </AppProvider>
  );
}
