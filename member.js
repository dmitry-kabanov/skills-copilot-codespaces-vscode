function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMember2 = document.getElementById("skillsMember2");
    if (skillsMember.style.display === "none") {
        skillsMember.style.display = "block";
        skillsMember2.style.display = "block";
        skills.style.height = "auto";
    } else {
        skillsMember.style.display = "none";
        skillsMember2.style.display = "none";
        skills.style.height = "auto";
    }
}