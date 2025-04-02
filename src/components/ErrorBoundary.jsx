import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar una interfaz de reserva
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes loguear el error en un servicio de seguimiento de errores
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Algo salió mal. Estamos trabajando para solucionarlo.</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
