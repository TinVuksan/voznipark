<!DOCTYPE html>
<html lang="hr">
<head>
	<title>Vozila</title>
	<meta charset="utf-8">	
	<link rel="stylesheet" href="fontawesome/css/all.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<nav class="navbar navbar-default navbar-fixed-top">
		<ul class="nav navbar-stacked">
			<a href="vozila.php" alt="Admin logo"><li><img id="img" src="img/logo.jpg"></li></a>

			<li>
				<div id="pregledvozila">
				<?php
				session_start();
				if(isset($_SESSION["username"]))
				{
					echo '<label style="font-style:italic">Korisnik: ' .$_SESSION["username"]. ' <label>';
				}
				else
				{
					header("location: pocetna.php");
				}
				?>
				</div>
			</li>

			<li>
				<div id="pregledvozila">
					<button onclick="window.location.href='pregledVozila.php'" class="btn btn-info">
						<i class="far fa-list-alt fa-lg"></i>
					</button>
					<label><a id="navLink" href="pregledVozila.php">Pregled vozila</a></label>					
				</div>
			</li>
		
			<li>
				<div id="pregledvozila">
					<button onclick="window.location.href='registracija.php'" class="btn btn-info">
						<i class="far fa-calendar-alt fa-lg"></i>
					</button>
					<label><a id="navLink" href="registracija.php">Registracija vozila</a></label>					
				</div>
			</li>

			<li>
				<div id="pregledvozila">
					<button onclick="window.location.href='zaduzi.php'" class="btn btn-info">
						<i class="far fa-clipboard fa-lg"></i>
					</button>
					<label><a id="navLink" href="zaduzi.php" style="text-decoration:underline;">Zaduži vozilo</a></label>					
				</div>
			</li>

			<li>
				<div id="pregledvozila">
					<button onclick="window.location.href='vrati.php'" class="btn btn-info">
						<i class="fas fa-undo-alt"></i>
					</button>
					<label><a id="navLink" href="vrati.php">Vrati vozilo</a></label>					
				</div>
			</li>

			<li>
				<div id="pregledvozila">
					<button onclick="window.location.href='statistika.php'" class="btn btn-info">
						<i class="fas fa-chart-pie"></i>
					</button>
					<label><a id="navLink" href="statistika.php">Statistika</a></label>					
				</div>
			</li>

			<li>
				<div id="pregledvozila">
					<button class="btn btn-danger" onclick="Odjava()">
						<i class="fas fa-sign-out-alt fa-lg"></i>
					</button>
					<label><a id="navLink" onclick= "Odjava()">Odjava</a></label>					
				</div>
			</li>								
		</ul>
		</nav>		
	</header>



	<div id="zaduziForma">
		<h1>Zaduži vozilo</h1>
		<form class="form-horizontal">
			

			<div class="form-group">
				<div class="col-md-8">
					<label>Odabir vozila</label>
					<select class="form-control" id="zaduziVozilo">
					
					</select>
				</div>
			</div>
			
			<div class="form-group">
				<div class="col-md-8">
					<label>Odabir zaposlenika</label>
					<select class="form-control" id="zaduziZaposlenik">

					</select>
				</div>
			</div>

			<div class="form-group">
				<div class="col-md-8">
					<label>Današnji datum</label>
					<input 	value = "" id="zaduziDatum" type="text"  class="form-control" disabled>
				</div>
			</div>

			<div class="form-group">
				<button id="submitZaduzivanje" type="button" onclick="ZaduziVozilo();" class="btn btn-info">SPREMI</button>
			</div>
		</form>
	</div>
	<div class="modal" id="modals" tabindex="-1" role="dialog">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      
	    </div>
	  </div>
	</div>

<script src="js/globals.js"></script>
<script src="js/app.js"></script>
<script src="js/zaduziForma.js"></script>
</body>
</html>