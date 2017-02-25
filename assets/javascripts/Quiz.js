/**
 * Created by hanifa on 2/13/17.
 */

function Quiz(questions){
    this.score =0;
    this.questions = questions;
    this.questionIndex =0;
    this.wrongAnswer =0;
    this.quesTionsTimedOut =0;
    this.wrongCounts =0;
    this.skipCount =0;
    this.arrayCounter =0;
}

Quiz.prototype.getQuestionIndex =function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isended = function(){
   return this.questions.length === this.questionIndex;
}

Quiz.prototype.quess = function (choice) {

    $(".button").hide();
    $("#decision").hide();


    if(this.getQuestionIndex().getCorrectAnswer(choice)) {
        console.log("THis is the answer you selected " + choice);
        this.score++;
        $(".crrct").show();

    }

    else if(choice === "skip"){
        console.log("THis is the skip you selected "+choice);
        this.skipCount++;
        $(".skiprlt").show();

    }

    else {
        console.log("THis is the wrong you selected "+choice);
        this.wrongCounts++;
        $(".wrngrlt").show();

    }

    ++this.questionIndex;
};

function getNumberOfCorrectAnswers(){

}

function getNumberOfWrongAnswers(){

}
