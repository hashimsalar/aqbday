/* =====================================================================
   ALINAH · Birthday Site CONTENT
   ---------------------------------------------------------------------
   EVERYTHING you might want to change lives in THIS ONE FILE.
   Edit the text between the "quotes", save, and refresh the page.
   Add or remove items by copying a block and changing its text.
   (Keep the commas and { } brackets where they are.)

   Anything marked ✏️ EDIT is a placeholder waiting for a real answer.
   Search this file for "EDIT" to find them all.
   ===================================================================== */

const SITE = {

  /* ---------- Basics ---------- */
  name: "Alinah",
  fullName: "Alinah Qureshi",
  heroGreeting: "Happy Birthday",
  heroSubtitle: "To the friend who somewhere along the way turned into family",
  // The big warm portrait used on the home page hero:
  heroPhoto: "assets/photos/a001.jpg",

  /* ---------- Home: the main birthday message ---------- */
  birthdayMessage: [
    "Alinah,",
    "Thank you for always having my back. For sitting through hours of my bakk bakk without ever once telling me to stop, and for defending my worst opinions, or at least hearing them out properly before telling me I am wrong.",
    "You have been steady about it for years, through the good stretches and the ones I would rather not talk about, and I do not think you know how much that has quietly held me together.",
    "Happy birthday. I hope this year hands you back everything you keep giving everybody else.",
    "Your bestie, Hashim Salar"
  ],

  /* ---------- Home: "Reasons" that rotate on the hero ---------- */
  reasons: [
    "your laugh",
    "the way you roll your eyes at me",
    "how you say my name when you are annoyed",
    "that you always pick up",
    "how you defend people who are not in the room",
    "the way you check in for no reason at all",
    "that you remember the small things nobody mentions twice",
    "how you make everyone feel included",
    "the advice you give whether or not anyone asked",
    "that you have never once made me feel like a burden"
  ],

  /* ---------- Home: Wishes ----------
     The written ones come first, then the short ones.
     ADD MORE by copying a { ... } block. Leave 'from' blank for anonymous. */
  wishes: [
    // Ordered longest to shortest. Anything over 200 characters takes a
    // double-width card, so the written-out ones lead the wall.
    // A \n in the text starts a new paragraph inside the same card.
    { from: "Noor", text: "Happy birthday Alinah ❤️❤️\nCan’t believe I’ve known you for the past 5 years and that we’ve made SO many core memories together. From laughing so hard when we almost missed our flight back to Khi, to you being my most favourite CP throughout med school !! I genuinely didnt vibe this much w any other cp of mine. I know you’re going to raise the bar for surgeons because not only will you be absolutely spectacular at work, but you’ll also know how to actually enjoy life outside the hospital (hopefully). I love you so much and I’m so lucky to have come across you (smth good came out of AKU). Here’s to so many more memories & laughters together. And I better see you DANCING at my mehendi!!! 💃🏻😭" },
    { from: "Musa", text: "Happy birthday AQutie\nFor someone I fight with literally all the time, you really are one of my absolute favourite people and my bestie. From all the plans at your place, dragging me out of my room, and taking me around Karachi to eat at places I would’ve never found myself while I backseat drive and prevent your accidents. Girlie med school genuinely wouldn’t have been the same without you.\nI’m very, very grateful for you, even if I refuse to show it 90% of the time. Allah tumhein hamesha khush rakhay, and I hope this year is full of good food, good people, and everything you want.\nLove you loads. Bas Hashim se thori kam dosti rakho, baaki you’re perfect." },
    { from: "Laiba", text: "Happy Birthday, Alinah! 💗 We’ve been friends since Foundation, and it’s honestly been one long ride. There have been times when we were super close and times when we weren’t, but through it all, you’ve been a part of some of my most special memories at med school. I hope you always keep smiling and that your smile stays as bright as your pink hair! 💕 Wishing you the happiest birthday and an amazing year ahead! 🩷" },
    { from: "Mama", text: "Happy birthday, my darling! I honestly don’t know how you grew up so fast when I clearly wasn’t ready for it! 😂. Watching you grow into the person you are today has been one of the greatest joys of my life. I hope life always brings you happiness, love, laughter, and everything your heart desires. You are so deeply loved, more than you will ever know, and I’m so lucky and grateful to be your mamma ❤️" },
    { from: "Naimal", text: "happy birthday alinah! you have a big heart that holds a lot of love and care for people around her and thats my favourite thing about you. and i hope that thoughtfulness is the one thing u hold close and not let go of as life goes on. i pray ur life is full of unconditional love and laughter, thank you for being u 💛" },
    { from: "Fiza Adnan", text: "Happpppppy birthday AQ ❤️💕🤍🙏🏻 may you have many many more! you are genuinely such a gem person, with how you conduct yourself, your humour and the amount of love and genuine care you have for those close to you. You a boss lady n always remember that" },
    { from: "Fariz", text: "Happy birthdayyy Alinah, Another year older, but thankfully still not mature :) Wishing you lots of happiness and success. Stay the same crazy person you’ve always been!" },
    { from: "Sheza", text: "Happiest birthday to Aq🥰😘 wishing u a year full of cookies croissants and strawberry dessert. Cant wait to see u be a kickass surgeon iA" },

    { from: "Hassan Naseer", text: "Happy birthday! Hope it is a great day." },
    { from: "Sophie", text: "Happy Birthday Alinah Api! Love Sophie" },
    { from: "Humza", text: "Happy birthday! Eat cake for me too 🍰" },
    { from: "Daniyal", text: "Happy Birthday Api, love Daniyal" }
  ],

  /* ---------- Gallery: the photos ----------
     Imported from the Pictures folder in a shuffled order.
     Full size in assets/photos/, grid copies in assets/photos/thumb/.
     PHOTO-MANIFEST.txt in assets/photos/ says which original is which.
     cap: "" means no hover caption. Type between the quotes to add one.
     span: 2 makes a big spotlight tile, marked with a ★. */
  photos: [
    { src: "a001", cap: "", span: 2 },
    { src: "a002", cap: "" },
    { src: "a003", cap: "" },
    { src: "a004", cap: "" },
    { src: "a005", cap: "" },
    { src: "a006", cap: "" },
    { src: "a007", cap: "" },
    { src: "a008", cap: "" },
    { src: "a009", cap: "", span: 2 },
    { src: "a010", cap: "" },
    { src: "a011", cap: "" },
    { src: "a012", cap: "" },
    { src: "a013", cap: "" },
    { src: "a014", cap: "" },
    { src: "a015", cap: "" },
    { src: "a016", cap: "", span: 2 },
    { src: "a017", cap: "" },
    { src: "a018", cap: "" },
    { src: "a019", cap: "" },
    { src: "a020", cap: "" },
    { src: "a021", cap: "" },
    { src: "a022", cap: "" },
    { src: "a023", cap: "", span: 2 },
    { src: "a024", cap: "" },
    { src: "a025", cap: "" },
    { src: "a026", cap: "" },
    { src: "a027", cap: "" },
    { src: "a028", cap: "" },
    { src: "a029", cap: "" },
    { src: "a030", cap: "" },
    { src: "a031", cap: "" },
    { src: "a032", cap: "" },
    { src: "a033", cap: "" },
    { src: "a034", cap: "", span: 2 },
    { src: "a035", cap: "" },
    { src: "a036", cap: "" },
    { src: "a037", cap: "" },
    { src: "a038", cap: "" },
    { src: "a039", cap: "" },
    { src: "a040", cap: "" },
    { src: "a041", cap: "" },
    { src: "a042", cap: "", span: 2 },
    { src: "a043", cap: "" },
    { src: "a044", cap: "" },
    { src: "a045", cap: "" },
    { src: "a046", cap: "" },
    { src: "a047", cap: "" },
    { src: "a048", cap: "" },
    { src: "a049", cap: "" },
    { src: "a050", cap: "", span: 2 },
    { src: "a051", cap: "" },
    { src: "a052", cap: "" },
    { src: "a053", cap: "" },
    { src: "a054", cap: "" },
    { src: "a055", cap: "" },
    { src: "a056", cap: "" },
    { src: "a057", cap: "" },
    { src: "a058", cap: "" },
    { src: "a059", cap: "", span: 2 },
    { src: "a060", cap: "" },
    { src: "a061", cap: "" },
    { src: "a062", cap: "" },
    { src: "a063", cap: "" },
    { src: "a064", cap: "", span: 2 },
    { src: "a065", cap: "" },
    { src: "a066", cap: "" },
    { src: "a067", cap: "" },
    { src: "a068", cap: "" },
    { src: "a069", cap: "" },
    { src: "a070", cap: "", span: 2 },
    { src: "a071", cap: "" },
    { src: "a072", cap: "" },
    { src: "a073", cap: "" },
    { src: "a074", cap: "" },
    { src: "a075", cap: "" },
    { src: "a076", cap: "" },
    { src: "a077", cap: "", span: 2 },
    { src: "a078", cap: "" },
    { src: "a079", cap: "" },
    { src: "a080", cap: "" },
    { src: "a081", cap: "" },
    { src: "a082", cap: "", span: 2 },
    { src: "a083", cap: "" },
    { src: "a084", cap: "" },
    { src: "a085", cap: "" },
    { src: "a086", cap: "" },
    { src: "a087", cap: "" },
    { src: "a088", cap: "" },
    { src: "a089", cap: "" },
    { src: "a090", cap: "" },
    { src: "a091", cap: "" },
    { src: "a092", cap: "" },
    { src: "a093", cap: "" },
    { src: "a094", cap: "" },
    { src: "a095", cap: "" },
    { src: "a096", cap: "" },
    { src: "a097", cap: "", span: 2 },
    { src: "a098", cap: "" },
    { src: "a099", cap: "" },
    { src: "a100", cap: "" },
    { src: "a101", cap: "" },
    { src: "a102", cap: "", span: 2 },
    { src: "a103", cap: "" },
    { src: "a104", cap: "" },
    { src: "a105", cap: "" },
    { src: "a106", cap: "" },
    { src: "a107", cap: "" },
    { src: "a108", cap: "", span: 2 },
    { src: "a109", cap: "" },
    { src: "a110", cap: "" },
    { src: "a111", cap: "" },
    { src: "a112", cap: "" },
    { src: "a113", cap: "" },
    { src: "a114", cap: "" },
    { src: "a115", cap: "", span: 2 },
    { src: "a116", cap: "" },
    { src: "a117", cap: "" },
    { src: "a118", cap: "" },
    { src: "a119", cap: "" },
    { src: "a120", cap: "" },
    { src: "a121", cap: "", span: 2 },
    { src: "a122", cap: "" },
    { src: "a123", cap: "" },
    { src: "a124", cap: "" },
    { src: "a125", cap: "" },
    { src: "a126", cap: "", span: 2 },
    { src: "a127", cap: "" },
    { src: "a128", cap: "" },
    { src: "a129", cap: "" },
    { src: "a130", cap: "" },
    { src: "a131", cap: "" },
    { src: "a132", cap: "" }
  ],

  /* ---------- Poetry ----------
     Add poems by copying a { ... } block.
     Each string in 'lines' becomes one line. "" makes a blank line.
     For an Urdu poem, add  rtl: true  and it renders right to left in a
     Nastaliq font automatically. 'poet' is the name in Urdu, 'author' is
     the name in English, 'note' is the small grey line underneath. */
  poems: [
    {
      title: "Sonnet 104: To me, fair friend, you never can be old",
      author: "William Shakespeare",
      note: "William Shakespeare at the Poetry Foundation",
      source: "https://www.poetryfoundation.org/poets/william-shakespeare",
      lines: [
        "To me, fair friend, you never can be old,",
        "For as you were when first your eye I eyed,",
        "Such seems your beauty still. Three winters cold",
        "Have from the forests shook three summers' pride,",
        "Three beauteous springs to yellow autumn turned",
        "In process of the seasons have I seen,",
        "Three April perfumes in three hot Junes burned,",
        "Since first I saw you fresh, which yet are green.",
        "Ah, yet doth beauty, like a dial-hand,",
        "Steal from his figure, and no pace perceived;",
        "So your sweet hue, which methinks still doth stand,",
        "Hath motion, and mine eye may be deceived:",
        "For fear of which, hear this, thou age unbred:",
        "Ere you were born was beauty's summer dead."
      ]
    },
    {
      title: "کب یاد میں تیرا ساتھ نہیں",
      rtl: true,
      poet: "فیض احمد فیض",
      note: "Ghazal by Faiz Ahmed Faiz",
      lines: [
        "کب یاد میں تیرا ساتھ نہیں کب ہاتھ میں تیرا ہاتھ نہیں",
        "صد شکر کہ اپنی راتوں میں اب ہجر کی کوئی رات نہیں",
        "",
        "مشکل ہیں اگر حالات وہاں دل بیچ آئیں جاں دے آئیں",
        "دل والو کوچۂ جاناں میں کیا ایسے بھی حالات نہیں",
        "",
        "جس دھج سے کوئی مقتل میں گیا وہ شان سلامت رہتی ہے",
        "یہ جان تو آنی جانی ہے اس جاں کی تو کوئی بات نہیں",
        "",
        "میدان وفا دربار نہیں یاں نام و نسب کی پوچھ کہاں",
        "عاشق تو کسی کا نام نہیں کچھ عشق کسی کی ذات نہیں",
        "",
        "گر بازی عشق کی بازی ہے جو چاہو لگا دو ڈر کیسا",
        "گر جیت گئے تو کیا کہنا ہارے بھی تو بازی مات نہیں"
      ]
    },
    {
      title: "کو بہ کو پھیل گئی بات شناسائی کی",
      rtl: true,
      poet: "پروین شاکر",
      note: "Ghazal by Parveen Shakir",
      lines: [
        "کو بہ کو پھیل گئی بات شناسائی کی",
        "اس نے خوشبو کی طرح میری پذیرائی کی",
        "",
        "کیسے کہہ دوں کہ مجھے چھوڑ دیا ہے اس نے",
        "بات تو سچ ہے مگر بات ہے رسوائی کی",
        "",
        "وہ کہیں بھی گیا لوٹا تو مرے پاس آیا",
        "بس یہی بات ہے اچھی مرے ہرجائی کی",
        "",
        "تیرا پہلو ترے دل کی طرح آباد رہے",
        "تجھ پہ گزرے نہ قیامت شب تنہائی کی",
        "",
        "اس نے جلتی ہوئی پیشانی پہ جب ہاتھ رکھا",
        "روح تک آ گئی تاثیر مسیحائی کی",
        "",
        "اب بھی برسات کی راتوں میں بدن ٹوٹتا ہے",
        "جاگ اٹھتی ہیں عجب خواہشیں انگڑائی کی"
      ]
    },
    {
      title: "Ordinary Tuesday",
      lines: [
        "You fell asleep mid voice note again,",
        "phone still warm, sentence unfinished,",
        "and I sat there like an idiot, grinning,",
        "listening to you breathe for nine whole seconds.",
        "",
        "That is the whole secret, really.",
        "I like you most when nothing is happening.",
        "The chips going cold between us,",
        "you rolling your eyes at a joke you swore was not funny.",
        "",
        "People spend years chasing a feeling",
        "and I found mine watching you steal the last fry.",
        "So happy birthday, you difficult, brilliant thing.",
        "I would sit through a hundred more boring afternoons with you."
      ]
    },
    {
      title: "Emergency Contact",
      lines: [
        "Everyone gets a person.",
        "Mine picks up on the second ring,",
        "says my name like a question,",
        "and is already reaching for her keys.",
        "",
        "Not the friend who agrees with me.",
        "The one who tells me I am being ridiculous",
        "and then shows up anyway,",
        "with food, and a plan, and no judgement.",
        "",
        "Happy birthday to my emergency contact,",
        "my group chat, my second opinion,",
        "my witness. Whatever this year throws,",
        "it still has to get through both of us."
      ]
    }
  ],

  /* ---------- Cryptic Puzzle ----------
     Answers are checked case-insensitively and ignore spaces and punctuation.
     'accept' is an optional list of extra accepted answers.
     ✏️ SWAP the clues and answers below for things only Alinah would know. */
  puzzle: {
    intro: "Cake comes later. First you have to get through this. Four clues, each one opens the next, and there is something waiting at the end. 🔓",
    stages: [
      {
        // ✏️ EDIT: change this to the real place the two of you met.
        clue: "Where it all started. The place we first met and then never shut up again. (One word.)",
        hint: "First day, first room, the moment I realised you were funny.",
        answer: "school",
        accept: ["college", "university", "uni"]
      },
      {
        // ✏️ EDIT: change 'cat' to whatever she would actually adopt on sight.
        clue: "The animal she would adopt on sight, no questions asked, no space for it at home. (Just the animal.)",
        hint: "It purrs. It also ignores her completely.",
        answer: "cat",
        accept: ["cats", "kitten", "a cat"]
      },
      {
        // ✏️ EDIT: scramble a word that means something to the two of you.
        clue: "Unscramble what she is to me, and what I am to her: E I T S E B",
        hint: "Six letters. It is the entire reason this website exists.",
        answer: "bestie",
        accept: ["besties"]
      },
      {
        clue: "Last one. Every letter has been shifted forward by one. Decode: CFTU GSJFOET",
        hint: "Shift each letter back by one. Two words, and you already know them.",
        answer: "best friends",
        accept: ["bestfriends", "best friend"]
      }
    ],
    reward: {
      title: "You did it. 💛",
      message: [
        "Obviously you got it. You always do.",
        "Here is what the lock was hiding:",
        "You are the person I call first, about anything, good or bad. That is the whole thing. There was never a bigger secret than that.",
        "Happy birthday, Alinah. Now go and read the poems."
      ]
    }
  },

  /* ---------- Jeopardy ----------
     The questions below are ready to play. The ANSWERS are placeholders:
     open this file, find each ✏️ EDIT, and drop in the real answer.

     The "Where Were We?" category uses 5 photos as clues. Drop the files
     into assets/jeopardy/ named exactly as the 'img' path says. */
  jeopardy: {
    intro: "This is Alinah! Pick a tile, say your answer out loud, then reveal. Scores are on the honour system, and you can type them in by hand if somebody cheats.",
    categories: [
      {
        name: "Pre-AKU / Childhood",
        clues: [
          { value: 100, clue: "What is the address of Alinah's childhood house?", answer: "F53 Clifton Block 5" },
          { value: 200, clue: "Who is Alinah's favourite cousin?", answer: "Maham" },
          { value: 300, clue: "What country was AQ born in?", answer: "The USA" },
          { value: 400, clue: "What university did AQ go to before AKU? Bonus 100 points if you know the major.", answer: "McMaster. Bonus: Life Sciences." },
          { value: 500, clue: "What was AQ's first, childhood name?", answer: "Zainab / Zaynah" }
        ]
      },
      {
        name: "Current Interests",
        clues: [
          { value: 100, clue: "What kind of surgery does Alinah want to do?", answer: "Breast. (Half points for vascular.)" },
          { value: 200, clue: "What is Alinah's favourite cartoon or anime?", answer: "Avatar" },
          { value: 300, clue: "The one country she would go to if she could?", answer: "Japan. (Bali also counts.)" },
          { value: 400, clue: "What song is Alinah's most played of the summer?", answer: "Janice STFU by Drake" },
          { value: 500, clue: "What does Alinah do these days at 6 AM?", answer: "Plays the piano" }
        ]
      },
      {
        name: "AKU Life",
        clues: [
          { value: 100, clue: "What is AQ most likely to buy from SnT?", answer: "Chaaye or jellies. Either one counts." },
          { value: 200, clue: "What has Alinah lost a couple of times at AKU? (+100 if you say both.)", answer: "Jewellery and AirPods" },
          { value: 300, clue: "What OTHER colour has Alinah dyed her hair?", answer: "Purple" },
          { value: 400, clue: "What type of earrings does Alinah like to wear?", answer: "Jhumkas" },
          { value: 500, clue: "What was Alinah's most drunk drink at electives?", answer: "Celsius" }
        ]
      },
      {
        name: "Likes and Dislikes",
        clues: [
          { value: 100, clue: "What is the only thing Alinah likes shopping for? (+100 if you say both.)", answer: "Snacks and groceries" },
          { value: 200, clue: "What is Alinah's favourite grocery store in Karachi?", answer: "Springs" },
          { value: 300, clue: "What is Alinah's favourite imported jelly?", answer: "Jolly Ranchers" },
          { value: 400, clue: "What was Alinah's go-to comfort meal to order? (+100 if you say both.)", answer: "Sandwich and fries from Milano, and green curry" },
          { value: 500, clue: "Alinah's favourite Disney princess?", answer: "Mulan" }
        ]
      },
      {
        name: "Random",
        clues: [
          { value: 100, clue: "What surgery did AQ have in 3rd year? +100 points if you can name the surgeon.", answer: "DNS. Bonus: Akbar Abbas." },
          { value: 200, clue: "If Alinah could play one sport for life, what would it be?", answer: "Volleyball. (Squash does not count unless AQ says so.)" },
          { value: 300, clue: "What is Alinah's comfort show to watch?", answer: "Parks and Recreation. (The Mentalist these days, so that works too.)" },
          { value: 400, clue: "What is AQ's favourite perfume? (Any of them gets the points.)", answer: "Miss Dior, or the Miniso green tea one" },
          { value: 500, clue: "What did Alinah dress up as for Halloween in 2nd year?", answer: "A pirate" }
        ]
      }
    ]
  }
};
