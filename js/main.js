$(document).ready(function() {

    // get username from input

    $('form').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        requestInfo(username);
    });

    // handle errors

    function handleError(errorObject, textStatus, error) {
        console.log(errorObject, textStatus, error);
    }

    // construct org block


    function orgDetails(orgObject) {

        // // build HTML

        function buildElements(avatar, orgName, divName) {

            var orgContainer = $('<div>').attr('class', 'org-detail ' + divName).appendTo('.container');
            var icon = $('<img>').attr('src', avatar).appendTo('.' + divName);
            var org = $('<h2>').html(orgName).appendTo('.' + divName);

            $(orgContainer).appendTo('.container');

        }

        // loop over array to get all orgs

        for (var index = 0; index < orgObject.length; index++) {

            var newOrg = orgObject[index];

            // get avatar and org name

            this.info = {
                avatar: newOrg.avatar_url,
                orgName: newOrg.login,
                divName: newOrg.login
            };

            buildElements(this.info.avatar, this.info.orgName, this.info.orgName);

        }
    }

    // async request to github

    function requestInfo(username) {

        $.ajax({
            "async": true,
            "crossDomain": true,
            "type": "GET",
            "url": "https://api.github.com/users/" + username + "/orgs",
            "success": orgDetails,
            "error": handleError

        });
    }

});
