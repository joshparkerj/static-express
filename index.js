const express = require('express');
const app = express();

app.use(express.static(process.argv[2]));

app.listen(process.argv[3], () => {
  console.log(`Server is listening on port ${process.argv[3]}!`);
});
