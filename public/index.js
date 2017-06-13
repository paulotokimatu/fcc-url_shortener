var baseUrl = window.location.protocol + "//" + window.location.host;
var inputUrl = document.querySelector(".input-url");
var spanResult = document.querySelector(".result");

// Ajax call
function getRequest (url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


inputUrl.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        spanResult.innerHTML = "";
        // Use API to create a new short link
        getRequest(baseUrl + "/create/" + inputUrl.value, function(data) {
            var supportText;
            if (data == "invalidUrl") {
                supportText = document.createElement("span");
                supportText.innerText = "Invalid URL!";
                supportText.className += "result--error";
                spanResult.appendChild(supportText);
            }
            else {
                data = JSON.parse(data);
            
                supportText = document.createElement("span");
                supportText.innerText = "Your shortened link is: ";
                
                var shortLink = document.createElement("a");
                shortLink.href = baseUrl + "/" + data.code;
                shortLink.innerText = baseUrl + "/" + data.code;
                    
                spanResult.appendChild(supportText);
                spanResult.appendChild(shortLink);
            }
            
        });
        inputUrl.value = "";
    }
})