class MobileNavbar {
    constructor(mobileMenu,navbarList,navItem){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navbarList = document.querySelector(navbarList);
        this.navItem = document.querySelectorAll(navItem)
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
}
    handleClick(){
        this.navbarList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return console.log(this);
    }  
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navbar-list",
    ".navbar-list li",      
);
mobileNavbar.init();