// const profile = document.querySelector('#profile')

// User bubble show/hide system:
// profile.addEventListener('click', () => {
//     profileMenu.classList.toggle('hide')
// })

// function showProfile(){
//     const profileMenu = document.querySelector('#profileMenu')
//     console.log(profileMenu.classList.toggle('hide'))
// }
// document.addEventListener('click', e => {
//     const profileMenu = document.querySelector('#profileMenu')
//     if( !profileMenu.contains(e.target) && e.target !== profile){
//         profileMenu.classList.add('hide')
//     }
// })

function logOut(){
    currentUser = null
    renderLogin()
}