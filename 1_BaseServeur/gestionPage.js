var gestionPage = {
    envoyerLesDonnes : function(reponse, data){
        reponse.writeHead(200,{"Content-Type" : data.contentType});
        reponse.write(data.pageHtml);
        reponse.end();
    },
    
    preparerLesDonnees: function(monObj){
        var indexDuPpoint = monObj.pathname.indexOf(".");
        var extension = monObj.pathname.substring(indexDuPpoint, monObj.pathname.length);
    
        var data = {
            contentType : "",
            encodage : "",
            dossier : "",
            fichier : monObj.pathname.substring(1, monObj.pathname.length),
        }
        switch(extension){
            case ".html" :
                data.contentType = "text/html";
                data.encodage = "UTF-8";
                data.dossier = "html/";
                break;
            case ".css" :
                data.contentType = "text/css";
                data.dossier = "css/";
                break;
            case ".js" :
                data.contentType = "application/javascript";
                data.dossier = "js_client/";
                break;
            case ".png" :
                data.contentType = "image/png";
                data.dossier = "assets/";
            case ".jpg" :
                data.contentType = "image/jpeg";
                data.dossier = "assets/";
            default : console.log("erreur")
        }
        return data;
    }
}

module.exports = gestionPage;