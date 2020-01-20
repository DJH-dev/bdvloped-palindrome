module.exports = Phrase;

//Add `reverse` to all strings
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("");
};

String.prototype.blank = function() {
  return !!this.match(/^\s*$/gm);
};

Array.prototype.last = function() {
  return this.pop();
};

//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  //Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  //Returns the letters in the content.
  this.letters = function letters() {
    const lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join("");
  };

  //Returns true for a palindrom, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}
