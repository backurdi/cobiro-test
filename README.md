# Cobiro frontend test

## Start the project

```
// Fork the repo

// Clone the project
https://github.com/backurdi/cobiro-test.git

// Change directory into project directory
cd frontend-test

// Install the project
npm i

// Run the application
npm start

// Run the mock server
npm run start:server
```

## Task done

Here is a list of the elements i have finished;

- Use html and scss to style the layout of the page and a non-dynamic sidebar (Done)
- Get the list of items from the mock server at `http://localhost:3000/items` show these items on the page(Done)
- Make the items searchable by title(Done)
- Indent the item based on the parent_id's in the list so it creates a tree stucture see design file where we indent based on where they are in the tree stucture(Done)
- Write tests (Not Done)
- Make a sub page for the items so when you click the button you route to the sub page (Done)
  <br />(Note you can get single item by calling `http://localhost:3000/items/:id`)
- Make the layout responsive(Done)
