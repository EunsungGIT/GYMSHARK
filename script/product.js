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

/* cart button */
const cartBtn = document.querySelector('#cartBtn')

cartBtn.addEventListener('click',()=>{
    cart_bg_active.style.display = 'block'
    body_html.style.overflow = 'hidden'
    setTimeout(()=>{
        cart_bg_active.style.opacity = '1'
    }, 10);
    setTimeout(()=>{
        cart_page_active.style.right = '0'
    }, 100);
})

/* color change */
const color = document.querySelector('.color')
const color_select_a = document.querySelectorAll('.color_select a')

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

/* return */
const returns_title = document.querySelector('.returns_title')
const returns_info = document.querySelector('.returns_info')
const returns_img = document.querySelector('.returns_title img')

returns_info.style.display = 'none'
returns_title.addEventListener('click',()=>{
    hide = !hide
    if(hide === false){
        returns_img.style.transform = 'rotate(0deg)'
        returns_info.style.display = 'none'
    }else{
        returns_info.style.display = 'block'
        returns_img.style.transform = 'rotate(180deg)'
    }
})

/* recommend */
const product_icon_cart = document.querySelectorAll('.product_image .icon .cart_icon')
const product_icon_wishlist = document.querySelectorAll('.product_image .icon .wishlist_icon')
const product_icon_wishlist_img = document.querySelectorAll('.product_image .icon .wishlist_icon img')
const product = document.querySelectorAll('.product_slide')
const product_001 = document.querySelectorAll('.product_001')
const product_002 = document.querySelectorAll('.product_002')
const product_003 = document.querySelectorAll('.product_003')
const product_img = document.querySelectorAll('.product_image > img')
const product_img_01 = document.querySelectorAll('.product_image_001 > img')
const product_img_02 = document.querySelectorAll('.product_image_002 > img')
const product_img_03 = document.querySelectorAll('.product_image_003 > img')
const product_info = document.querySelectorAll('.recommend_swiper .product_info')
const size = document.querySelectorAll('.recommend_swiper .size')
const size_a = document.querySelectorAll('.recommend_swiper .size a')

product.forEach((t,i)=>{
    product_img[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    product_info[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    t.addEventListener('mouseover',()=>{
        size[i].style.bottom = '0'
    })
    t.addEventListener('mouseleave',()=>{
        size[i].style.bottom = '-150px'
    })
})
product_001.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_01[i].src = './images/product_1_02.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_01[i].src = './images/product_1_01.jpg'
    })
})
product_002.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_02[i].src = './images/product_1_04.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_02[i].src = './images/product_1_03.jpg'
    })
})
product_003.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_03[i].src = './images/product_1_06.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_03[i].src = './images/product_1_05.jpg'
    })
})

for(let i of product_icon_cart){
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
product_icon_wishlist.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        product_icon_wishlist_img[i].src = './images/icon/icon_wishlist_active.png'
    })
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