<script setup>
    import {storeToRefs} from 'pinia';
    import { useEventstore } from '../stores/index';
    import loginpage from '../components/login_signup.vue';
    import HeaderForm from '../components/HeaderForm.vue';

    const {getAll} = useEventstore();
    const {getProperties} = useEventstore();
    const {events} = storeToRefs(useEventstore());
    const {properties} = storeToRefs(useEventstore());
    

    getAll();
    getProperties();
</script>

<template>
    <header>
       <HeaderForm/>
    </header>



  <!--<<<<<<< START: Welcome Screen >>>>>>> -->
  <section id="welcome-screen" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-out-down" data-aos-delay="100">
      <div class="row text-center">


        <div class="col-sm-12 d-flex align-items-center mb-5 mt-5 justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=PhO6VmhqODE" class="glightbox play-btn"></a>
        </div>

        <div class="col-sm-4"></div>

        <div class="carousel-content animate__animated animate__fadeInUp col-sm-4  mt-5" data-aos="fade-up">
          <p class="next-event-text">A következő esemény:</p>
          <h4></h4> 
          <i class="bi bi-pin-map event-icons"> </i>
          <div class="d-flex flex-nowrap text-center">
            <div class="countdown d-inline-flex text-center col-12 p-2" >
            <div class="order-1 countdown-block"><h3>%d</h3><h4 class="countdown-text">Nap</h4></div>
            <div class="order-2 countdown-block"><h3>%h</h3><h4 class="countdown-text">Óra</h4></div>
            <div class="order-3 countdown-block"><h3>%m</h3><h4 class="countdown-text">Perc</h4></div>
            <div class="order-4 countdown-block"><h3>%s</h3><h4 class="countdown-text">MP</h4></div>

          </div>


          <div class="col-sm-4"></div>


        </div>


        </div>

      </div>
    </div>
  </section>
