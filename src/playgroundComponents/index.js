import React from "react";
import PropTypes from "prop-types";
import Playground from "component-playground";

function pop(obj) {
  for (var key in obj) {
    // Uncomment below to fix prototype problem.
    // if (!Object.hasOwnProperty.call(obj, key)) continue;
    var result = obj[key];
    // If the property can't be deleted fail with an error.
    if (!delete obj[key]) {
      throw new Error();
    }
    return result;
  }
}

class PlaygroundContainer extends React.Component {
  render() {
    var d = new Date();

    var dateInfo = (
      <div className="updateInfo">
        <em>Last Updated:</em> {`${d.toUTCString()}`}
      </div>
    );

    return (
      <div id={this.props.id}>
        <h1>{this.props.title}</h1>
        {this.props.datePlacement === "top" ? dateInfo : null}
        {this.props.children}
        {this.props.datePlacement === "bottom" ? dateInfo : null}
      </div>
    );
  }
}

PlaygroundContainer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  datePlacement: PropTypes.string
};

class Swing extends React.Component {
  render() {
    var props = Object.assign(this.props, {});
    var id = props.id;
    var title = props.title;
    // delete props["id"];
    // delete props["title"];

    return (
      <div id={this.props.id}>
        <h2>{this.props.title}</h2>

        <Playground {...props} />
      </div>
    );
  }
}

Swing.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  codeText: PropTypes.string.isRequired,
  scope: PropTypes.object.isRequired,
  collapsableCode: PropTypes.bool,
  docClass: PropTypes.func,
  propDescriptionMap: PropTypes.object,
  theme: PropTypes.string,
  selectedLines: PropTypes.array,
  noRender: PropTypes.bool,
  es6Console: PropTypes.bool,
  context: PropTypes.object,
  initiallyExpanded: PropTypes.bool,
  previewComponent: PropTypes.node
};

export { PlaygroundContainer, Swing };
