import { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import { Dialog } from "./features/Dailog";

export const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={() => setOpen(true)}>Open Form</button>
      <Dialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
