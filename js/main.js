let newLink;

$('.input-for-drop').bind('input', function() { 
    newLink = $(this).val();
    getFavIcon(newLink);
    // $('#loader').removeClass('hidden');

});

function getFavIcon(link){
    shortenLink = link.split("/")
    favIcon = shortenLink[0] + "//" + shortenLink[2] + "/favicon.ico";
    $('#favIcon').attr("src", favIcon);
}



