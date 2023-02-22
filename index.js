const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

linkHome.onclick = function (event) {
  event.preventDefault();
  history.pushState(null, "", event.target.href);
  // sebelum root ditambahkan HomePage, root akan di clear dulu 
  root.innerHTML = "";
  // tambahkan home page function pada root
  // memanggil fungsi HomePage()
  root.appendChild(HomePage());
};

linkAbout.onclick = function (event) {
  event.preventDefault();
  history.pushState(null, "", event.target.href);
  root.innerHTML = "";
  root.appendChild(AboutPage());
};

// client side rendering
// membuat elemen(button,input,etc.)/merender elemen di client side atau JavaScript

// ?function to make elements in home page 
function HomePage() {
  // create 'input' and'paragraph' element
  const p = document.createElement("p");
  p.textContent = "Welcome to Home Page";

  const textPreview = document.createElement("p");

  const input = document.createElement("input");
  input.placeholder = "enter your name";
  // untuk mengganti isi tectContent sesuai input yg dimasukkan
  input.oninput = function (event) {
    // akan mengganti value dalam textPreview
    textPreview.textContent = event.target.value;
  };

  // memasukkan paragraf dan input kedalam variabel div
  const div = document.createElement("div");
  div.append(p);
  div.append(input);
  div.append(textPreview);

  return div;
}

// buat about page
function AboutPage() {
  const p = document.createElement("p");
  p.textContent = "Welcome to About Page";
  return p;
}

if (window.location.pathname == "#home") {
  root.innerHTML = "";
  root.appendChild(HomePage());
} else if (window.location.pathname == "#about") {
  root.innerHTML = "";
  root.appendChild(AboutPage());
} else {
  root.innerHTML = "";
  root.appendChild(HomePage());
}