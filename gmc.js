
          var request = require('request');

    module.exports = {
        foo:async function (filename ,qtext,subject,title, callback) {
           
          var options = {
            'method': 'POST',
            'url': 'http://localhost:3000/post',
            'headers': {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "qtext": qtext,
              "subject": subject,
              "title": title,
              "filename": filename
            })
          
          };
          request(options, function (error, response) {
            if (error) {
              console.log(error);
              callback ({
                php:[
                    {
                      "name": "PHPSESSID",
                      "value": 'eqityqtqtyqtiuqytioutqytui',
                      "domain": ".chegg.com",
                      "path": "/",
                    }
                  ] , imgsrc :  'err',url:'err'
            })
            }else{
                          console.log(response.body);
                          callback (JSON.parse(response.body))
            }
          });
          

         
        },
      };
 
    async function name2(filename , callback ) {
         
       
       
        }
    
    
    
    