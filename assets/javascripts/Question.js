/**
 * Created by hanifa on 2/13/17.
 */
function  Questions(text, choice) {
    this.text = text;
    this.choice = choice;
}
Questions.prototype.getCorrectAnswer = function (yourAnswer) {
    return yourAnswer === this.answer;
}