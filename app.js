const messages = [
  // Dzień 1
  "Oliwia, Twój uśmiech sprawia, że dzień staje się lepszy 🌞❤️",
  "Myślę o Tobie… i już się uśmiecham 😘",
  "Jesteś moim szczęściem, nie zapominaj o tym 💖",
  "Każdy Twój gest jest dla mnie magiczny ✨",
  "Oliwia, chcę, żebyś zawsze była szczęśliwa 🥰",
  "Twoje oczy błyszczą jak gwiazdy ✨🌙",
  "Nie mogę przestać o Tobie myśleć 😍",
  "Każda chwila z Tobą jest bezcenna 💕",
  "Twój głos to muzyka dla moich uszu 🎵💖",
  "Myślę o Twoim uśmiechu i robi mi się ciepło 🌸",
  "Jesteś piękniejsza niż wszystkie kwiaty świata 🌷",
  "Oliwia, jesteś moją inspiracją każdego dnia 🌟",
  "Chcę trzymać Cię za rękę i nigdy nie puszczać 🤝❤️",
  "Każda wiadomość do Ciebie jest dla mnie przyjemnością 💌",
  "Twoja obecność rozświetla każdy mrok 🌞✨",
  "Kocham Twój śmiech – jest zaraźliwy 😄💖",
  "Oliwia, Twój dotyk sprawia, że wszystko staje się lepsze 🤗",
  "Myślę o Tobie i uśmiecham się bez powodu 😍",
  "Chcę spędzać z Tobą każdą sekundę ⏳❤️",
  "Twoja energia mnie inspiruje 🌸✨",
  "Oliwia, jesteś moim największym szczęściem 💖",
  "Każde spojrzenie w Twoje oczy to magia ✨",
  "Twój głos jest moją ulubioną melodią 🎵💓",
  "Nie mogę się doczekać, aż Cię zobaczę 😘",
  "Twoje uśmiechy są moją codzienną dawką szczęścia 🌞💖",
  "Oliwia, jesteś piękna w każdy możliwy sposób 🌷✨",
  "Każdy dzień z Tobą to przygoda 💕",
  "Myślę o Tobie i robi mi się cieplej na sercu 💖",
  "Chcę Cię przytulać i nigdy nie puszczać 🤗💓",
  "Oliwia, Twój śmiech rozjaśnia każdy mój dzień 🌞",
  "Jesteś moim światłem w każdej ciemności ✨❤️",
  "Kocham Twoje wszystkie małe dziwactwa 😏💖",
  "Myślę o Tobie nawet w najnudniejszym momencie 🌸",
  "Oliwia, jesteś moją ulubioną osobą na świecie 💕",
  "Każde Twoje słowo sprawia, że się uśmiecham 😍",
  "Twoja obecność to najpiękniejszy prezent 🎁💖",
  "Chcę dzielić z Tobą każdą radość i smutek 🤝❤️",
  "Oliwia, jesteś moją codzienną inspiracją 🌟",
  "Każda chwila bez Ciebie jest za długa ⏰💖",
  "Twoje oczy są jak ocean – mogę w nich utonąć 🌊✨",
  "Kocham, gdy się uśmiechasz, to rozbraja mnie całkowicie 😄💖",
  "Oliwia, jesteś moim powodem do szczęścia 🌷❤️",
  "Twój głos brzmi jak najpiękniejsza melodia 🎵💓",
  "Każdy Twój gest jest dla mnie jak prezent 🎁💖",
  "Oliwia, myślę o Tobie w każdej sekundzie ⏳💓",
  "Twoja obecność sprawia, że świat staje się piękniejszy 🌸",
  "Chcę Cię kochać każdego dnia coraz bardziej ❤️✨",
  "Oliwia, jesteś wyjątkowa i jedyna w swoim rodzaju 💖",
  // Dzień 2 i 3 – można dodać w ten sam sposób (tu dla skrócenia w przykładzie kilka)
];

function showNotification() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').textContent = msg;

  if (Notification.permission === "granted") {
    new Notification("Dla Oliwi 💖", { body: msg, icon: "icon-192.png" });
  }
}

document.getElementById("start").addEventListener("click", () => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification();
        setInterval(showNotification, 30 * 60 * 1000);
      }
    });
  } else {
    showNotification();
    setInterval(showNotification, 30 * 60 * 1000);
  }
});
