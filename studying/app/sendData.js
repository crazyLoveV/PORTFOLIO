

module.exports =  async function sendData(object) {

    const data = new Promise(function (resolve, reject) {
   
      const options = {
        "method": "POST",
        "hostname": "localhost:4000",
        "port": null,
        "path": "/getData",
        "headers": {
            "Content-Type": "application/json",
        },
        "data": object
        };
  
        const req = https.request(options, function(res) {
          // @ts-ignore
          if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
            return reject(new Error('statusCode=' + res.statusCode));
          }
          // cumulate data
         var body = [];
          res.on('data', function (chunk) {
            body.push(chunk);
          });
          // resolve on end
          res.on('end', function () {
            const body1 = Buffer.concat(body)
            try {
              body = JSON.parse(body1.toString('utf8'));
            } catch (e) {
              resolve(body);
              return
            }
            resolve(body);
            return
          });
        });
      req.on('error', function (err) {
        reject(err);
      });
      req.end();
    });

    console.log( data );

}
