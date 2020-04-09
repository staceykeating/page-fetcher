const request = require('request');
const fs = require('fs');

const makeRequest = (serverAddress, localPath) => {
  request(serverAddress, (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    };
    fs.writeFile('./index.html', body, (error) => {
      fs.access('./index.html', (error) => {
        if (error) console.log(error);
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
      });
    });
  });
}

const fetcher = () => {
const input = process.argv.slice(2);
const [server, path] = [input[0], input[1]]
makeRequest(server, path);
};

fetcher();