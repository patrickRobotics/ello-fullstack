// src/Book.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Book = ({ book, addToReadingList }) => {
  return (
    <Card sx={{
        display: 'flex',
        marginBottom: 2,
        width: 700,
        overflow: 'hidden'
    }}>
      <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={book.coverPhotoURL}
          alt={`${book.title} cover`}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          by {book.author}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          Reading Level: {book.readingLevel}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'primary.yellow',
            color: 'primary.steelBlue',
            '&:hover': {
              backgroundColor: 'secondary.yellowDark',
            },
          }}
          onClick={() => addToReadingList(book)}
        >
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default Book;
