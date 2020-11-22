function q() {
    var button_home = document.querySelector("#first");
    var button_resource_main = document.querySelector("#second");
    var button_resource = document.querySelector("#firstnews");
    var button_resource1 = document.querySelector("#secondnews");
    var button_about = document.querySelector("#third");
    var button_contacts = document.querySelector("#forth");

    button_home.addEventListener("click", function() {
      var link = document.querySelector("#first-button")
      link.setAttribute("href", "Main_page.html");
      return false;
    });
    button_resource.addEventListener("click", function() {
      var link = document.querySelector("#firstnews")
      link.setAttribute("href", "News.html");
      return false;
    });
    button_resource1.addEventListener("click", function() {
      var link1 = document.querySelector("#secondnews")
      link1.setAttribute("href", "News1.html");
      return false;
    });
    button_about.addEventListener("click", function() {
      var link = document.querySelector("#third-button")
      link.setAttribute("href", "About.html");
      return false;
    });
    button_contacts.addEventListener("click", function() {
      var link = document.querySelector("#forth-button")
      link.setAttribute("href", "Contacts.html");
      return false;
    });
}