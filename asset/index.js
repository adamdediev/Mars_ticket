function paralax(event) {
    this.querySelectorAll('.bak').forEach(bak => {
        bak.style.transform = `translateX(${event.clientX/25}px)`
    });
};

    document.addEventListener('mousemove',paralax);


 function open_menu(){
    document.querySelector(".mars").style.display="none";
    document.querySelector(".video").style.display="none";
    document.querySelector(".header").style.display="none";
    document.querySelector(".open_window").style.display="block";

    
 };

 function close_menu(){
    document.querySelector(".mars").style.display="block";
    document.querySelector(".video").style.display="block";
    document.querySelector(".header").style.display="flex";
    document.querySelector(".open_window").style.display="none";

    
 };