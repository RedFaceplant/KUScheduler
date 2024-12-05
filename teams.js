function createShift(){

}

function editTeam(){

}


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