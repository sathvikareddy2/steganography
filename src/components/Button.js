import React from "react";

export default class Button extends React.Component {
  determineStyle() {
    let styleClass = "btn";
    
    if (this.props.secondary) {
      styleClass += " bg-indigo text-white"; 
    } else {
      styleClass += " bg-blue text-white";    
    }

    if (this.props.size) {
      if (this.props.size === "big") {
        styleClass += " btn-lg";
      } else if (this.props.size === "medium") {
        styleClass += " btn-md";
      } else if (this.props.size === "small") {
        styleClass += " btn-sm";
      }
    }

    return styleClass;
  }

  render() {
    const componentStyle = this.determineStyle();
    return (
      <div className={componentStyle} onClick={this.props.onClick}>
        {this.props.text}
      </div>
    );
  }
}
