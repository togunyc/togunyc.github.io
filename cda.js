(function() {

    var filename = 'https://tympanus.net/codrops/adpacks/cda.css?' + new Date().getTime();
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    let cdaSpots = ['ad1'];
    let cdaSpot = cdaSpots[Math.floor(Math.random() * cdaSpots.length)];

    switch (cdaSpot) {
        case "ad1":
            var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.313446068;dc_trk_aid=506499223;dc_trk_cid=157730382;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
            var cdaImgAlt = 'Mailchimp';
            var cdaText = "Grow sales with a smart marketing platform. Try Mailchimp today.";
            break;
        /*
            let cdaVariations = ['v1','v2','v3'];
            let cdaVariation = cdaVariations[Math.floor(Math.random() * cdaVariations.length)];
            
            switch (cdaVariation) {
                case "v1":
                    var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.299679615;dc_trk_aid=492786325;dc_trk_cid=148388558;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                    var cdaImgAlt = 'Mailchimp';
                    var cdaText = "Guide customers along the path to purchase with our award-winning platform. Starting at $14.99/mo.";
                    break;
                case "v2":
                    var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.299679618;dc_trk_aid=492786322;dc_trk_cid=148523184;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                    var cdaImgAlt = 'Mailchimp';
                    var cdaText = "Supercharge your marketing across design, automations, analytics, and more, using our marketing smarts.";
                    break;
                case "v3":
                    var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.299822224;dc_trk_aid=492786319;dc_trk_cid=148388561;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                    var cdaImgAlt = 'Mailchimp';
                    var cdaText = "Grow sales by using the smart tools in our all-in-one Marketing Platform. Try it for free.";
                    break;
                default:
                    var cdaLink = 'https://ad.doubleclick.net/ddm/trackclk/N1224323.3091281BUYSELLADS/B25600467.299822224;dc_trk_aid=492786319;dc_trk_cid=148388561;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=';
                    var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/mailchimp_demo.png';
                    var cdaImgAlt = 'Mailchimp';
                    var cdaText = "Grow sales by using the smart tools in our all-in-one Marketing Platform. Try it for free.";
                    break;
            }
            */
        case "ad2":
            var cdaLink = 'https://srv.buysellads.com/ads/long/x/T6PTYOZ3TTTTTTHK6HXN4TTTTTTVH7ZOK6TTTTTTB4OULYVTTTTTTESLPVSNKSJ7537HLRSWP36FP2QYVQCI4WZ727CT';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2021/10/Shortcut260x200.png';
            var cdaImgAlt = 'Shortcut';
            var cdaText = "Looking for an intuitive whiteboard style project management tool? Give Shortcut a try for free.";
            break;
        case "ad3":
            var cdaLink = 'https://srv.buysellads.com/ads/long/x/TCBFN4Z3TTTTTT43QYFN4TTTTTT4XOT5K6TTTTTT5DHTLYVTTTTTTALDGQVF5SB6Z3NWNMP5VJ7DKYPMKQ7UKKSECRPT';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/uploads/2021/08/MWB_demo.jpg';
            var cdaImgAlt = 'Malwarebytes';
            var cdaText = "Detect threats that other cybersecurity solutions miss with Malwarebytes.";
            break;
        default:
            var cdaLink = 'https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=17972_5_1_16';
            var cdaImg = 'https://tympanus.net/codrops/wp-content/banners/Divi_Carbon.jpg';
            var cdaImgAlt = 'Divi';
            var cdaText = "From our sponsor: Divi is more than just a WordPress theme, it's a completely new website building platform. Try it.";
    }

    var cda = document.createElement('div');
    cda.id = 'cdawrap';
    cda.style.display = 'none';
    cda.innerHTML = '<a href="' + cdaLink + '" class="cda-img" target="_blank" rel="nofollow noopener"><img src="' + cdaImg + '" alt="' + cdaImgAlt + '" border="0" height="100" width="130"></a><a href="' + cdaLink + '" class="cda-text" target="_blank" rel="noopener">' + cdaText + '</a><div class="cda-footer"><a class="cda-poweredby" href="https://tympanus.net/codrops/advertise/" target="_blank" rel="noopener">Become a sponsor</a><button class="cda-remove" id="cda-remove">Close</button></div>';
    document.getElementsByTagName('body')[0].appendChild(cda);

    setTimeout(function() {
        cda.style.display = 'block';
    }, 1000);

    document.getElementById('cda-remove').addEventListener('click', function(e) {
        cda.style.display = 'none';
        e.preventDefault();
    });

})();