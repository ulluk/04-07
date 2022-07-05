const img1 = document.querySelector("#lion")
const img2 = document.querySelector("#tiger")
const img3 = document.querySelector("#cheetah")

function showInfo(info) {
    alert(`Идентификатор этой картинки ${info.target.id}`)
}

img1.addEventListener("click",showInfo)
img2.addEventListener("click",showInfo)
img3.addEventListener("click",showInfo)