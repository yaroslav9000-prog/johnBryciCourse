import React from "react";

export const Footer = () => {
  const today = new Date();
  return <footer className="Footer">
    <p>Copyright &copy;{today.toLocaleDateString()}</p>
  </footer>;
};
