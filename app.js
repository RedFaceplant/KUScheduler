const mainHTML = document.getElementById('main')

// Templates
const dashboardTemplate = document.getElementById('DashboardTemplate').innerHTML
const loginTemplate = document.getElementById('LoginTemplate').innerHTML
const teamTemplate = document.getElementById('TeamTemplate').innerHTML

// Variables

// currentUser should be the EMAIL of the account
let currentUser = "janedoe@gmail.com"
// let currentUser = null


renderDashboard()

// Screen rendering
function renderDashboard(){
    if(currentUser){
        // Init Dashboard
        mainHTML.innerHTML = dashboardTemplate
        reloadCSS()

        const teamList = document.getElementById('teamList')
        teamList.innerHTML = ""

        for(teami in DirtyDB.users[currentUser].teams){
            const team = DirtyDB.users[currentUser].teams[teami]
            // console.log(team)
            teamList.innerHTML += `<li><a href="#" onclick=" renderTeam('${team}');">${team}</a></li>`
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
    // console.log(team)
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

}