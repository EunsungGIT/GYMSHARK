/* 모바일 필터 */
const layout_ball = document.querySelector('.layout_ball')
const filter_m_a = document.querySelectorAll('.filter_m a')
const filter_m_a_img = document.querySelectorAll('.filter_m a img')

filter_m_a[0].addEventListener('click',(e)=>{
    e.preventDefault()
    layout_ball.style.left = '5px'
    filter_m_a_img[0].src = './images/category/more_active.png'
    filter_m_a_img[1].src = './images/category/less.png'
    for(let i of product){
        i.style.width = 'calc(100% / 2 - 10px)'
    }
})
filter_m_a[1].addEventListener('click',(e)=>{
    e.preventDefault()
    layout_ball.style.left = 'auto'
    layout_ball.style.right = '5px'
    filter_m_a_img[0].src = './images/category/more.png'
    filter_m_a_img[1].src = './images/category/less_active.png'
    for(let i of product){
        i.style.width = 'calc(100% - 10px)'
    }
})

/* 필터 */
const filter_a = document.querySelectorAll('.filter a')
const sort_by = document.querySelector('.sort_by > a')
const select_sort = document.querySelector('.select_sort')
const product_type = document.querySelectorAll('.product_type > a')
const size_f = document.querySelector('.size > a')
const select_size = document.querySelector('.select_size')
const features = document.querySelectorAll('.features > a')
const fit = document.querySelector('.fit > a')
const select_fit = document.querySelector('.select_fit')
const collection = document.querySelector('.collection > a')
const select_collection = document.querySelector('.select_collection')
const color = document.querySelector('.color > a')
const select_color = document.querySelector('.select_color')
const pattern = document.querySelector('.pattern > a')
const select_pattern = document.querySelector('.select_pattern')
const discount = document.querySelector('.discount > a')
const select_discount = document.querySelector('.select_discount')
const price = document.querySelector('.price > a')
const select_price = document.querySelector('.select_price')

for(let i of filter_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}

let open_m = true

select_sort.style.display = 'none'
sort_by.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        sort_by.style.border = 'none'
        select_sort.style.display = 'flex'
    }else{
        sort_by.style.borderBottom = '1px solid #e7e7e7'
        select_sort.style.display = 'none'
    }
})
product_type[1].style.display = 'none'
product_type[0].addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        product_type[0].style.border = 'none'
        product_type[1].style.display = 'flex'
    }else{
        product_type[0].style.borderBottom = '1px solid #e7e7e7'
        product_type[1].style.display = 'none'
    }
})
select_size.style.display = 'none'
size_f.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        size_f.style.border = 'none'
        select_size.style.display = 'flex'
    }else{
        size_f.style.borderBottom = '1px solid #e7e7e7'
        select_size.style.display = 'none'
    }
})
features[1].style.display = 'none'
features[0].addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        features[0].style.border = 'none'
        features[1].style.display = 'flex'
    }else{
        features[0].style.borderBottom = '1px solid #e7e7e7'
        features[1].style.display = 'none'
    }
})
select_fit.style.display = 'none'
fit.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        fit.style.border = 'none'
        select_fit.style.display = 'block'
    }else{
        fit.style.borderBottom = '1px solid #e7e7e7'
        select_fit.style.display = 'none'
    }
})
select_collection.style.display = 'none'
collection.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        collection.style.border = 'none'
        select_collection.style.display = 'block'
    }else{
        collection.style.borderBottom = '1px solid #e7e7e7'
        select_collection.style.display = 'none'
    }
})
select_color.style.display = 'none'
color.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        color.style.border = 'none'
        select_color.style.display = 'flex'
    }else{
        color.style.borderBottom = '1px solid #e7e7e7'
        select_color.style.display = 'none'
    }
})
select_pattern.style.display = 'none'
pattern.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        pattern.style.border = 'none'
        select_pattern.style.display = 'flex'
    }else{
        pattern.style.borderBottom = '1px solid #e7e7e7'
        select_pattern.style.display = 'none'
    }
})
select_discount.style.display = 'none'
discount.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        discount.style.border = 'none'
        select_discount.style.display = 'flex'
    }else{
        discount.style.borderBottom = '1px solid #e7e7e7'
        select_discount.style.display = 'none'
    }
})
select_price.style.display = 'none'
price.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        price.style.border = 'none'
        select_price.style.display = 'flex'
    }else{
        price.style.borderBottom = '1px solid #e7e7e7'
        select_price.style.display = 'none'
    }
})

/* 상품 */
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
const product_info = document.querySelectorAll('.product_slide .product_info')
const size = document.querySelectorAll('.product_slide .size')
const size_a = document.querySelectorAll('.product_slide .size a')

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

/* recommend 3 */
const product_007 = document.querySelectorAll('.product_007')
const product_008 = document.querySelectorAll('.product_008')
const product_009 = document.querySelectorAll('.product_009')
const product_img_07 = document.querySelectorAll('.product_image_007 > img')
const product_img_08 = document.querySelectorAll('.product_image_008 > img')
const product_img_09 = document.querySelectorAll('.product_image_009 > img')

product_007.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_07[i].src = './images/product_1_14.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_07[i].src = './images/product_1_13.jpg'
    })
})
product_008.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_08[i].src = './images/product_1_16.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_08[i].src = './images/product_1_15.jpg'
    })
})
product_009.forEach((t,i)=>{
    t.addEventListener('mouseover',()=>{
        product_img_09[i].src = './images/product_1_18.jpg'
    })
    t.addEventListener('mouseleave',()=>{
        product_img_09[i].src = './images/product_1_17.jpg'
    })
})