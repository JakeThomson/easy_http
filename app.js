const http = new EasyHTTP;

// Create Data
const data = {
  name: "Jake Thomson",
  username: "jakeeeee",
  email: "jake@gmail.com"
};

// Get Users
http.get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Create Post
// http.post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete Post
// http.delete("https://jsonplaceholder.typicode.com/users/2")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));