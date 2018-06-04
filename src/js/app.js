// Load instafeed

$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '6994573030',
        limit: 33,
        resolution: 'standard_resolution',
        accessToken: '6994573030.1677ed0.fc062e515c18465d998cf8afc6d8341a',
        sortBy: 'most-recent',
        template: '<div class="Grid-item"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();

});
