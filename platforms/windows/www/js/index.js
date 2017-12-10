$(document).ready(function() {
    // jQuery is properly loaded at this point
    // so proceed to bind the Cordova's deviceready event
    //app.readAidreMemoire();
    $(document).bind('deviceready', app.onDeviceReady);
});

var app = {
    posts_url: "http://www.unocha.org/aide_memoire/aide_memoire_all&callback=?",

    onDeviceReady: function() {
        console.log('Device is ready');
        setTimeout(function() {
            window.location.href = "#home"
        }, 3000);
        console.log(StatusBar);
        StatusBar.show();
        StatusBar.overlaysWebView(false);
        StatusBar.styleLightContent();
        StatusBar.backgroundColorByHexString("#0472ca");
        var download = document.getElementById("download");
        var url = 'res/aide_memoire.pdf';



        app.readAidreMemoire();
    },

    readAidreMemoire: function() {
        console.log('Reading Aide Memoire');
        $.ajax({
            type: "GET",
            dataType: "json",
            url: app.posts_url,
            success: app.onSuccess,
            error: app.onError
        });

        console.log('Reading aide memoire asynchrounously');
    },

    onSuccess: function(data) {
        var items = [];
        var sutheme_page = '';
        var body_page = '';
        theme_list = '';
        var dataset = new Array();
        var grid = {};
        for (i = 0; i < data.length; i++) {
            var theme_issue = data[i].field_theme_issue;
            var theme = theme_issue.substr(0, theme_issue.indexOf('\u00bb') - 1).replace('- ', '');
            var subtheme = theme_issue.substr(theme_issue.indexOf('\u00bb') + 1);
            var body = data[i].body;
            //console.log('Original body' + body);
            var l = body.search("See also");
            var see = body.substr(l, body.indexOf('</td>'));
            //console.log(see);
            //alert('test' + body.substring(body.search("See also"), body.indexOf('<')));
            if (theme in grid == false) {
                grid[theme] = {};
                grid[theme][subtheme] = subtheme + body;
                //grid[theme][body] = body;
            } else {
                grid[theme][subtheme] = subtheme + body;
                //grid[theme][body] = body;
            }
        }
        var subtheme_pager = 0;
        for (key in grid) {
            var subtheme_list = '';

            subtheme_pager++;

            theme_list = theme_list + '<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="' + '#sub-page-' + subtheme_pager + '"><p>' + key + '</p></a></li>';
            var body_pager = 0;
            for (subkey in grid[key]) {
                body_pager++;
                var body_list = '';
                var ll = (grid[key][subkey]).search("<table>");
                subtheme_list = subtheme_list + '<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r sub" href="#body-' + subtheme_pager + '">' + (grid[key][subkey]).substring(0, ll + 5) + '</a></li>';
                body_list = body_list + "<p>" + (grid[key][subkey]).substring(ll, (grid[key][subkey]).length) + "</p>";
                //body_page = body_page + '<div id="body-' + subtheme_pager + '" data-role="page"><header data-role="header"><a href="#main-page">Sub Theme</a><h1>' + key + '</h1></header><article>' + body_list + '</article><footer data-role="footer" data-position="fixed"><nav data-role="navbar"><ul><li><a href="" data-icon="home">Home</a></li><li><a href="" data-icon="grid">Download</a></li><li><a href="" data-icon="info">Info</a></li></ul></nav></footer></div>';
            }

            //console.log(subtheme_list);
            // var ll = subtheme_list.search("</li>");
            //console.log(ll);
            // console.log(subtheme_list.substring(0, ll + 5));
            // var sub = subtheme_list.substring(0, ll + 5);
            // var body_text = subtheme_list.substring(ll + 5, subtheme_list.length);
            //console.log(subtheme_list.substring(ll + 5, subtheme_list.length));
            sutheme_page = sutheme_page + '<div id="sub-page-' + subtheme_pager + '" data-role="page"><div data-role="header" data-position="fixed" class="wow fadeIn"> <h1 class="wow fadeIn" data-wow-delay="0.4s"><i class="zmdi zmdi-arrow-back"></i> Back &nbsp;&nbsp;&nbsp;' + key + '</h1></div><div class="wow fadeIn ui-sub-header" data-position="fixed" class="wow fadeIn"><h1 class="wow ui-title fadeIn" data-wow-delay="0.4s"><i class="zmdi zmdi-book"></i> Sub Theme</h1></div><article><ul data-role="listview" data-filter="true" class="ui-listview" data-icon="false" id="subtheme-list">' + subtheme_list + '</ul></article><div data-role="footer" id="bottomsheetblock" class="ui-bottom-sheet" data-animate="false" data-position="fixed"><div class="row around-xs"><div class="col-xs-auto"><a href="#home" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-home zmd-2x"></i><strong>Theme</strong></a></div><div class="col-xs-auto"><a href="#download" id="download" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-smartphone-download zmd-2x"></i><strong>Download</strong></a></div><div class="col-xs-auto"><a href="#info" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-info zmd-2x"></i><strong>Info</strong></a></div></div></div></div>';
            body_page = body_page + '<div id="body-' + subtheme_pager + '" data-role="page"> <div data-role="header" data-position="fixed" class="wow fadeIn"><a href="#home"><i class="zmdi zmdi-arrow-back"></i></a><h1>' + key + '</h1></div><article><ul data-role="listview" data-filter="true" id="body-list-' + subtheme_pager + '">' + body_list + '</ul></article><div data-role="footer" id="bottomsheetblock" class="ui-bottom-sheet" data-animate="false" data-position="fixed"><div class="row around-xs"><div class="col-xs-auto"><a href="#home" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-home zmd-2x"></i><strong>Home</strong></a></div><div class="col-xs-auto"><a href="#download" id="download" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-smartphone-download zmd-2x"></i><strong>Download</strong></a></div><div class="col-xs-auto"><a href="#info" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="zmdi zmdi-info zmd-2x"></i><strong>Info</strong></a></div></div></div></div>';
        }
        $('#container #theme-list').html(theme_list);
        $('#container').append(sutheme_page);
        $('#container').append(body_page);

        $("#theme-list").listview("refresh");
        //$("#subtheme-list" + sutheme_page).listview("refresh");
        $("#body-list" + body_page).listview("refresh");
        //	$('#aide memoire').html(items.join('<br/>'));
        console.log('Exiting onSuccess');
    },

    onError: function(data, textStatus, errorThrown) {
        console.log('Data: ' + data);
        console.log('Status: ' + textStatus);
        console.log('Error: ' + errorThrown);
        $("#theme-list").html('Error while loading aide memoire');
        console.log('Exiting onError');
    }
};