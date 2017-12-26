let linksArray = [];


$('.input-for-drop').bind('input', function () {

    let singleLink = {
        link: '',
        favIcon: '',
        title: 'Jeden link',
    };

    singleLink.link = $(this).val();
    shortenLink = singleLink.link.split("/")
    singleLink.favIcon = shortenLink[0] + "//" + shortenLink[2] + "/favicon.ico";
    longTitle = shortenLink[2];
    shortTitle = longTitle.split('.');

    if(shortTitle[0] === 'www'){
        singleLink.title = shortTitle[1].charAt(0).toUpperCase() + shortTitle[1].slice(1);
    }else {
        singleLink.title = shortTitle[0].charAt(0).toUpperCase() + shortTitle[0].slice(1);
    }

    linksArray.unshift(singleLink);

    clearInput();
    getFavIcon(singleLink.favIcon);
    createList();
});
function createList() {
    $('.links-list').html('');
    linksArray.forEach(link => {
        $('.links-list').append(`
            <div class="single-link-holder">
            <img src="${link.favIcon}" class="favIconSrc">
            <p>${link.title}</p>
           
            </div>
        `);
    })
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clearInput() {
    setTimeout(() => {
        document.getElementsByClassName('input-for-drop')[0].value = '';
    }, 1000);
}

function getFavIcon(favIcon){
    $('#favIcon').attr("src", favIcon);
    $('.info-holder').append(`
        <p class="added-text">Added successfuly</p>
    `)
    $('.info-holder').addClass("animated fadeIn whiteBG");
    setTimeout(function() {
        $('.info-holder').removeClass("fadeIn");
        $('.info-holder').addClass("fadeOut");     
        setTimeout(() => {
            $('.added-text').html('');
            $('#favIcon').removeAttr("src");    
            $('.info-holder').removeClass("animated fadeOut whiteBG");
        }, 600)   
    }, 1400);  
    
}