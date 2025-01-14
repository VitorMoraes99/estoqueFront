import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
