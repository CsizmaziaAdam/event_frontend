<template>
  <img src="../assets/img/icon.png" alt="">
    <div id="header" class="fixed-top d-flex align-items-cente">
      <div class="container-fluid container-xl d-flex flex-row">
        <a href="/" class="logo me-auto me-lg-0"><img id="logo"  alt="" class="img-fluid"></a>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li><a class="nav-link scrollto active" href="/#welcome-screen" >Home</a></li>
            <li><a class="nav-link scrollto" href="/#about" >Ismertető</a></li>
            <li><a class="nav-link scrollto" href="/#actually" >Programok</a></li>
            <li><a class="nav-link scrollto" href="/#media">Média</a></li>
            <li><a class="nav-link scrollto" href="/#map">Helyszín</a></li>
            <li><a class="nav-link scrollto" href="/#contact">Kapcsolat</a></li>
        
          
            <div class="navbar-buttons m-3">
                <label class="modal-btn" for="modal-toggle">Bejelentkezés/<br>Regisztráció</label>
            </div>
           
         
            <div class="navbar-buttons m-3 ">
            <form>
              <button class="logoutbtn navbar-buttons" type="submit">Fiók</button>
            </form> 
            </div>
            <div class="navbar-buttons m-3">
            <form >
              <button class="logoutbtn navbar-buttons" type="submit">Kijelentkezés</button>
            </form> 
            </div>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </div>
</template>