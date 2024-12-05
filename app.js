const mainHTML = document.getElementById('main')

// Templates
const dashboardTemplate = document.getElementById('DashboardTemplate').innerHTML
const loginTemplate = document.getElementById('LoginTemplate').innerHTML
const teamTemplate = document.getElementById('TeamTemplate').innerHTML
const createTeamTemplate = document.getElementById('CreateTeamTemplate').innerHTML
const inviteMemberTemplate = document.getElementById('InviteMemberTemplate').innerHTML

// Variables

// currentUser should be the EMAIL of the account
// let currentUser = "thepyro@gmail.com"
let currentUser = null


let currentTeam = null

renderDashboard()

// Screen rendering
function renderDashboard(){
    currentTeam = null
    if(currentUser){
        // Init Dashboard
        mainHTML.innerHTML = dashboardTemplate
        reloadCSS()

        // Render team list
        const teamList = document.getElementById('teamList')
        teamList.innerHTML = ""
        for(teami in DirtyDB.users[currentUser].teams){
            const team = DirtyDB.users[currentUser].teams[teami]
            teamList.innerHTML += `<li><a href="#" onclick=" renderTeam('${team}');">${team}</a></li>`
        }

        // Render invite list
        const inviteList = document.getElementById('inviteList')
        inviteList.innerHTML = "<li>You have no invites!</li>"
        if(DirtyDB.users[currentUser].invites.length > 0){
            inviteList.innerHTML = ""
            for(invitei in DirtyDB.users[currentUser].invites){
                const invite = DirtyDB.users[currentUser].invites[invitei]
                inviteList.innerHTML += `<li><a href="#" onclick=" acceptInvite('${invite}'); ">You were invited to '${invite}'</a></li>`
            }
        }

        return
    }

    renderLogin()
}

function renderLogin(){
    mainHTML.innerHTML = loginTemplate
    submitMode = "SignUp"
    reloadCSS()
}

function reloadCSS(){
    let links = document.getElementsByTagName('link');
      for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
        let href = links[i].getAttribute('href').split('?')[0];
              let newHref = href + '?version=' 
                           + new Date().getMilliseconds();
              console.log(newHref)
              links[i].setAttribute('href', newHref);
          }
      }
}

function renderTeam(team){
    currentTeam = team
    if(team in DirtyDB.teams){
        // Init Team Page
        mainHTML.innerHTML = teamTemplate
        reloadCSS()

        const adminField = document.getElementById('adminField')

        console.log(currentUser)
        console.log(DirtyDB.teams[team].admins)
        console.log((DirtyDB.teams[team].admins.includes(currentUser)))

        if(!(DirtyDB.teams[team].admins.includes(currentUser))){
            adminField.innerHTML = ""
        }


        const teamHeader = document.getElementById('teamName')
        teamHeader.innerHTML = `${team}`

        return
    }
    alert(`Team '${team}' not found`);
     
}

function renderCreateTeam(){
    mainHTML.innerHTML = createTeamTemplate
    reloadCSS()
}

function renderInviteMember(){
    mainHTML.innerHTML = inviteMemberTemplate
    reloadCSS()
}

function acceptInvite(teamName){
    let TheUser = DirtyDB.users[currentUser]
    TheUser.invites = TheUser.invites.filter(function(item) {
        return item !== teamName
    })
    TheUser.teams.push(teamName)

    renderDashboard()
}