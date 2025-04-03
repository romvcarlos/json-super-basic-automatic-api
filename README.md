## JSON Super Basic Automatic API

A lightweight tool for serving JSON files as API endpoints. Simply add your JSON files, start the server, and access the data via HTTP requests.

### Prerequisites
- **Node.js** installed on your system.
- A terminal or command prompt to run the server.


### Usage

##### 1. Add the JSON files to the `./JSON` folder:

```
 📁 JSON
    📄 info.json
    📄 data.json
```

##### 2. Start the API server by running:

```bash
 node api.js
```
##### 3. Access the API endpoint at:
```
http://localhost:{port}
```
Note: The `{port}` will be automatically assigned. Check your terminal to see which port is in use.

### Example
Fetch data from the `info.json`  file:
```bash
 curl http://localhost:{port}/info
```
Expected response:
```json
{
  "name": "json-super-basic-automatic-api",
  "version": "1.0.0",
  "description": "Super basic automatic API with JSON files"
}
```