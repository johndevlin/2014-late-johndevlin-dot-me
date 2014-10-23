<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="description" content="John Devlin, a hired geek, digital designer and front-end developer, based in Belfast, Northern Ireland.">
	<meta name="keywords" content="Design, Digital, UX, Web Design, Responsive, CSS, HTML, Keywords do fuck all, don't they?">

	<title>John Devlin — Hired geek, digital designer and front-end developer, based in Belfast, Northern Ireland.</title>

	<meta name="robots" content="nofollow" />

	<link rel="shortcut icon" type="image/ico" href="/favicon.png">

	<link rel="stylesheet" href="/css/style.css">

	<script src="/js/modernizr-2.6.2.min.js"></script>

	<!-- Google Web Fonts: Merriweather & Armata -->
	<link href="http://fonts.googleapis.com/css?family=Armata|Merriweather:400,300italic" rel="stylesheet" type="text/css">

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"> </script>
	<![endif]-->

</head>

<body>

	<form class="contact-form" method="post" action="/contact-form-handler.php">

		<div class="container">

			<p>
				Fill out your name, email address and message and I'll get back to you soon.
			</p>

			<fieldset>

				<label for="contact-form-name">Name:</label>
				<input type="text" name="contact-form-name" id="contact-form-name" placeholder="Bill Murray" required />

			</fieldset>

			<fieldset>

				<label for="contact-form-email">Email:</label>
				<input type="email" name="contact-form-email" id="contact-form-email" placeholder="p.venkman@ghostbusters.com" required />

			</fieldset>

			<fieldset>

				<label for="contact-form-message">Message:</label>
				<textarea name="contact-form-message" id="contact-form-message" placeholder="Please write your message here…" required></textarea>

			</fieldset>

			<fieldset>

				<input type="submit" value="Send your message" />

				<a href="#" class="return-false button ghost close-contact-form-link">Cancel</a>

			</fieldset>

		</div>

	</form>

	<nav class="mobile-nav">

		<ul class="unstyled-list">

			<li><a href="/work/">Work</a></li>

			<li><a class="return-false open-contact-form-link" href="#">Contact</a></li>

			<li><a class="return-false" href="#">Close</a></li>

		</ul>

	</nav>

	<header>
		<div class="container">

			<h1 class="logo">
				<a href="/">John Devlin &#8211; Hired geek, digital designer and front-end developer, based in Belfast, Northern Ireland.</a>
			</h1>

			<nav class="desktop-nav">

				<ul class="inline-list">

					<li><a href="/work/">Work</a></li>

					<li><a class="return-false open-contact-form-link" href="#">Contact</a></li>

					<li>
					
						<a class="social-link icon-twitter" target="_blank" href="https://twitter.com/john_devlin">Twitter</a>
							
					</li>

					<li>
					
						<a class="social-link icon-github" target="_blank" href="https://github.com/johndevlin/">Github</a>
						
					</li>

					<li>
					
						<a class="social-link icon-dribbble" target="_blank" href="https://dribbble.com/John_Devlin">Dribbble</a>
						
					</li>

				</ul>

			</nav>

			<a class="open-nav-btn return-false" href="#">Open navigation</a>

		</div>
	</header>