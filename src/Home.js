import './css/home.css';
import Header from './Components/Header'

const home = () =>{
    var slideIndex = 1;
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        console.log(document.readyState)
        if( document.readyState == 'complete' ) {
            var i;
            var slides = document.getElementsByClassName("slides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        } else {
            document.addEventListener('DOMContentLoaded', function () {
                showSlides(slideIndex)
            });
        }
    }
    return (
        <div>
            <Header/>
            <div class='img-box'>
                <div class='' >
                    <img src='/img/frances-acqQ4UuHB9g-unsplash.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default home