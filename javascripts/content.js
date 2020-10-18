const header = document.getElementById('menuheader');
const contact = document.getElementById('contact')

header.innerHTML = `        <section>
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
    <a class='anchor' href='index.html #work'>Portfolio</a>
  </li>
  <li>
    <a class='anchor' href='#contact'>Contact</a>
  </li>
</ul>
</section>`;

contact.innerHTML=`        <div class='block'>
<div class='row'>
  <div class='col-md-4'>
    <div class='row'>
      <div class='col-md-2'>
        <div class='fa fa-building-o'></div>
      </div>
      <div class='col-md-10'>
        <p>Singapore</p>
      </div>
    </div>
  </div>
  <div class='col-md-4'>
    <div class='row'>
      <div class='col-md-2'>
        <div class='fa fa-phone'></div>
      </div>
      <div class='col-md-10'>
        <p>(65) 8298 7130</p>
      </div>
    </div>
  </div>
  <div class='col-md-4'>
    <div class='row'>
      <div class='col-md-2'>
        <div class='fa fa-envelope-o'></div>
      </div>
      <div class='col-md-10'>
        <p><a href='mailto:junpengyeo@gmail.com' style="color: #888888;">junpengyeo@gmail.com</a></p>
      </div>
    </div>
  </div>
</div>
</div>`