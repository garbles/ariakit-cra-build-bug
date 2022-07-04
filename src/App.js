import * as React from "react";
import { Button } from "ariakit";

const useId = React["use" + "Id"] ?? (() => "1");

function App() {
  const id = useId();

  return <Button>Hello world</Button>;
}

export default App;
