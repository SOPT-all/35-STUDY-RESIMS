import React from "react";

export const Card = ({ children }) => (
  <div className="border border-gray-300 rounded-lg shadow p-4">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b border-gray-200 pb-2 mb-2">{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const CardContent = ({ children }) => <div>{children}</div>;