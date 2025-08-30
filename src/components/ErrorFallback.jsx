import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-8 bg-red-100 text-red-800 rounded-lg">
      <h2 className="text-xl font-bold">¡Oops! Algo salió mal 😓</h2>
      <p className="my-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
