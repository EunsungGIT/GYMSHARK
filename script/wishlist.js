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
const size = document.querySelector('.size > a')
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
size.addEventListener('click',(e)=>{
    e.preventDefault()
    open_m = !open_m
    if(open_m === false){
        size.style.border = 'none'
        select_size.style.display = 'flex'
    }else{
        size.style.borderBottom = '1px solid #e7e7e7'
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

// 사이즈
const size_select = document.querySelectorAll('.size_select')
const select_box = document.querySelectorAll('.select_box')
console.log(select_box)

let sizeOn = true
size_select.forEach((t,i)=>{
    select_box[i].style.display = 'none'
    t.addEventListener('click',()=>{
        sizeOn = !sizeOn
        if(sizeOn === false){
            select_box[i].style.display = 'block'
        }else{
            select_box[i].style.display = 'none'
        }
    })
})

/* 상품 */
const product_icon = document.querySelectorAll('.product_image .icon a')
const product = document.querySelectorAll('.product li')
const product_img = document.querySelectorAll('.product_image > img')

product.forEach((t,i)=>{
    product_img[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    product_info[i].addEventListener('click',()=>{
        window.location.href = './product.html'
    })
    t.addEventListener('mouseover',()=>{
        product_img[i].src = './images/product_1_02.jpg'
    })
    t.addEventListener('mouseleave',()=>{
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
cart_bg_active.addEventListener('click',()=>{
    cart_bg_active.style.opacity = '0'
    body_html.style.overflow = 'auto'
    cart_page_active.style.right = '-500px'
    setTimeout(()=>{
        cart_bg_active.style.display = 'none'
    }, 500);
})