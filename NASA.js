function main() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        //console.log(this.readyState);
        if (this.readyState == 4) {
            if(this.status === 200)
            {
                let xml = this.responseText;
                xmlDoc = $.parseXML(xml);
                $xml = $(xmlDoc);

                //console.log($xml.text());

                //responseHTML.innerText = $xml.find("channel > title").text();
                // $(".root").append($xml.find("channel > title").text());
                // $(".root").append($xml.find("item > title").text());


                // RSS Title
                $rssTitle = $xml.find( "channel > title" ).text();
                console.log($rssTitle);


                $xml.find("item").each(function() {
                    //Do something with item here...
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            link: $this.find("link").text(),
                            description: $this.find("description").text()
                        };
                    // $("div").append("<h3>"+item.title+"</h3>").append("<p>"+item.description+"</p>");
                    var link = item.link;
                    $("div").append("<h3>"+item.title+"</h3>"+"<p>"+item.description+"</p>").append("<a href='"+link+"'>"+link+"</a>");


                });

            }
            else
            {
                alert("ERROR RETRIEVING FILE! Status: " + this.status);
            }

        }
    };

    // To get a simple text file
    //xhttp.open("GET", "ajax_info1.txt", true);

    // To prevent caching your page by adding a random number at the end
    //xhttp.open("GET", "ajax_info.txt?nocache="+Math.random(), true);

    // To prevent caching. More official way to prevent caching
    xhttp.open("GET", "breaking_news.rss", true);
    xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    xhttp.setRequestHeader("Pragma", "no-cache"); // HTTP 1.0.
    xhttp.setRequestHeader("Expires", "0"); // Proxies.
    xhttp.send();

}

main();