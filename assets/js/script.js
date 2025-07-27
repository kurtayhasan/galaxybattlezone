const languageData = {
  tr: {
    seo_title: "Galaxy Battle Zone - Ücretsiz Uzay Savaş Oyunları",
    seo_description: "Galaxy Battle Zone: En iyi ücretsiz HTML5 uzay savaş oyunlarını online oyna. Hemen oyna ve yüksek skora ulaş!",
    seo_ogdesc: "Ücretsiz online HTML5 uzay savaş oyunları oyna!",
    site_title: "Galaxy Battle Zone",
    nav_games: "Oyunlar",
    nav_about: "Hakkında",
    hero_headline: "Galaksiyi Savun – Ücretsiz Uzay Oyunları Oyna!",
    hero_desc: "Asteroitleri yok et, uzaylılarla savaş ve galaksiyi fethet. Hemen oyna ve yüksek puanlara ulaş!",
    play_now: "Hemen Oyna",
    popular_games: "Popüler Oyunlar",
    game1_desc: "Düşmanları yok et, uzayda hayatta kal!",
    game2_desc: "Hızlı tempolu uzay aksiyonu!",
    game3_desc: "Retro neon uzay istilacıları!",
    game4_desc: "Epik patronlar ve sonsuz dalga!",
    game5_desc: "Renkli bullet hell aksiyon!",
    game6_desc: "Asteroitleri parçala, gemini yükselt!",
    game7_desc: "Roketleri derin uzaya fırlat!",
    game8_desc: "Dış uzayda jetpack ile koş!",
    play_btn: "Oyna",
    about_title: "Galaxy Battle Zone Hakkında",
    about_desc: "Galaxy Battle Zone, en iyi uzay savaş oyunlarının portalıdır! Tüm oyunlar mobil uyumlu ve ücretsizdir. Sıralamalarda yarış, turnuvalara katıl ve her hafta yeni içeriklerin tadını çıkar.",
    cookie_text: "Sitemiz, deneyiminizi iyileştirmek için çerezler kullanır. Devam ederek çerez politikamızı kabul etmiş olursunuz.",
    accept: "Kabul Et",
    cookie_policy: "Çerez Politikası"
  },
  en: {
    seo_title: "Galaxy Battle Zone - Play Free Space Shooter Games",
    seo_description: "Galaxy Battle Zone: Play the best free HTML5 space shooter games online. Compete for the top score!",
    seo_ogdesc: "Play free online HTML5 space shooter games!",
    site_title: "Galaxy Battle Zone",
    nav_games: "Games",
    nav_about: "About",
    hero_headline: "Defend the Galaxy – Play Free Space Games!",
    hero_desc: "Blast asteroids, battle aliens, and conquer the galaxy. Play now and reach high scores!",
    play_now: "Play Now",
    popular_games: "Popular Games",
    game1_desc: "Destroy enemies and survive in space!",
    game2_desc: "Fast-paced space action!",
    game3_desc: "Retro neon space invaders!",
    game4_desc: "Epic bosses and endless waves!",
    game5_desc: "Colorful bullet hell action!",
    game6_desc: "Crush asteroids, upgrade your ship!",
    game7_desc: "Launch rockets into deep space!",
    game8_desc: "Run with a jetpack in outer space!",
    play_btn: "Play",
    about_title: "About Galaxy Battle Zone",
    about_desc: "Galaxy Battle Zone is your portal to the best space shooter games! All games are mobile-friendly and free to play. Compete in rankings, join tournaments, and enjoy new content every week.",
    cookie_text: "We use cookies to improve your experience. By continuing, you accept our cookie policy.",
    accept: "Accept",
    cookie_policy: "Cookie Policy"
  }
};

document.getElementById('languageSelect').addEventListener('change', function() {
  setLanguage(this.value);
});
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (languageData[lang] && languageData[lang][key]) {
      el.textContent = languageData[lang][key];
    }
  });
  document.documentElement.lang = lang;
  document.title = languageData[lang].seo_title;
  document.querySelector('meta[name="description"]').setAttribute('content', languageData[lang].seo_description);
  document.querySelector('meta[property="og:title"]').setAttribute('content', languageData[lang].seo_title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', languageData[lang].seo_ogdesc);
}
setLanguage('tr');

const gameUrls = {
  spacebattle: "https://games.cdn.famobi.com/html5games/s/space-battle/v200/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  galaxyshooter: "https://games.cdn.famobi.com/html5games/s/galaxy-shooter/v110/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  neoninvaders: "https://games.cdn.famobi.com/html5games/s/neon-invaders/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  galaxywarriors: "https://games.cdn.famobi.com/html5games/s/galaxy-warriors/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  spaceblaze2: "https://games.cdn.famobi.com/html5games/s/space-blaze-2/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  asteroidcrusher: "https://games.cdn.famobi.com/html5games/s/asteroid-crusher/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  spacefrontier: "https://games.cdn.famobi.com/html5games/s/space-frontier-online/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1",
  jetpackjoyride: "https://games.cdn.famobi.com/html5games/s/jetpack-joyride/v010/?fg_domain=play.famobi.com&fg_aid=A1000-1"
};
function showGame(game) {
  const modal = document.getElementById('gameModal');
  const frame = document.getElementById('gameFrame');
  frame.src = gameUrls[game];
  modal.classList.add('active');
  modal.style.display = 'flex';
}
function closeGame() {
  document.getElementById('gameModal').classList.remove('active');
  document.getElementById('gameModal').style.display = 'none';
  document.getElementById('gameFrame').src = '';
}

// Cookie Consent
window.addEventListener("DOMContentLoaded", function() {
  const cookieBox = document.getElementById("cookieConsent");
  if (localStorage.getItem("cookieAccepted") === "yes") {
    cookieBox.style.display = "none";
  }
  document.getElementById("acceptCookies").onclick = function() {
    localStorage.setItem("cookieAccepted", "yes");
    cookieBox.style.display = "none";
  };
});
