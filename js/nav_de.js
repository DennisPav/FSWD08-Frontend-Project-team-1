var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

var navElem = document.getElementById('nav');
navElem.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand ml-5" href="home.html">Pajaphot</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-5 ">
        <li class="nav-item ">
          <a class="nav-link" href="home.html">HOME</a>
        </li>
        <li class="nav-item dropdown dmenu">
          <a class="nav-link dropdown-toggle" href="gallery.html" id="navbarDrop" aria-haspopup="true" aria-expanded="false">
            GALERIE
          </a>
          <div class="dropdown-menu mt-0" aria-labelledby="navbarDrop">
            <a class="dropdown-item" href="gallery-portrait.html">Portrait</a>
            <a class="dropdown-item" href="gallery-street.html">Street Art</a>
            <a class="dropdown-item" href="gallery-travel.html">Reisen</a>
            <a class="dropdown-item" href="gallery-nudeart.html">Akt</a>
          </div>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="equipment.html">AUSRÜSTUNG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">ÜBER MICH</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="contact.html">KONTAKT</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sprache
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
            <a class="dropdown-item" href="../de/${filename}">deutsch</a>
            <a class="dropdown-item" href="../en/${filename}">english</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
`