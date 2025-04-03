const http = require('node:http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if(req.url === "/"){
    return res.end(`
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      h2 {
        text-align: center;
      }
    </style>
    <h2>Replace <span style="font-style: italic;">{jsonname}</span> in <a href="http://localhost:${server.address().port}/info">http://localhost:${server.address().port}/<span style="font-style: italic;">{jsonname}</span></a> with the JSON file name to fetch the data.</h2>
  `)
  } else {
    fs.readFile('./JSON'+req.url.toString()+'.json', "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 404
        return res.end(`
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
          }
          h2 {
            text-align: center;
          }
        </style>
        <h2>404 Not Found</h2>
      `);
      } else {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        return res.end(data)
      }
    }) 
  }
})

server.listen(0, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})