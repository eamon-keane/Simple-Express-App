var book = require("../lib/grades").book;

exports["setUp"] = function(callback){

    book.reset();
    callback();
}


exports["Can add new grade"]=function(test){
    book.addGrade(90);
    var count = book.getCountOfGrades();
    test.equal(count,1);
    test.done();
}

exports["Can average grades"] = function(test){
    book.addGrade(100);
    book.addGrade(50);

    var average = book.getAverage();
    test.equal(average,75);
    test.done();

}

exports["Can compute a grade of A"] = function(test){
    book.addGrade(100);
    book.addGrade(90);

    var result = book.getLetterGrade();

    test.equal(result, 'A');
    test.done();
}

exports["Can compute a grade of B"] = function(test){
    book.addGrade(80);
    book.addGrade(80);

    var result = book.getLetterGrade();

    test.equal(result,'B');
    test.done();
}
exports["Can compute a grade of C"] = function(test){
    book.addGrade(79.9);

    var result = book.getLetterGrade();

    test.equal(result,'C');
    test.done();
}
exports["Can compute a grade of D"] = function(test){
    book.addGrade(40);
    book.addGrade(80);

    var result = book.getLetterGrade();

    test.equal(result,'D');
    test.done();
}

exports["Can compute a grade of F"] = function(test){
    book.addGrade(100);
    book.addGrade(0);

    var result = book.getLetterGrade();

    test.equal(result,'F');
    test.done();
}