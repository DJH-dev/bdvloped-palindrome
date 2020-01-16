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
    return (this.content.match(/[a-z]/gi) || []).join("");
  };

  //Returns true for a palindrom, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  //Returns the content in uppercase form.
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}
