function checkAccess() {
    var accessLevel;
    if (loggedIn) {
        var message = "User " + user + " is logged in.";
        console.log(message);
        if (userRole === "admin") {
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else {
        var message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (var i = 0; i < 3; i++) {
    console.log("Attempt", i);
}

console.log("Access Level:", checkAccess());