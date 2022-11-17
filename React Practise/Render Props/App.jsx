import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Fetch from "../Fetch";
import Renders from "../Renders";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      render={(count, Increment,value, fetchInput) => (
        <Renders count={count} Increment={Increment} />
      )}
    />

    <App
      render={(count, Increment,value, fetchInput) => (
        <Fetch value={value} fetchInput={fetchInput} />
      )}
    />
  </StrictMode>
);
