import { Component, ErrorInfo } from "react";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  // @ts-expect-error
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // @ts-expect-error
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // send to sentry
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {this.props.fallback}{" "}
          <button onClick={() => this.setState({ hasError: false })}>
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
