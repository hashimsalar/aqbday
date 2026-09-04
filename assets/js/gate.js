/* Friendly password gates for a birthday surprise. Not real security.
   ---------------------------------------------------------------------
   There are TWO passwords, both set right here:

     SITE_PW  covers every page.
     PAGE_PW  is a second door, and only pages that ask for it get it.
              A page asks by loading this file like so:
              <script src="assets/js/gate.js" data-page-lock="1"></script>
              (Poetry and Puzzle do that. The others don't.)
              Each page keeps its own second door, so opening Puzzle does
              not also open Poetry. Both use the same password.

   Each password is remembered until the browser tab is closed. */
(function(){
  var SITE_PW = "563453";
  var PAGE_PW = "aqonly";

  var script = document.currentScript;
  var wantsPageLock = !!(script && script.getAttribute("data-page-lock"));

  var LOCKS = [
    {
      key:"aq_unlocked", pw:SITE_PW,
      emoji:"🔐",
      title:"For Alinah’s eyes",
      sub:"Enter the password to come in.",
      numeric:true
    },
    {
      key:"aq_page_unlocked_" + (location.pathname.split("/").pop() || "page"), pw:PAGE_PW,
      emoji:"🔏",
      title:"One more door",
      sub:"This page has a password of its own.",
      numeric:false
    }
  ];

  function passed(lock){
    try { return sessionStorage.getItem(lock.key) === "1"; } catch(e){ return false; }
  }
  function remember(lock){
    try { sessionStorage.setItem(lock.key, "1"); } catch(e){}
  }

  // the queue of doors this page still needs opened, in order
  var queue = LOCKS.filter(function(lock, i){
    if (i === 1 && !wantsPageLock) return false;
    return !passed(lock);
  });
  if (!queue.length) return;

  document.documentElement.classList.add("locked");

  function show(lock, done){
    var ov = document.createElement("div");
    ov.id = "gate";
    ov.innerHTML =
      '<div class="gate-card">' +
        '<div class="gate-emoji">' + lock.emoji + '</div>' +
        '<h1 class="gate-title">' + lock.title + '</h1>' +
        '<p class="gate-sub">' + lock.sub + '</p>' +
        '<form id="gateForm" autocomplete="off">' +
          '<input id="gateInput" type="password"' +
            (lock.numeric ? ' inputmode="numeric"' : '') +
            ' placeholder="' + (lock.numeric ? "passcode" : "password") + '" aria-label="password">' +
          '<button class="btn" type="submit">Unlock</button>' +
        '</form>' +
        '<div id="gateMsg" class="gate-msg"></div>' +
      '</div>';
    document.documentElement.appendChild(ov);

    var form = ov.querySelector("#gateForm");
    var input = ov.querySelector("#gateInput");
    var msg = ov.querySelector("#gateMsg");
    var card = ov.querySelector(".gate-card");
    input.focus();

    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (input.value.trim().toLowerCase() === lock.pw.toLowerCase()){
        remember(lock);
        ov.classList.add("open-done");
        setTimeout(function(){
          if (ov.parentNode) ov.parentNode.removeChild(ov);
          done();
        }, 400);
      } else {
        msg.textContent = "Not quite. Try again.";
        input.value = ""; input.focus();
        card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
      }
    });
  }

  function next(){
    if (!queue.length){
      document.documentElement.classList.remove("locked");
      return;
    }
    show(queue.shift(), next);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", next);
  else next();
})();
