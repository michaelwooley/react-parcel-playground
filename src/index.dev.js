import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";

import Button from "./components/Button.js";
import DebugInfo from "./components/DebugInfo.js";

import { componentExample, contextExample, es6Example } from "./examples.js";

import "./styles/codemirror.scss";
import "./styles/playground.scss";
import "./styles/syntax.scss";

const Index = () => (
  <div className="component-documentation">
    <h2>Default</h2>

    <Playground
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
    />

    <h2>Collapsable Code</h2>

    <Playground
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      collapsableCode
    />

    <h2>Collapsable Code (Expanded by Default)</h2>

    <Playground
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      collapsableCode
      initiallyExpanded
    />

    <h2>Code Selection Highlighting</h2>

    <Playground
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      selectedLines={[2, 3, 4, 9]}
    />

    <h2>Prop Descriptions</h2>

    <Playground
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      propDescriptionMap={{
        buttonStyle: "style object for inline styles"
      }}
      docClass={Button}
      collapsableCode
    />

    <h2>With Context</h2>

    <Playground
      context={{ environment: "staging" }}
      codeText={contextExample}
      scope={{ React: React, DebugInfo: DebugInfo }}
    />

    <h2>ES6 Console</h2>

    <Playground
      codeText={es6Example}
      es6Console
      scope={{ React: React, Button: Button }}
    />
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
