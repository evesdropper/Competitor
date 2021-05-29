var nav = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container">
  <a class="navbar-brand" href="index.html">Competitor.</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Challenges
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="Tables.html">Current Challenges</a></li>
          <li><a class="dropdown-item" href="form_main.html">Form</a></li>
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
</nav>
`

var styles = `<link rel="icon" href="https://tankionline.com/en/wp-content/uploads/2019/08/wf.png">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<link rel = "stylesheet" type = "text/css" href = "Zero.css"/>`

var title_img = '<img class="border" style="width: 100%" src="https://i.imgur.com/62lbngm.jpg">'

function setdefault(value){
  document.write(value)
}

defaultElements = [styles,nav,title_img]

for (var i=0; i<3; i++){
  setdefault(defaultElements[i])
}
