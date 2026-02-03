const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

document.getElementById("yes").addEventListener("click", () => {

  const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg"
  ];

  let index = 0;

  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      color:white;
      text-align:center;
    ">
      <h1>💖 Our Memories 💖</h1>
      <img id="slide"
           src="${images[0]}"
           style="max-width:80%; max-height:60vh;
           border-radius:20px;
           box-shadow:0 10px 30px rgba(0,0,0,0.3);
           margin-top:20px;">
      <h2 id="finalText" style="margin-top:25px;"></h2>
    </div>
  `;

  const slide = document.getElementById("slide");
  const textEl = document.getElementById("finalText");

  const timer = setInterval(() => {
    index++;
    if (index < images.length) {
      slide.src = images[index];
    } else {
      clearInterval(timer);
      slide.style.display = "none";
      typeText("Love uu babee ❤️", textEl);
    }
  }, 2500);

  function typeText(text, el) {
    let i = 0;
    const typing = setInterval(() => {
      el.innerHTML += text.charAt(i);
      i++;
      if (i === text.length) clearInterval(typing);
    }, 120);
  }
});
