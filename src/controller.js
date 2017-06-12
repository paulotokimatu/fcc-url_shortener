var Links = require("../models/url.js");
var IdCounter = require("../models/id-counter.js");
var rule = require("./code");

module.exports = function(app) {
    //Shortening a new url
    app.get(/^\/create\/(.+)/, (req, res) => {
        var url = req.params[0];
        //Get the current index of the links in DB
        IdCounter.find({ name: "counter" }, (err, counter) => {
          if(err) throw err;
          else {
            var totalInDb = counter[0].total;
            var encoded = rule.encode(totalInDb);
            Links.create({code: encoded, url: url}, (err, newLink) => {
                if(err) console.log(err);
                else {
                    IdCounter.update({ name: "counter", total: totalInDb+1}, (err, updatedLink) => {
                        if(err) console.log(err);
                        else res.send(newLink);
                    });
                }
            });
          }
        });
    });
    
    //Redirect to the long url
    app.get("/:urlEncoded", (req, res) => {
        Links.find({ code: req.params.urlEncoded }, (err, link) => {
            if (err) {
                res.send("No URL found!");
                console.log(err);
            }
            if (link.length > 0) {
                //res.send("The URL is: " + link[0].url);
                res.redirect(link[0].url)
            }
            //else res.send("Please check your URL!");
            else res.redirect("/");
        });
    });
}
