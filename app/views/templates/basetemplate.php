<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bar Sports Triathlon | <?php echo $viewModel->get('pageTitle'); ?></title>
    <link rel="stylesheet" href="assets/css/app.css" />
    <script src="assets/js/vendor/modernizr.js"></script>
  </head>
  <body>
    <div class="contain-to-grid">
      <nav class="top-bar" data-topbar role="navigation">
        <ul class="title-area">
          <li class="name">
            <h1><a href="/">Bar Sports Triathlon</a></h1>
          </li>
           <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
          <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section class="top-bar-section">
          <!-- Right Nav Section -->
          <ul class="right">
            <li><a href="#">Stats</a></li>
            <li><a href="#">Rules</a></li>
            <li><a href="#">Scoring</a></li>
          </ul>
        </section>
      </nav>
    </div>
    <div class="row">
      <div class="large-12 columns">
        <?php require($this->viewFile); ?>
      </div>
    </div>
      
    <script src="assets/js/vendor/jquery.js"></script>
    <script src="assets/js/vendor/oundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
