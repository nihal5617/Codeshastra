import './styles.css'
  
  function Footer() {
    return (
        <footer class="footer" role="contentinfo">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>About Cryptogram Messenger</h3>
              <p>Cryptogram is a community management and networking app, designed for content creators, brands and
                businesses. You can build your own community to manage people and signal to increase your reach.</p>
              <p class="social">
                <a href="#"><span class="bi bi-twitter"></span></a>
                <a href="#"><span class="bi bi-facebook"></span></a>
                <a href="#"><span class="bi bi-instagram"></span></a>
                <a href="#"><span class="bi bi-linkedin"></span></a>
              </p>
            </div>
            <div class="col-md-7 ms-auto">
              <div class="row site-section pt-0">
                <div class="col-md-4 mb-4 mb-md-0">
                  <h3>Navigation</h3>
                  <ul class="list-unstyled">
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="blog.html">Privacy Policy</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <h3>Services</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Collaboration</a></li>
                    <li><a href="#">Todos</a></li>
                    <li><a href="#">Events</a></li>
                  </ul>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <h3>Downloads</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">Get from the App Store</a></li>
                    <li><a
                        href="https://play.google.com/store/apps/details?id=com.cryptograminfotech.cryptogram_messenger">Get
                        from the Play Store</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    
          <div class="row justify-content-center text-center">
            <div class="col-md-7">
              <p class="copyright">&copy; Copyright Cryptogram. All Rights Reserved</p>
              <div class="credits">
                
                Designed by <a href="#">Crptogram Info Tech</a>
              </div>
            </div>
          </div>
    
        </div>
      </footer>
    );
  }
  
  export default Footer;