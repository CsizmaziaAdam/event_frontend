<template>
    <div>
  <div class="rt-container">
        <div class="col-rt-12">
            <div class="Scriptcontent">
              <input id="modal-toggle" type="checkbox">
              <label class="modal-backdrop" for="modal-toggle"></label>
              <div class="modal-content">
              <label class="modal-close-btn" for="modal-toggle">
                <svg width="30" height="30"><line x1="5" y1="5" x2="20" y2="20"/><line x1="20" y1="5" x2="5" y2="20"/></svg>
              </label>
              </div>
            </div>
        </div>
    </div>
<div class="tabs">
<!--  BEJELENTKEZÉSI RÉSZ  -->

  <div class="border border-danger text-danger p-2">
    <i class="bi bi-exclamation-octagon-fill"></i>
  </div>

<input class="radio" id="tab-login" name="tabs-name" type="radio" checked>
<label for="tab-login" class="table"><span>Bejelentkezés</span></label>
<div class="tabs-content">
   <form action="/login" method="post">
       <input type="email" name="email" placeholder="Email cím" required>
       <input type="password" name="password" placeholder="Jelszó" required>
       <input type="submit" value="Bejelentkezés">
   </form>
   <!-- Elfelejtett Jelszó -->
   <form class="forgot-password" action="forgotPassword" method="post">
       <input id="forgot-password-toggle" type="checkbox">
       <label for="forgot-password-toggle">Elfelejtetted jelszavad?</label>
       <div class="forgot-password-content">
           <input type="email" name="email" placeholder="Add meg az e-mail címed, amivel regisztráltál" required>
           <input type="submit" value="Küldés">
       </div>

   </form>
