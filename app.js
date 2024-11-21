const mainHTML = document.getElementById('main')

// Templates
const dashboardTemplate = document.getElementById('DashboardTemplate').innerHTML
const loginTemplate = document.getElementById('LoginTemplate').innerHTML

// Variables
// let currentUser = "Jimothy"
let currentUser = null


// Screen rendering
function renderDashboard(){
    if(currentUser){
        mainHTML.innerHTML = dashboardTemplate
        reloadCSS()
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

renderDashboard()