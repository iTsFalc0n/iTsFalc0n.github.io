function generateLinks() {
    let domain = document.querySelector("input").value;
    let dorks = [
        'site:' + domain + ' inurl:&',
        'site:' + domain + ' ext:php | ext:aspx | ext:asp | ext:jsp | ext:html | ext:htm',
        'site:' + domain + ' inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http',
        'site:' + domain + ' inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:&',
        'site:' + domain + ' inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:&',
        'site:' + domain + ' inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer',
        'site:' + domain + ' inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:&',
        'site:' + domain + ' inurl:(unsubscribe|register|feedback|signup|join|contact|profile|user|comment|api|developer|affiliate|upload|mobile|upgrade|password)',
        'site:' + domain + ' intitle:"Welcome to Nginx"'
    ];

    let resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = '';

    dorks.forEach(function (dork) {
        let link = 'https://www.google.com/search?q=' + encodeURIComponent(dork);

        let linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank';
        linkElement.textContent = dork;
        resultsDiv.appendChild(linkElement);

        resultsDiv.appendChild(document.createElement('br'));
    });
}