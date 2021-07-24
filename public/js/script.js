window.scrollTo({ top: 0, behavior: 'smooth' });

document.getElementById("logovtnav").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

const hour = new Date().getHours();
console.log(hour);

if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("navbarvt").style.background = "#15151e";
    document.getElementById("body").style.background = "#15151e";
    document.getElementById("body").style.color = "#fff";
    document.getElementById("logovt").src = "/img/helmet.png";
    document.getElementById("logovtnav").src = "/img/helmet.png";
}