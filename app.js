const profile = document.querySelector('#profile')
const profileMenu = document.querySelector('#profileMenu')

profile.addEventListener('click', () => {
    profileMenu.classList.toggle('hide')
})
document.addEventListener('click', e => {
    if( !profileMenu.contains(e.target) && e.target !== profile){
        profileMenu.classList.add('hide')
    }
})