</div>
<!-- REGISZTRÁCIÓS RÉSZ  -->
  <input class="radio" id="tab-signup" name="tabs-name" type="radio">
  <label for="tab-signup" class="table"><span>Regisztráció</span></label>
  <div class="tabs-content">
     <form action="/signup" method="POST">
          <input type="text" name="name" placeholder="Név" required>
          <input type="email" name="email" placeholder="Email cím" required>
          <input  type="password" name="password" minlength="8" data-rule="minlen:8" data-msg="A jelszónak 8 karakternek kell lennie!" placeholder="Jelszó" required>
          <input  type="password" name="password_match" minlength="8" data-rule="minlen:8" data-msg="A jelszónak 8 karakternek kell lennie!" placeholder="Jelszó mégegyszer" required>


         <select class="form-control" id="citizenship" name="citizenship" required>
          <option>Afganisztáni</option>
          <option>Albán</option>
          <option>Algériai</option>
          <option>Amerikai</option>
          <option>Amerikai Csendes-Óceáni-Szigeteki</option>
          <option>Andorrai</option>
          <option>Angolai</option>
          <option>Anguillai</option>
          <option>Antarktiszi</option>
          <option>Antigua És Barbudai</option>
          <option>Argentin</option>
          <option>Arubai</option>
          <option>Ausztrál</option>
          <option>Azerbajdzsáni</option>
          <option>Bahama-Szigeteki</option>
          <option>Bahreini</option>
          <option>Bangladesi</option>
          <option>Barbadosi</option>
          <option>Belgiumi</option>
          <option>Belizei</option>
          <option>Belorusz</option>
          <option>Benini</option>
          <option>Bermudai</option>
          <option>Bhutáni</option>
          <option>Bolgár</option>
          <option>Bolíviai</option>
          <option>Boszniai</option>
          <option>Botswanai</option>
          <option>Bouvet-Szigeti</option>
          <option>Brazil</option>
          <option>Brit</option>
          <option>Brit Indiai-Óceáni Területi</option>
          <option>Brit Virgin-Szigeteki</option>
          <option>Burkina Fasoi</option>
          <option>Burmai</option>
          <option>Burundi</option>
          <option>Cape Verdei</option>
          <option>Chilei</option>
          <option>Ciprusi</option>
          <option>Costa Ricai</option>
          <option>Csádi</option>
          <option>Cseh</option>
          <option>Dán</option>
          <option>Dél-Afrikai Köztársasági</option>
          <option>Dél-Koreai</option>
          <option>Dominikai</option>
          <option>Dominikai Közösségi</option>
          <option>Dubai</option>
          <option>Dzsibuti</option>
          <option>Eci</option>
          <option>Ecuadori</option>
          <option>Egyenlítoi Guineai</option>
          <option>Egyesült Arab Emirátusi</option>
          <option>Egyiptomi</option>
          <option>Elefántcsontparti</option>
          <option>Eritreai</option>
          <option>Észak-Koreai</option>
          <option>Észt</option>
          <option>Etiópiai</option>
          <option>Falkland-Szigeteki</option>
          <option>Faroe-Szigeteki</option>
          <option>Fidzsi-Szigeteki</option>
          <option>Finn</option>
          <option>Francia</option>
          <option>Francia Déli Területeki</option>
          <option>Francia Guyanai</option>
          <option>Francia Polinéziai</option>
          <option>Fülöp-Szigeteki</option>
          <option>Gaboni</option>
          <option>Gambiai</option>
          <option>Ghánai</option>
          <option>Gibraltári</option>
          <option>Görög</option>
          <option>Grenadai</option>
          <option>Grönlandi</option>
          <option>Grúziai</option>
          <option>Guatemalai</option>
          <option>Guinea Bissaui</option>
          <option>Guineai</option>
          <option>Guyanai</option>
          <option>Haiti</option>
          <option>Heart-Szigeti</option>
          <option>Holland</option>
          <option>Holland Antilláki</option>
          <option>Hondurasi</option>
          <option>Hong Kongi</option>
          <option>Horvá</option>
          <option>Indiai</option>
          <option>Indonesiai</option>
          <option>Ír</option>
          <option>Iraki</option>
          <option>Iráni</option>
          <option>Ismeretlen</option>
          <option>Izlandi</option>
          <option>Izraeli</option>
          <option>Jamaicai</option>
          <option>Japán</option>
          <option>Jemeni</option>
          <option>Jordán</option>
          <option>Jugoszláv</option>
          <option>Kajmán-Szigeteki</option>
          <option>Kambodzsai</option>
          <option>Kameruni</option>
          <option>Kanadai</option>
          <option>Karácsony-Szigeti</option>
          <option>Katari</option>
          <option>Kazahsztáni</option>
          <option>Kenyai</option>
          <option>Kínai</option>
          <option>Kirgíziai</option>
          <option>Kiribati</option>
          <option>Kókusz-Szigeteki</option>
          <option>Kolumbiai</option>
          <option>Komorosi</option>
          <option>Kongói</option>
          <option>Koszovói</option>
          <option>Közép-Afrikai Köztársasági</option>
          <option>Kubai</option>
          <option>Kuvaiti</option>
          <option>Laoszi</option>
          <option>Lengyel</option>
          <option>Lesothoi</option>
          <option>Lett</option>
          <option>Libanoni</option>
          <option>Libériai</option>
          <option>Líbiai</option>
          <option>Liechtensteini</option>
          <option>Litván</option>
          <option>Luxemburgi</option>
          <option>Madagaszkári</option>
          <option selected>	Magyar</option>
          <option>Makaói</option>
          <option>Makedóniai</option>
          <option>Malawi</option>
          <option>Malaysiai</option>
          <option>Maldiv-Szigeteki</option>
          <option>Mali</option>
          <option>Máltai</option>
          <option>Marokkói</option>
          <option>Marschall-Szigeteki</option>
          <option>Martiniquei</option>
          <option>Mauritániai</option>
          <option>Mauritiusi</option>
          <option>Mayottei</option>
          <option>Mexikói</option>
          <option>Moldáviai</option>
          <option>Monacoi</option>
          <option>Mongól</option>
          <option>Montenegroi</option>
          <option>Mozambiki</option>
          <option>Myanamari</option>
          <option>Namibiai</option>
          <option>Naraui</option>
          <option>Német</option>
          <option>Nepáli</option>
          <option>Nicaraguai</option>
          <option>Nigeri</option>
          <option>Nigériai</option>
          <option>Niuei</option>
          <option>Norfolk-Szigeti</option>
          <option>Norvég</option>
          <option>Nyugat-Afrikai</option>
          <option>Nyugat-Szaharai</option>
          <option>Nyugat-Szamoai</option>
          <option>Olasz</option>
          <option>Omani</option>
          <option>Orosz</option>
          <option>Osztrák</option>
          <option>Other Countries</option>
          <option>Örmény</option>
          <option>Pakisztáni</option>
          <option>Palaui</option>
          <option>Panamai</option>
          <option>Pápua Új-Guineai</option>
          <option>Paraguayi</option>
          <option>Perui</option>
          <option>Pitcairn-Szigeteki</option>
          <option>Portugál</option>
          <option>Puerto Ricoi</option>
          <option>Réunioni</option>
          <option>Román</option>
          <option>Ruandai</option>
          <option>Saint Luciai</option>
          <option>Saint Vincenti</option>
          <option>Salamon-Szigeteki</option>
          <option>Salvadori</option>
          <option>San Marinoi</option>
          <option>Sao Toméi</option>
          <option>Seychelle-Szigeteki</option>
          <option>Sierra Leonei</option>
          <option>Spanyol</option>
          <option>Srí Lankai</option>
          <option>St-Pierre És Miqueloni</option>
          <option>Surinamei</option>
          <option>Svájci</option>
          <option>Svalbardi</option>
          <option>Svéd</option>
          <option>Szaud-Arábiai</option>
          <option>Szenegáli</option>
          <option>Szent Ilonai</option>
          <option>Szerb</option>
          <option>Szingapúri</option>
          <option>Szíriai</option>
          <option>Szlovák</option>
          <option>Szlovén</option>
          <option>Szomáliai</option>
          <option>Szudani</option>
          <option>Szváziföldi</option>
          <option>Tadzsikisztáni</option>
          <option>Tajvani</option>
          <option>Tanzániai</option>
          <option>Thaiföldi</option>
          <option>Togoi</option>
          <option>Tokelau-Szigeteki</option>
          <option>Tongai</option>
          <option>Török</option>
          <option>Trinidadi</option>
          <option>Tunéziai</option>
          <option>Turks És Caicos-Szigeteki</option>
          <option>Tuvalui</option>
          <option>Türkmenisztáni</option>
          <option>Ugandai</option>
          <option>Új-Kaledóniai</option>
          <option>Új-Zélandi</option>
          <option>Ukrán</option>
          <option>Unoi</option>
          <option>Uruguayi</option>
          <option>Üzbegisztáni</option>
          <option>Vanuatui</option>
          <option>Vatikáni</option>
          <option>Venezuelai</option>
          <option>Vietnami</option>
          <option>Wallis És Futunai</option>
          <option>Zairei</option>
          <option>Zambiai</option>
          <option>Zimbabwei</option>
        </select>

          <div style="text-align: left;">
            <input style="padding-right: 150px;" type="radio" id="gender_M" name="gender" value="Férfi" required />
            <label for="Sex">Férfi</label>
      
            <input type="radio" id="gender_F" name="gender" value="Nő" />
            <label for="Sex">Nő</label>
      
            <input type="radio" id="gender_O" name="gender" value="Nem adom meg" />
            <label for="Sex">Nem adom meg</label>
          </div>
         

          <div class="row">
            <div class="col-sm-6"> <div style="text-align: left;">
              <label class="lbl_date">Születési idő: </label>
              <input type="date" name="birthday" class="form-control" id="date" placeholder="Születési idő" min="1910-01-01" max="2015-01-01" required>
              <div class="validate"></div>
            </div></div>
            <div class="col-sm-6"><input type="submit" value="Regisztrálás"></div>
          </div>
         
             </form>
          </div>
      </div>
  </div>
</template>