<!--<<<<<<< END: Welcome Screen >>>>>>> -->
  <main id="main">
    <!--<<<<<<< START: Description >>>>>>> -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="../assets/pictures/about.jpg" alt="/public/pictures/about.jpg">
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3 class="text-dark">Mi is a GO EVENT! app?</h3>
            <p class="text-dark">
              Számos megrendezésre kerülő esemény van ,mely ingyenes, azonban előzetes regisztrációhoz kötött. Az oldalunk lehetőséget ad előzetes regisztrációra, egy kényelmes, komfortos felületen keresztül. Egyszerűen csak regisztrálni kell az oldalra, és a kívánt eseményre jelentkezni.
            </p>
            <ul>
              <li class="text-dark"><i class="bi bi-check-circle text-dark"></i> Ingyenes.</li>
              <li class="text-dark"><i class="bi bi-check-circle text-dark"></i> Letisztult, mobilon is használható.</li>
              <li class="text-dark"><i class="bi bi-check-circle text-dark"></i> Környezetbarát.</li>
              <li class="text-dark"><i class="bi bi-check-circle text-dark"></i> Könnyű jelentkezési folyamat.</li>
              <li class="text-dark"><i class="bi bi-check-circle text-dark"></i> Minőségi programok.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    <!--<<<<<<< END: Description >>>>>>> -->

    <!--<<<<<<< START: Actually events >>>>>>> -->
    <section id="actually" class="actually">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Inspirálódj eseményeink közül</h2>
          <p>Aktuális programok</p>
        </div>

        <div class="container" v-for="prop in properties">
          <div class="row">
          
          <div class="col-lg-4 col-md-6 d-flex  mt-3 text-dark eventbox">
            <div class="card aos-init aos-animate eventcard" data-aos="fade-down">
              <img style="height: 200px;" v.bind:src="{{ prop.city}}" class="card-img-top" alt="..."><div class="card-body" data-aos="fade-up"  >
                      <h3>{{ prop.name }}</h3>
                      <i class="bi bi-calendar2-week event-icons"></i><br>
                      <i class="bi bi-pin-map event-icons">{{ prop.city }} {{ prop.street }} {{ prop.house_number }}.</i><br>
                      <i class="bi bi-person-lines-fill event-icons">{{ prop.performer_name }}</i>
                      <p style="font-size: 12px;" class="event-description"></p>
                      
                </div>
               
                  <div class="container d-flex m-2 justify-content-end align-self-baseline">
                  <form  method="POST" action="/applyToLocation">
                    <input type="hidden" name="locationId" value="<%= eventArray[i].loc_id %>;<%= eventArray[i].id %>;<%= eventArray[i].date %>;<%= eventArray[i].agelimit %>">
                    <button type="submit" id="applyButton" class="btn btn-outline-goevent m-1">Jelentkezem! <i class="bi bi-arrow-right-circle-fill"></i></button>
                  </form>
                </div>
                  

              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
    <!--<<<<<<< END: Actually events >>>>>>> -->

   <!--<<<<<<< START: Media contents >>>>>>> -->
    <section id="media" class="media">

      <div class="container" data-aos="zoom-out-down">
        <div class="section-title">

          <h2>Lesd meg képeken, milyen hangulat van az eseményen</h2>
          <p>Galéria</p>
        </div>
      </div>

      <div class="container-fluid" data-aos="zoom-out-down" data-aos-delay="100">

        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href="../assets/pictures/media/img_1.jpg" class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_1.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href=""  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_2.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href=""  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_3.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href=""  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_4.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href=""  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_5.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href="" class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_6.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href=""  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_7.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="media-item">
              <a href="../assets/pictures/media/img_8.jpg"  class="media-lightbox" data-gall="media-item">
                <img src="../assets/pictures/media/img_8.jpg" alt="" class="img-fluid">
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    <!--<<<<<<< END: Media contents >>>>>>> -->



    <!--<<<<<<< START: Google map >>>>>>> -->
    <section id="map" class="map">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Rendezvényközpontunk megközelíthetősége</h2>
          <p>Helyszín</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe title="Google Térkép" name="googlemap" style="border:0; width: 100%; height: 350px;"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.1434241560164!2d19.074599215479967!3d47.467634479175686!2m3!1f0!2f0!3f0!3m
        2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd1baca87ab9%3A0x446dd6a1bee0c423!2sBudapest%20Park!5e0!3m2!1shu!2shu!4v1665391622987!5m2!1shu!2shu"
        frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
    <!--<<<<<<< END: Google map >>>>>>> -->


    <!--<<<<<<< START: Contact & Form >>>>>>> -->
    <section id="contact" class="contact">
      <div class="container" data-aos="zoom-in">
        <div class="container aos-init aos-animate" data-aos="flip-up">

          <div class="section-title">
            <h2>Kérdésed van? Vedd fel velünk a kapcsolatot!</h2>
            <p>Kapcsolat</p>
          </div>
        </div>
        <div class="row mt-5">

          <div class="col-lg-8 mt-5 mt-lg-0">
            <form action="/" method="post" role="form" class="contact-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="senderName" class="form-control" id="name" placeholder="Neve" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="senderEmail" id="email" placeholder="E-mail címe" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Üzenet tárgya" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="8" placeholder="Üzenet" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Köszönjük,hogy elküldte üzenetét!, amint tudunk válaszolunk!</div>
              </div>
              <div class="text-left"><button type="submit" onclick="sendForm()">Küldés</button></div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="info">
                <h3>GO EVENT! </h3>
                <p>
                  9022<br>
                  GYŐR<br>
                  Szent István út 1.<br><br>
                  <strong>Telefonszám:</strong> +36 1 511 511 <br>
                  <strong>E-mail:</strong> goeventhungary@gmail.com<br>
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="google-play"><i class="bi bi-google-play"></i></a>
                  <a href="#" class="apple-store"><i class="bi bi-apple"></i></a>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
    <!--<<<<<<< END: Contact & Form >>>>>>> -->


    <!-- Login & Sign up-->
    <loginpage/>
    <!-- End: Login & Sign up -->

  </main><!-- End #main -->

  <!--<<<<<<< START: Footer >>>>>>> -->
<footer>
    
</footer>
  <!--<<<<<<< END: Contact & Form >>>>>>> -->

  <!-- <div id="preloader"></div> -->
  
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-square-fill text-light"></i></a>



  <!--<<<<<<< START: Script files >>>>>>> -->
</template>
