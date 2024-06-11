// src/App.js
import React, { useState, useEffect } from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import {
  TextField,
  Container,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
  Button,
  Pagination,
  Avatar,
  IconButton,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import client from './apolloClient';
import Book from './components/Book';
import styles from './App.module.css';  // Import the CSS module
import Hero from './components/Hero';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;


const LightButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.yellow,
    color: theme.palette.primary.steelBlue,
}));
const MainButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.steelBlue,
}));
const DarkButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.steelBlue,
    color: theme.palette.primary.white,
}));

const WarningButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.orangeRed,
  color: theme.palette.secondary.contrastText,
}))


const App = () => {
  const [search, setSearch] = useState('');
  const [readingList, setReadingList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const { loading, error, data } = useQuery(GET_BOOKS);

  useEffect(() => {
    if (data) {
      const filtered = data.books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBooks(filtered);
      setCurrentPage(1);
    }
  }, [data, search]);

  // Calculate the books to display on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const addToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const removeFromReadingList = (book) => {
    setReadingList((prevList) => prevList.filter(item => item.title !== book.title));
  };

  if (loading) {
    return (
      <Container className={styles.container}>
        <CircularProgress color="secondary"/>
      </Container>
    );
  }
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container className={styles.container}>
      <Hero search={search} setSearch={setSearch}  />
      <Grid container spacing={2}>

        <Grid item xs="auto">
          <List>
            {currentBooks.map((book, index) => (
              <ListItem key={index}>
                <Book book={book} addToReadingList={addToReadingList} />
              </ListItem>
            ))}
          </List>

          <Pagination
            count={Math.ceil(filteredBooks.length / booksPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'primary.steelBlue',
                '&.Mui-selected': {
                  backgroundColor: 'primary.yellow',
                  color: 'primary.contrastText',
                },
                '&:hover': {
                  backgroundColor: 'secondary.yellowDark',
                },
              },
            }}
          />
        </Grid>

        <Grid item xs>
          <h2>Reading List</h2>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>

              <List>
                {readingList.map((book, index) => (
                  <ListItem
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar src={book.coverPhotoURL} alt={`${book.title} cover`} sx={{ marginRight: 2 }} />
                    <ListItemText
                      primary={book.title}
                      secondary={`by ${book.author}`}
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeFromReadingList(book)}
                      sx={{
                        color: 'secondary.orangeRed',
                        '&:hover': {
                          backgroundColor: 'secondary.orangePastel',
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>

            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Container>
  );
};

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;
