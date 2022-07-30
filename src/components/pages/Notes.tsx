import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';

import axios from 'axios';
import { Container, Grid } from '@mui/material';
import NoteCard from '../NoteCard';

const Notes = () => {
  const [notes, setNotes] = useState([] as any);

  useEffect(() => {
    axios
      .get('http://localhost:8000/notes')
      .then((res) => setNotes(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE',
    });

    const newNotes = notes.filter(
      (note: { id: number }) => note.id !== id
    );

    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(
          (note: {
            id: number;
            title: String;
            details: String;
            category: String;
          }) => (
            <div key={note.id}>
              <NoteCard
                id={note.id}
                title={note.title}
                details={note.details}
                category={note.category}
                handleDelete={handleDelete}
              />
            </div>
          )
        )}
      </Masonry>
    </Container>
  );
};

export default Notes;
