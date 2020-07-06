const express = require('express');
const expressWs = require('express-ws');

const fs = require('fs');
const fsp = require('fs').promises;
const yaml = require('js-yaml');

let dataFile = `${__dirname}/../data/current.yaml`;

const Server = () => {
  const app = express();

  expressWs(app);

  let statListeners = [];

  app.ws('/stats', (ws, req) => {
    let connectionExists = (statListeners.indexOf(ws) >= 0);

    if(connectionExists) {
      return;
    }

    console.log('stat listener opened');
    statListeners.push(ws);

    ws.on('close', () => {
      console.log('stat listener closed');
      var index = statListeners.indexOf(ws);
      if (index !== -1) statListeners.splice(index, 1);
    });
  });

  app.ws('/admin', (ws, req) => {
    ws.on('message', (msg) => {
    console.log("broadcasting message to %s listeners", statListeners.length);
      statListeners.forEach(async (ws) => {
        try {
          const json = JSON.parse(msg);

          if(json.type === 'upsert') {
            const stats = await yaml.safeLoad((await fsp.readFile(dataFile)).toString());

            stats.deaths = json.deaths;

            await fsp.writeFile(dataFile, yaml.safeDump(stats).toString());
            ws.send(JSON.stringify(stats));
          }
        } catch(e) {
          console.error(e);
        }
      });
    });
  });

  return app;
};

module.exports = Server;

Server().listen(4000);
