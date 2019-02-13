var script_url = "https://script.google.com/macros/s/AKfycbxLLA4KRUZa4TlYsaGCuxB4WtXnPy5sRWZMMqfI9Z--X_F6C1Dc/exec";
function insert_value() {
    var email = $("#email").val();
    var url = script_url + "?callback=ctrlq&email=" + email + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}
function ctrlq(e) {
  alert("You're on the list! Your private beta code will be delivered to the email provided when it's released!");
}
    
(function () {
  const doc = document.documentElement
}())
