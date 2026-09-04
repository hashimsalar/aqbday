# Alinah's birthday site: how to use and edit

It is a plain website. Nothing to install.

## Open it
Double-click **`index.html`**. It opens in your browser and works offline.

## Passwords
Both live in `assets/js/gate.js` near the top.

- **563453** gets you into the site. Every page asks for it.
- **aqonly** is a second door on **Poetry** and **Puzzle**.

Each is typed once and sticks until the browser tab is closed. Poetry and Puzzle
keep separate second doors, so opening one does not open the other.
To put the second lock on another page, load the gate like this in that page's
`<head>`:

```html
<script src="assets/js/gate.js" data-page-lock="1"></script>
```

Drop the `data-page-lock="1"` bit to take it off again.

## What is on the site
`index.html` (message and the wishes wall), `gallery.html` (132 photos),
`puzzle.html`, `jeopardy.html`, `poetry.html`.

The birthday cards section and the videos section are gone, since nobody sent
either. Ask and they can come back.

## Photos
All 132 are already in, shuffled, as `a001` to `a132`. Full size in
`assets/photos/`, grid copies in `assets/photos/thumb/`. `a001` is
`primary.jpeg`, which is also the portrait on the home page.
`assets/photos/PHOTO-MANIFEST.txt` says which original became which slot.

They have no hover captions. To give one a caption, find its line in the
`photos:` list in `assets/js/data.js` and type between the quotes:

```js
{ src: "a017", cap: "the night nobody remembers" },
```

`span: 2` on a line makes it a big ★ tile. Adding or removing photos is covered
in `assets/photos/PUT-PHOTOS-HERE.txt`.

## The message and the wishes
The big card near the top of the home page is the `birthdayMessage:` list in
`assets/js/data.js`. First line renders large, last line renders as the
signature, everything between is a normal paragraph.

The wall below it is the `wishes:` list. It is ordered longest to shortest on
purpose: anything over 200 characters takes a double-width card and leads the
wall, and the short ones tuck in underneath. Keep that order when you add one.
Copy any line to add another:

```js
{ from: "Name", text: "their message" },
```

Leave `from` empty for an anonymous one.

## Jeopardy
Open `jeopardy.html`. Pick 1 to 4 teams, name them, hit Start. The board tracks
scores, highlights whose turn it is, and rotates after every clue. Reveal the
answer, then tap "Got it +", "Wrong −" or "Skip".

**Scores can also be typed.** Every team's number is an editable box: tap it,
type the score, press Enter. Useful for the bonus points and for arguments.

All 25 questions and answers are in `data.js` under `jeopardy`, in five
categories: Pre-AKU / Childhood, Current Interests, AKU Life, Likes and
Dislikes, Random. The bonus points are written into the answer text, which is
why some say "+100 if you say both". Edit any of them there.

## Poems
The `poems:` list in `data.js`: Shakespeare's Sonnet 104, a Faiz Ahmed Faiz
ghazal, a Parveen Shakir ghazal, then two unsigned ones. Add `rtl: true` to a
poem and it renders right to left in Nastaliq, which is how the Urdu ones work.
`poet:` is a name in Urdu, `author:` a name in English. Leave both out and the
poem shows with no name under it.

## Puzzle answers, so you do not lock yourself out
1. **school**  2. **cat**  3. **bestie**  4. **best friends**

Those are the defaults. Swap the clues in `data.js` for things only she would
know, then update this list.

## Put it online (optional, free)
Drag the whole folder onto **netlify.com/drop** for a shareable link. GitHub
Pages and Vercel work too. Both passwords still apply. The `Pictures` folder is
the original import and does not need to be uploaded.
