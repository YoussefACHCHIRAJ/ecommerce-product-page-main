let menu = document.querySelector(".menu");
let menuImage =document.querySelector(".menu img");
let nav = document.querySelector("nav");
let list = document.querySelector("nav ul");
let shop = document.querySelector(".shop");
let cartContent = document.querySelector(".cartContent");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let images=document.querySelectorAll(".slideImages");
let heroImage = document.querySelector(".hero img");
let heroImages = document.querySelectorAll(".heroImage");
let minus = document.querySelector(".minus");
let plus=document.querySelector(".plus");
let counterSpan = document.querySelector(".nmbr");
let addCart = document.querySelector(".add");
let alertMessage = document.querySelector(".alert");
let beforeAdd = document.querySelector(".beforeAdd");

let currentDiv = heroImages[0];
let currentImage = 0;
let cmp=0;
shop.setAttribute('data-shop',0);
menu.addEventListener("click",()=>{
    nav.classList.toggle("trans");
    menuImage.src= (nav.classList.contains("trans")) ? "images/icon-close.svg" : "images/icon-menu.svg";    
});

shop.addEventListener("click", ()=>{
    cartContent.classList.toggle("cartDrop");
});

previous.addEventListener('click', () => {
    images[currentImage].style.opacity = 0;
    currentImage = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1;
    images[currentImage].style.opacity = 1;
});

next.addEventListener('click', () => {
    images[currentImage].style.opacity = 0;
    currentImage = currentImage + 1 === images.length ? 0 : currentImage + 1;
    images[currentImage].style.opacity = 1;
});
heroImages.forEach(item => {
    item.addEventListener('click',e=>{
        if(currentDiv){
            currentDiv.classList.remove('focus');
        }
        currentDiv=e.target;
        currentDiv.classList.add('focus');
        heroImage.setAttribute('src',currentDiv.getAttribute('src'));
    })
});
plus.addEventListener('click',()=>{
    counterSpan.innerHTML = ++cmp;
    alertMessage.style.display = 'none';
})
minus.addEventListener('click',()=>{
counterSpan.innerHTML = (cmp<=0)?0:--cmp;
    alertMessage.style.display = 'none';
})
addCart.addEventListener('click',()=>{
    if(cmp==0){
        beforeAdd.style.display='block';
        alertMessage.style.display = 'block';
    }else{
        beforeAdd.style.display='none';
        counterSpan.innerHTML =0;
        cartContent.innerHTML = `
            <h4>Cart</h4>
            <div class="bigContainare">
                <div class="smallContainare">
                    <div class="imagShop"><img src="images/image-product-1.jpg" alt="image 1"></div>
                    <div class="content">
                        <p>Fall Limited Edition Sneaker</p>
                        <span class="onePrice">$125.00 x</span>
                        <span class="ComandNmb"> ${cmp}</span>
                        <span class="totalePrice"> $${cmp*125}.00</span>
                    </div>
                    <div class="delete" onclick ="deleteShop()"><img src="images/icon-delete.svg" alt="delter"></div>
                </div>
                <button class="ckeout">Checkout</button>
            </div>
            `
            shop.setAttribute('data-shop',cmp);
            cmp=0;
    }
});

function deleteShop(){
    cartContent.innerHTML = `
    <h4>Cart</h4>
    <p class="beforeAdd">Your cart is empthy</p>
    <div class="bigContainare></div>
    `;
    beforeAdd.style.display='block';
    shop.setAttribute('data-shop',0);
}









