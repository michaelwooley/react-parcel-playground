import React from "react";
import ReactDOM from "react-dom";

import { PlaygroundContainer, Swing } from "./playgroundComponents";

import Button from "./components/Button.js";
import DebugInfo from "./components/DebugInfo.js";

import { componentExample, contextExample, es6Example } from "./examples.js";

import "./styles/codemirror.scss";
import "./styles/playground.scss";
import "./styles/syntax.scss";

const Index = () => (
  <PlaygroundContainer
    id="example"
    title="An Example Library"
    datePlacement="top"
  >
    <Swing
      title="Default"
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
    />

    <Swing
      title="Collapsable"
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      collapsableCode
    />

    <Swing
      title="Collapsable Code (Expanded by Default)"
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      collapsableCode
      initiallyExpanded
    />

    <Swing
      title="Code Selection Highlighting"
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      selectedLines={[2, 3, 4, 9]}
    />

    <Swing
      title="Prop Descriptions"
      codeText={componentExample}
      scope={{ React: React, Button: Button }}
      propDescriptionMap={{
        buttonStyle: "style object for inline styles"
      }}
      docClass={Button}
      collapsableCode
    />

    <Swing
      title="With Context"
      context={{ environment: "staging" }}
      codeText={contextExample}
      scope={{ React: React, DebugInfo: DebugInfo }}
    />

    <Swing
      title="ES6 Console"
      codeText={es6Example}
      es6Console
      scope={{ React: React, Button: Button }}
    />
  </PlaygroundContainer>
);

ReactDOM.render(<Index />, document.getElementById("root"));
