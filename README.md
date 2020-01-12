# Phrase object (with palindrome detector)

this is a sample NPM module created in [Learn Enough JavaScript to Be Dangerous](https://www.learnenough.com/) by Michael Hartl.

The module can be used as follows:

```
$ npm install --global bdvloped-palindrome
$ vim test.js
let Phrase = require("bdvloped-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
