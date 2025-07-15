function convert() {
  const cookies = parseInt(document.getElementById("cookies").value);
  const rate = 12;
  const loaves = Math.floor(cookies / rate);
  const leftovers = cookies % rate;
  const ding = document.getElementById("ding");
  ding.play();

  let message = `You offered ${cookies} cookie(s).<br>`;
  message += `That's worth ${loaves} loaf/loaves of banana bread 🥖.<br>`;

  if (leftovers > 0) {
    message += `${leftovers} cookie(s) go into the snack jar 😋.`;
  } else if (loaves === 0) {
    message += `Not enough cookies! Keep munching 🍪.`;
  } else {
    message += `Deal accepted. Banana bread incoming! 💕`;
  }

  document.getElementById("result").innerHTML = message;
}

function sendRequest(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const offer = document.getElementById("offer").value;
  const description = document.getElementById("description").value;

  const subject = encodeURIComponent("Banana Bread Cookie Offer");
  const body = encodeURIComponent(
    `Hi Jenny,

My name is ${name} and I would like to offer ${offer} cookie(s) for banana bread.

Here's my cookie description:
${description}

Looking forward to hearing from you! 🍪💕`
  );

  document.getElementById("confirmation").innerText = "Your message is ready! It will open in your email client ✉️";
  setTimeout(() => {
    window.location.href = `mailto:hugginnews@gmail.com?subject=${subject}&body=${body}`;
  }, 1000);
}
