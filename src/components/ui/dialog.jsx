import { useState, createContext, useContext } from "react";

// Create a context for dialog state
const DialogContext = createContext();

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children }) {
  const { onOpenChange } = useContext(DialogContext);

  // Wrap with onClick to open dialog
  return (
    <span onClick={() => onOpenChange?.(true)}>
      {children}
    </span>
  );
}

export function DialogContent({ children, className = "" }) {
  const { open, onOpenChange } = useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <div className={`relative bg-white rounded-xl shadow-xl max-w-lg w-full p-6 mx-auto ${className}`}>
        {/* Close button inside form */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => onOpenChange?.(false)}
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}


export function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
}

export function DialogDescription({ children }) {
  return <p className="text-gray-500 text-sm">{children}</p>;
}
