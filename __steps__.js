// 1. create a post api on server site
// 2. client side send data via post
// 3. Set fetch method inside the fetch options second parameter
// 4. options will have three things : 
// method: 'POST'
// headers: {
//     'content-type': 'application/json'
// }, 
// body: 'JSON.stringify(user)' //don't forget to send data as JSON.stringify
// 5. on the server site don't forget to use app.use(express.json()) middleware.