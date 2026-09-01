const menuIcon = document.querySelector(".menu-icon");
const actionList = document.querySelector(".action_list");
const footerArr = document.querySelector(".footerArr");
const onOff = document.querySelector(".on-Off")
const navBar = document.querySelector(".nav_container");





menuIcon.addEventListener('click' , function(){
    if(actionList.style.display === "block"){
        actionList.style.display = "none";
    }else{
        actionList.style.display = "block";
    }   
})

footerArr.addEventListener('click', function(){
    document.scrollTo({
        top: 0
    })
})

onOff.addEventListener('click' , function (){
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");

    onOff.classList.toggle("fa-toggle-on" , !isLight);
    onOff.classList.toggle("fa-toggle-off", isLight);

    localStorage.setItem("theme", isLight ? "light" : "dark")
})

const savedTheme = localStorage.getItem("theme");
if(savedTheme === "light"){
    document.body.classList.add("light-theme");
    onOff.classList.remove(" fa-toggle-on");
    onOff.classList.add(" fa-toggle-off");
}



