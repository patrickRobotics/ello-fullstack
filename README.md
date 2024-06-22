## React GraphQL MDC simple UI

### Styling Guidelines
- Use the "Mulish" Google font
- You can use the following colors (You don't have to use all but you can pick and choose from here)
<img width="961" alt="330521027-15922f8f-a7c7-4033-8405-76988e95afb3" src="https://github.com/patrickRobotics/ello-fullstack/assets/4558053/53c2acac-9e12-4b68-9f3e-adfb24a411d7">

The view has the following features:-

1. A search bar that allows users to search for books by title.
2. A list of search results that displays the book title, author, and a button to add the book to the students reading list.
3. A reading list that displays all the books that the teacher has added.
4. A button to remove a book from the reading list.

### Requirements
- Use React as the frontend framework.
- Showcase the use of React hooks.
- Use [material-ui](https://mui.com/material-ui/) as the component library.
- Create components as you feel is best suited for your solution
<img width="1013" alt="330881877-bc3eb7f7-489f-4304-93f4-032bbbd38c58" src="https://github.com/patrickRobotics/ello-fullstack/assets/4558053/0719a6d5-c2ef-4a7a-b9c5-248af6421a30">


### Data
To get access to data you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This starts a simple Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```

