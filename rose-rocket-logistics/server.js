const ENV = require("./environment");
const app = require("./application")(ENV);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});