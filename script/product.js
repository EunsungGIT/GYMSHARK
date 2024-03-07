/* photo hide */
const hideBtn = document.querySelector('.product_photo > a')
const last_photo = document.querySelector('.last_photo')
const more_photo = document.querySelector('.more_photo')

let hide = true
last_photo.style.display = 'none'
more_photo.style.display = 'none'
hideBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    hide = !hide
    if(hide === false){
        last_photo.style.display = 'flex'
        more_photo.style.display = 'flex'
        hideBtn.innerHTML = 'HIDE IMAGES'
    }else {
        last_photo.style.display = 'none'
        more_photo.style.display = 'none'
        hideBtn.innerHTML = 'SEE MORE IMAGES'
    }
})

/* color change */
const color = document.querySelector('.color')
const color_select_a = document.querySelectorAll('.color_select a')
console.log(color)

color_select_a[0].addEventListener('mouseover',()=>{
    color.innerHTML = 'Black'
})
color_select_a[1].addEventListener('mouseover',()=>{
    color.innerHTML = 'Fog Green'
})
color_select_a[2].addEventListener('mouseover',()=>{
    color.innerHTML = 'Light Grey Marl'
})

/* recommend swiper */
var swiper = new Swiper('.recommend_swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation:{
        nextEl:'.product_next',
        prevEl:'.product_prev'
    },
    breakpoints:{
        768: {
            slidesPerView: 4.2,
        },
    },
});

/* recommend */
const product_icon = document.querySelectorAll('.product_image .icon a')
const product = document.querySelectorAll('.product_slide')
const product_img = document.querySelectorAll('.product_image > img')
const size = document.querySelectorAll('.recommend_swiper .size')
const size_a = document.querySelectorAll('.recommend_swiper .size a')

product.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        size[i].style.bottom = '0'
        product_img[i].src = './images/product_1_02.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        size[i].style.bottom = '-150px'
        product_img[i].src = './images/product_1_01.jpg'
    })
})
product_icon[0].addEventListener('click',()=>{
    cart_bg.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        cart_bg.style.opacity = '1'
    }, 10);
    setTimeout(()=>{
        cart_page.style.right = '0'
    }, 100);
})
for(let i of size_a){
    i.addEventListener('click',()=>{
        cart_bg.style.display = 'block'
        body_html.style.overflow = 'hidden'
        setTimeout(()=>{
            cart_bg.style.opacity = '1'
        }, 10);
        setTimeout(()=>{
            cart_page.style.right = '0'
        }, 100);
    })
}
cart_bg.addEventListener('click',()=>{
    cart_bg.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page.style.right = '-500px'
    setTimeout(()=>{
        cart_bg.style.display = 'none'
    }, 500);
})