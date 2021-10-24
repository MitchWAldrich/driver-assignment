import { useState } from 'react';

export default function EditMode(initial) {
  const [mode, setMode] = useState(initial);
  const [editId, setEditId] = useState(0);

  const transition = (newMode, id) => {
    setMode(newMode);
    setEditId(id);
  }

  return { mode, transition, editId };
}