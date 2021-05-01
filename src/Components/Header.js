import '../css/header.css'
import $ from 'jquery'

const header = () => {
    function submitSearch(){
        var text = document.getElementById('searchInput').value;
        window.location.href = "/";
    }
    
    return(
        <div class='top-header'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a class='menu-item brand' href='/'>Podtrid</a>
            <a class='menu-item'>YourWorld</a>
            <div class='search-data'>
                <input type="text" id='searchInput' spellcheck="false" placeholder='Type to search'/>
                <button type="submit" id='searchEnter'onClick={submitSearch} ><i class="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default header