
function dashboardInit(){
const Profile = document.querySelector('#Profile')
const profileMenu = document.querySelector('#profileMenu')
    Profile.addEventListener('click', () => {
        profileMenu.classList.toggle('hide')
    })
    document.addEventListener('click', e => {
        if( !profileMenu.contains(e.target) && e.target !== Profile){
            profileMenu.classList.add('hide')
        }
    })
}