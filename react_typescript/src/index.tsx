import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello} from "./components/Hello";

ReactDOM.render(
    <Hello compiler="Babel" framework="Angular" />,
    document.getElementById("example")
);