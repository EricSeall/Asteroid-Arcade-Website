document.write(`
<div class="navbar-wrapper">
  <div class="navbar navbar-inverse navbar-fixed-top" style="border-radius: 0">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="img-thumbnail" href="index.html" style="background-color: #ffffff; margin-left: -10px; padding-left: 10px; padding-right: 15px"><img src="media/logo.png" style="background-color: #ffffff; margin-left: -5px" width="50px" alt="Asteroid Arcade"></a>
      </div>
			<div class="navbar-nav" id="navbarcollapse">
				<div style="float: none;">
				<ul class="nav navbar-nav">
`);
							if ( isAbout ) { document.write('<li class="active"><a href="#">About us</a></li>'); } else { document.write('<li><a href="about.html">About us</a></li>'); }
							if ( isContact ) { document.write('<li class="active"><a href="#">Contact us</a></li>'); } else { document.write('<li><a href="contact.html">Contact us</a></li>'); }
              if ( isMembers ) { document.write('<li class="active"><a href="#">Our members</a></li>'); } else { document.write('<li><a href="members.html">Our members</a></li>'); }
              if ( isMusic ) { document.write('<li class="active"><a href="#">Music</a></li>'); } else { document.write('<li><a href="music.html">Music</a></li>'); }
document.write(`
      	</ul>
      </div>
    </div><!-- /.navbar-collapse -->
  </div>
</div>
</div>
</div>
<hr style="height:10px; visibility:hidden;" />
`);
