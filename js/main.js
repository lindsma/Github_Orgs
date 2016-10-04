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

    // get avatar and org name

    function orgDetails(orgObject) {

      var newOrg = orgObject[0];

        console.log(newOrg);

        this.info = {
            avatar: newOrg.avatar_url,
            orgName: newOrg.login,
        };

        console.log(this.info.orgName);

    }

    // request info from github

    function requestInfo(username) {

      var token = "9936450c6f508a15de5b6741d6bc7cee233a9974";

      $.ajax({
            "async": true,
            "crossDomain": true,
            "type": "GET",
            "url": "https://api.github.com/users/" + username + "/orgs?access_token=" + token,
            "success": orgDetails,
            "error": handleError

    });
  }


    // org container


    // org name





    // org avatar



});
