class CommonHead extends HTMLElement {
  connectedCallback() {

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    this.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    this.appendChild(metaViewport);

    // const metaDescription = document.createElement('meta');
    // metaDescription.setAttribute('name', 'description');
    // metaDescription.setAttribute('content', 'Soluzioni digitali per tutti. Una delle mie vocazioni: Specialista in Transizione Digitale. Offro la mia consulenza in qualsiasi ambito con l’obiettivo di semplificare i processi aziendali, aiutando così in modo immediato e concreto la crescita del business. Il mio focus principale è la transizione digitale delle aziende, accompagniandole in tutto il processo di digitalizzazione del business, dall’analisi');
    // this.appendChild(metaDescription);

    const linkReset = document.createElement('link');
    linkReset.setAttribute('rel', 'stylesheet');
    linkReset.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
    linkReset.setAttribute('integrity', 'sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==');
    linkReset.setAttribute('crossorigin', 'anonymous');
    linkReset.setAttribute('referrerpolicy', 'no-referrer');
    this.appendChild(linkReset);

    const linkFlickity = document.createElement('link');
    linkFlickity.setAttribute('rel', 'stylesheet');
    linkFlickity.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css');
    linkFlickity.setAttribute('integrity', 'sha512-fJcFDOQo2+/Ke365m0NMCZt5uGYEWSxth3wg2i0dXu7A1jQfz9T4hdzz6nkzwmJdOdkcS8jmy2lWGaRXl+nFMQ==');
    linkFlickity.setAttribute('crossorigin', 'anonymous');
    linkFlickity.setAttribute('referrerpolicy', 'no-referrer');
    this.appendChild(linkFlickity);

    const linkGoogleFontsPreconnect1 = document.createElement('link');
    linkGoogleFontsPreconnect1.setAttribute('rel', 'preconnect');
    linkGoogleFontsPreconnect1.setAttribute('href', 'https://fonts.googleapis.com');
    this.appendChild(linkGoogleFontsPreconnect1);

    const linkGoogleFontsPreconnect2 = document.createElement('link');
    linkGoogleFontsPreconnect2.setAttribute('rel', 'preconnect');
    linkGoogleFontsPreconnect2.setAttribute('href', 'https://fonts.gstatic.com');
    linkGoogleFontsPreconnect2.setAttribute('crossorigin', '');
    this.appendChild(linkGoogleFontsPreconnect2);

    const linkGoogleFonts = document.createElement('link');
    linkGoogleFonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap');
    linkGoogleFonts.setAttribute('rel', 'stylesheet');
    this.appendChild(linkGoogleFonts);

    const linkStyle = document.createElement('link');
    linkStyle.setAttribute('rel', 'stylesheet');
    linkStyle.setAttribute('href', 'style.css');
    this.appendChild(linkStyle);
  }
}
customElements.define('common-head', CommonHead)

class CommonHeader extends HTMLElement {
  connectedCallback() {

    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    const logoImg = document.createElement('img');
    logoImg.className = 'img';
    logoImg.src = 'assets/Logo2.png';
    logoImg.alt = 'logo';
    logoDiv.appendChild(logoImg);
    headerDiv.appendChild(logoDiv);

    const menuUl = document.createElement('ul');
    menuUl.id = 'menu';
    menuUl.className = 'menu';
    const menuItems = [
      { href: './index.html', text: 'Home' },
      { href: './single.html', text: 'Chi sono' },
      { href: './contact.html', text: 'Contattami' }
    ];
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      menuUl.appendChild(li);
    });
    headerDiv.appendChild(menuUl);

    const ctaDiv = document.createElement('div');
    ctaDiv.className = 'cta';
    // Uncomment and modify the following line to add a button in the cta div if needed
    // const ctaButton = document.createElement('a');
    // ctaButton.className = 'button';
    // ctaButton.textContent = 'Chiamami';
    // ctaDiv.appendChild(ctaButton);
    headerDiv.appendChild(ctaDiv);

    const hamburgerDiv = document.createElement('div');
    hamburgerDiv.id = 'hamburger';
    hamburgerDiv.className = 'hamburger';

    const hamburgerSpan1 = document.createElement('span');
    const hamburgerSpan2 = document.createElement('span');
    hamburgerDiv.appendChild(hamburgerSpan1);
    hamburgerDiv.appendChild(hamburgerSpan2);

    headerDiv.appendChild(hamburgerDiv);

    this.appendChild(headerDiv);
  }
}
customElements.define('common-header', CommonHeader);

class CommonFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="grid">
          <div class="col mt-05">
            <h4 class="normal-text tw social-icon"><a class="social-link" href="https://www.linkedin.com/in/mmjava/" target="_blank" aria-label="linkedin" title="Linkedin" data-hook="social-bar__socialLink socialLink--id_linkedin"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5219 0.00281552C15.4459 -0.00581603 4.10042 0.00871023 1.47811 0.00281552C0.662105 0.00281552 0 0.644708 0 1.43523V18.568C0 19.3587 0.662105 20 1.47811 20H18.5219C19.3383 20 20 19.3587 20 18.5678V1.43523C20 0.644708 19.3383 0.00281552 18.5219 0.00281552ZM6.07811 16.7379H3.08505V7.735H6.0779V12.8339C6.07916 13.7659 6.07747 15.7924 6.07811 16.7379ZM4.58211 6.50616C3.57389 6.51689 2.90653 5.82153 2.90863 4.9508C2.90568 2.89038 6.26653 2.86723 6.27516 4.95101C6.27516 5.81479 5.62547 6.50616 4.58211 6.50616ZM16.8697 16.7379H13.8773V11.9221C13.8773 10.7118 13.4438 9.88636 12.3613 9.88636C11.2499 9.92509 10.6977 10.7872 10.7272 11.711V16.7381L7.73453 16.7383C7.73453 16.7383 7.7739 8.58004 7.73474 7.73563H10.7274L10.7074 9.04088C11.1013 8.42636 11.8103 7.52426 13.4246 7.52426C15.3935 7.52426 16.8699 8.81099 16.8699 11.5762V16.7379H16.8697Z" fill="black"></path></svg></a></h4>
            <h4 class="normal-text tw social-icon"><a class="social-link" href="https://www.instagram.com/max_marchesini/" target="_blank" aria-label="instagram" title="Instagram" data-hook="social-bar__socialLink socialLink--id_instagram"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85848 0.0699378C4.79447 0.120138 4.06786 0.289939 3.43265 0.53954C2.77524 0.79574 2.21804 1.13954 1.66363 1.69594C1.10923 2.25235 0.767824 2.80995 0.513421 3.46835C0.267219 4.10495 0.100417 4.83215 0.0534168 5.89676C0.00641629 6.96136 -0.00398383 7.30356 0.00121623 10.0192C0.00641628 12.7348 0.0184164 13.0752 0.0700169 14.142C0.120817 15.2058 0.290019 15.9322 0.539622 16.5676C0.796224 17.225 1.13963 17.782 1.69623 18.3366C2.25284 18.8912 2.81004 19.2318 3.47005 19.4866C4.10606 19.7324 4.83347 19.9 5.89788 19.9466C6.96229 19.9932 7.30489 20.004 10.0197 19.9988C12.7345 19.9936 13.0763 19.9816 14.143 19.931C15.2096 19.8804 15.9322 19.71 16.5678 19.4616C17.2252 19.2044 17.7826 18.8616 18.3368 18.3048C18.891 17.748 19.2322 17.19 19.4864 16.5312C19.7328 15.8952 19.9002 15.1678 19.9464 14.1042C19.993 13.0368 20.004 12.696 19.9988 9.98077C19.9936 7.26556 19.9814 6.92516 19.9308 5.85876C19.8802 4.79235 19.7108 4.06815 19.4614 3.43235C19.2044 2.77495 18.8614 2.21835 18.305 1.66334C17.7486 1.10834 17.1902 0.76734 16.5316 0.513739C15.8952 0.267539 15.1682 0.099738 14.1038 0.0537378C13.0393 0.00773764 12.6967 -0.0040624 9.98092 0.00113762C7.26509 0.00633763 6.92509 0.0179377 5.85848 0.0699378ZM5.97528 18.1476C5.00027 18.1052 4.47086 17.9432 4.11806 17.8076C3.65085 17.6276 3.31805 17.41 2.96645 17.0618C2.61484 16.7136 2.39884 16.3796 2.21644 15.9134C2.07944 15.5606 1.91444 15.0318 1.86884 14.0568C1.81923 13.003 1.80883 12.6866 1.80303 10.0168C1.79723 7.34696 1.80743 7.03096 1.85363 5.97676C1.89524 5.00255 2.05824 4.47255 2.19364 4.11995C2.37364 3.65215 2.59044 3.31995 2.93945 2.96855C3.28845 2.61715 3.62145 2.40075 4.08806 2.21835C4.44046 2.08074 4.96927 1.91714 5.94388 1.87074C6.99849 1.82074 7.31449 1.81074 9.98392 1.80494C12.6533 1.79914 12.9701 1.80914 14.0252 1.85554C14.9994 1.89794 15.5296 2.05934 15.8818 2.19555C16.3492 2.37555 16.6818 2.59175 17.0332 2.94135C17.3846 3.29095 17.6012 3.62275 17.7836 4.09035C17.9214 4.44175 18.085 4.97036 18.131 5.94556C18.1812 7.00016 18.1926 7.31636 18.1974 9.98557C18.2022 12.6548 18.1928 12.9718 18.1466 14.0256C18.104 15.0006 17.9424 15.5302 17.8066 15.8834C17.6266 16.3504 17.4096 16.6834 17.0604 17.0346C16.7112 17.3858 16.3786 17.6022 15.9118 17.7846C15.5598 17.922 15.0304 18.086 14.0566 18.1324C13.0019 18.182 12.6859 18.1924 10.0155 18.1982C7.34509 18.204 7.03009 18.1932 5.97548 18.1476M14.1276 4.65535C14.128 4.89271 14.1987 5.12462 14.3309 5.32174C14.4631 5.51887 14.6508 5.67237 14.8703 5.76281C15.0897 5.85326 15.3311 5.8766 15.5638 5.82988C15.7965 5.78315 16.0101 5.66847 16.1777 5.50033C16.3452 5.33218 16.4591 5.11813 16.505 4.88525C16.5508 4.65237 16.5266 4.41112 16.4354 4.19201C16.3441 3.97289 16.1899 3.78576 15.9923 3.65428C15.7947 3.5228 15.5625 3.45288 15.3252 3.45335C15.007 3.45399 14.7021 3.58097 14.4775 3.80638C14.2529 4.03179 14.127 4.33716 14.1276 4.65535ZM4.86547 10.01C4.87107 12.846 7.17429 15.1398 10.0097 15.1344C12.8451 15.129 15.1406 12.826 15.1352 9.98997C15.1298 7.15396 12.8259 4.85955 9.99012 4.86515C7.15429 4.87075 4.86007 7.17436 4.86547 10.01ZM6.66668 10.0064C6.66538 9.34709 6.85961 8.70222 7.2248 8.15332C7.59 7.60442 8.10976 7.17614 8.71837 6.92264C9.32697 6.66914 9.99708 6.6018 10.644 6.72914C11.2908 6.85648 11.8854 7.17278 12.3525 7.63804C12.8196 8.1033 13.1383 8.69663 13.2682 9.34299C13.3981 9.98935 13.3334 10.6597 13.0823 11.2693C12.8312 11.8789 12.405 12.4004 11.8576 12.7677C11.3101 13.1351 10.666 13.3319 10.0067 13.3332C9.56895 13.3341 9.13529 13.2488 8.7305 13.0821C8.32572 12.9154 7.95773 12.6706 7.64757 12.3616C7.33741 12.0527 7.09115 11.6857 6.92284 11.2816C6.75454 10.8775 6.6675 10.4441 6.66668 10.0064Z" fill="black"></path></svg></a></h4>
            <h4 class="normal-text tw social-icon"><a class="social-link" href="https://www.facebook.com/giulemanidalmiofeisbuc" target="_blank" aria-label="facebook" title="Facebook" data-hook="social-bar__socialLink socialLink--id_facebook"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99998 0C-2.39853 0.363158 -3.66273 17.7606 8.42945 20L8.42924 12.9695H5.87725V10.0611H8.42945V7.84463C8.50061 3.78653 11.7617 3.63768 14.4762 4.12674V6.60274H13.2086C11.96 6.60274 11.5705 7.37832 11.5705 8.17389V10.0613H14.3583L13.9126 12.9695H11.5705V20C23.6654 17.7585 22.3955 0.361684 9.99998 0Z" fill="black"></path></svg></a></h4>
            <!-- <p>Lorem ipsum dos aia sm</p> -->
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div class="col mt-05">
            <h4 class="normal-text tw">Contatti</h4>
            <p class="tw"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" fill="black"/>
</svg> <strong>3518584285</strong></p>
            <p class="tw"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" fill="black"/>
</svg> info@maxmilliam-marchesini.com</p>
            <p class="tw"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
  <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" fill="black"/>
</svg> Via delle magnolie 37, 08100 <strong>Nuoro</strong></p>
            <p></p>
          </div>
        </div>
      </footer> `
  }
}
customElements.define('common-footer', CommonFooter);
