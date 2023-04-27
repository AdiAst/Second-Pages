$(document).ready(function() {
  // click event listeners on navbar links
$("#profile-link").click(function() {
    $("#content").load("src/components/profile.html");
});

$("#projects-link").click(function() {
    $("#content").load("src/components/projects.html");
});
});