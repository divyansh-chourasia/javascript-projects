# JavaScript projects

Nine separate pages. Each folder has its own `index.html`, stylesheet, and script. Nothing is shared, and there is no install step.

Open that folder's `index.html` in a browser.

## countdown_timer

A "we are coming soon" page. The end is fixed in `js/app.js` as `4 september 2023 3:39 PM`, and that string is also written on the page. Once a second it fills Days, Hours, Minutes, and Seconds. After that moment the function returns immediately, so the four fields stay at 0.

## random_password_generator

Builds a password from the boxes you leave checked: uppercase, lowercase, digits, and the symbols ``~!@#$%^&*()_+/``. Length defaults to 10. The number input allows 2 to 30. Generate runs once when the page loads, and again when you click the button.

It adds one character from each checked set, then keeps going until it reaches the length, then cuts the string to that length. With every box unchecked, Generate calls itself until the page locks up.

## notes_app

Add Note appends a textarea. The save icon, leaving the textarea, and the trash icon all write the current notes to `localStorage` under the key `notes`. Trash removes that note first. An empty list deletes the key. The first visit, with nothing saved, starts you on one blank note. The icons come from the Font Awesome script in the page.

## quiz_app

Four fixed questions about HTML, CSS, and JavaScript. Each has four radio choices. Submit scores the selected letter and loads the next question. A submit with nothing selected counts as wrong. After the fourth answer the box is replaced with how many were right out of 4.

## random-para-generator

Nine paragraphs are stored in `app.js`. The number next to Paragraphs starts at 5. Generate shuffles that list and shows the first N paragraphs when N is from 0 through 9. Any other value shows one paragraph at random. 0 shows nothing.

## to-do-list

Type in the box and press Enter. Blank lines are ignored. Click a row to mark it done, and click the × to remove it. The list is only in the page. A reload clears it. The × comes from the Font Awesome script in the page.

## github-profile-app

On load it asks GitHub for the user `bhagirath-wscubetech` and draws a card: photo, name, bio, followers, following, and public repo count. Each repo is a link to that repo. The search box runs when it loses focus, then clears. The tag around the box is `<for>`, so Enter does not submit it. An unknown username still replaces the card, with empty fields, and listing repos fails.

## movie-search

On load it shows the first page of popular movies. Each poster uses the movie image, or `img/image-missing.png` when there is no poster. That file is not in this folder. The hover text is the title, the vote average, and the overview. Typing in the search box searches on every change. Clearing the box returns to the popular list. The API key is written in `js/app.js`.

## random_color _generator

The folder name includes a space. The page opens with `#fff` in the heading. Click me picks an integer from 0 up to 16777214, turns it into a hex code, paints the page that color, shows the code, and copies it. Values that need fewer than six hex digits are not padded.
