import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return <p>Pas de pokemon à trouver</p>;
    }
    return this.props.children;
  }
}
