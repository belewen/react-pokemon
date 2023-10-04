import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    const { ErrorDisplay } = this.props;
    if (this.state.error) {
      // return <ErrorDisplay error={this.state.error}></ErrorDisplay>;
      return <ErrorDisplay error={this.state.error}></ErrorDisplay>;
    }
    return this.props.children;
  }
}
