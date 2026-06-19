function switchon(){
    document.getElementById("bulbon").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("fullcat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("para").textContent="Switch On";
    document.getElementById("on").style.backgroundColor="grey";
    document.getElementById("off").style.backgroundColor="red";

}
function switchoff(){
    document.getElementById("bulbon").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("fullcat").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("para").textContent="Switch Off";
    document.getElementById("on").style.backgroundColor="green";
    document.getElementById("off").style.backgroundColor="grey";
}