
// Used to invite a member to a team. Only accessible to admins
function inviteMember(){
    let recipient = document.getElementById("recipientEmail").value.toLowerCase();

    if(recipient == ""){
        alert("Please input all information")
        return
    }

    if(!(recipient in DirtyDB.users)){
        // This means the user doesn't exist in the system. Is alerting the user this information a security risk?
        alert("That user doesn't exist");
        return
    }

    DirtyDB.users[recipient].invites.push(currentTeam)
}


// Used on the Create Team page
function createTeam(){
    let name = document.getElementById("teamName").value

    if(name in DirtyDB.teams){
        alert("Team name already in use");
        return
    }

    if(name == ""){
        alert("Please input all information")
        return
    }

    DirtyDB.teams[name] = {
        "name": name,
        "admins": [currentUser]
    }

    DirtyDB.users[currentUser].teams.push(name)

    renderDashboard()
    alert("Team Created Successfully");
}

// Used to create a new shift. Only avalible to admins
function createShift(){
    let startTime = document.getElementById("startingTime").value
    let endTime = document.getElementById("endingTime").value

    if(startTime == "" || endTime == "" ){
        alert("Please input all information")
        return
    }

    let newID = getRandomID() + 0
    while(newID in DirtyDB.teams){
        newID = getRandomID() + 0
    }

    DirtyDB.shifts[newID] = {
        "startTime": startTime,
        "endTime": endTime,
    }

    DirtyDB.teams[currentTeam].shifts.push(newID)

    renderTeam(currentTeam)
    alert("Shift Created Successfully");
    console.log(DirtyDB.shifts)
}


// Returns a random string of numbers of sufficent length to be used as an ID system for now
function getRandomID() {
    return Math.floor(Math.random() * 1000000)
}


// Used to edit the values of a team
function editTeam(){

}