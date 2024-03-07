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
product_icon[0].addEventListener('click',(e)=>{
    e.preventDefault()
    cart_bg_active.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        cart_bg_active.style.opacity = '1'
    }, 10);
    setTimeout(()=>{
        cart_page_active.style.right = '0'
    }, 100);
})
for(let i of size_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
        cart_bg_active.style.display = 'block'
        body_html.style.overflow = 'hidden'
        setTimeout(()=>{
            cart_bg_active.style.opacity = '1'
        }, 10);
        setTimeout(()=>{
            cart_page_active.style.right = '0'
        }, 100);
    })
}
cart_bg_active.addEventListener('click',()=>{
    cart_bg_active.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page_active.style.right = '-500px'
    setTimeout(()=>{
        cart_bg_active.style.display = 'none'
    }, 500);
})
