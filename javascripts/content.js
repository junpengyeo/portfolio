const header = document.getElementById('menuheader');
const contact = document.getElementById('contact');

header.innerHTML = `<section>
<a class='brand' href='index.html'>
  Jun Peng
</a>
<ul id='navigation'>
  <div class='trigger'>
    <div class='bar'></div>
    <div class='bar'></div>
    <div class='bar'></div>
  </div>
  <li>
    <a class='anchor' href='index.html'>Home</a>
  </li>
  <li>
    <a class='anchor' href='#about'>About</a>
    <ul>
      <li>
        <a href='personalstatement.html'>Personal Statement</a>
      </li>
      <li>
        <a href='resume.html'>Resume</a>
      </li>
    </ul>
  </li>
  <li>
    <a class='anchor' href='portfolio.html'>Portfolio</a>
  </li>
  <li>
    <a class='anchor' href='#contact'>Contact</a>
  </li>
</ul>
</section>`;

contact.innerHTML=`<section class='contact' id='contact'>
<div class='row content'>
  <div class='title-block'>
    <div class='col-md-3 col-md-offset-1'>
      <div class='row'>
        <div class='col-md-2'>
          <div class='fa fa-building-o'></div>
        </div>
        <div class='col-md-10'>
          <p>Singapore</p>
        </div>
      </div>
    </div>
    <div class='col-md-3 col-md-offset-1'>
      <div class='row'>
        <div class='col-md-2'>
          <div class='fa fa-phone'></div>
        </div>
        <div class='col-md-10'>
          <p>(65) 8298 7130</p>
        </div>
      </div>
    </div>
    <div class='col-md-3 col-md-offset-1'>
      <div class='row'>
        <div class='col-md-2'>
          <div class='fa fa-envelope-o'></div>
        </div>
        <div class='col-md-10'>
          <p><a href='mailto:junpengyeo@gmail.com'>junpengyeo@gmail.com</a></p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class='text-center' style="padding: 2rem;">
      <a class="button button2 anchor" href="mailto:junpengyeo@gmail.com">Contact Now</a>
  </div>
</div>
</div>
<div class='text-center title-block'>
  <div class='social'>
  <a class='icon fa fa-github' href='https://github.com/junpengyeo/'></a>
  <a class='icon fa fa-facebook' href='https://www.facebook.com/yjpeng/'></a>
  <a class='icon fa fa-linkedin' href='https://www.linkedin.com/in/junpengyeo/'></a>
  </div>
  <div class='copy'>
  &copy; 2020 Jun Peng. All Rights Reserved.
  </div>
</div>
</section>`