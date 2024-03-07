/* login / signup */
const select_ball = document.querySelector('.select_ball')
const select_a = document.querySelectorAll('.select_bg a')
const loginFrm = document.querySelector('#loginFrm')
const joinFrm = document.querySelector('#joinFrm')

loginFrm.style.display = 'block'
joinFrm.style.display = 'none'
select_a[0].addEventListener('click',()=>{
    loginFrm.style.display = 'block'
    joinFrm.style.display = 'none'
    select_a[0].style.color = '#000'
    select_a[1].style.color = '#6e6e6e'
    select_ball.style.transform = 'translateX(0)'
})
select_a[1].addEventListener('click',()=>{
    loginFrm.style.display = 'none'
    joinFrm.style.display = 'block'
    select_a[0].style.color = '#6e6e6e'
    select_a[1].style.color = '#000'
    select_ball.style.transform = 'translateX(115px)'
})