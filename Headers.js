var header = `<div class="container">
  <a class="navbar-brand" href="Index.html">Competitor.</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="Index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Challenges
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="Tables.html">Current Challenges</a></li>
          <li><a class="dropdown-item" href="#">Form</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Leaderboard</a>
      </li>
    </ul>
    <span class="navbar-text">
      Season II
    </span>
  </div>
</div>
`

var footer = `<footer class="container-fluid">
<h3 style="font-size:20px;">Tanki Online Newspaper</h3>
<p id="credits">Brought to you by the Tanki Online Newspaper Reporters and Contest Organizers.</p>
</footer>`

function setdefault(element,value){
    document.getElementbyID(element).innerHTML(value)
}

setdefault("<nav>",header)