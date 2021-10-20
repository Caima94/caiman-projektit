<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <title>Form a Story</title>
  </head>
  <body>
    <section id="top">
      <img src="https://content.codecademy.com/courses/learn-html-forms/formAStoryLogo.svg" alt="Form A Story Logo">
    </section>

    <section id="main">
      <h1>Complete the Form -<br> Complete the Story!</h1>
      <hr>
      <!--Add your form below:-->
      <form action="story.html" method="GET">
        <label for="animal-1">Animal:</label>
        <input id="animal-1" type="text" name="animal-1" required>
        <br>
        <label for="animal-2">Another Animal:</label>
        <input id="animal-2" type="text" name="animal-2" required>
        <br>
        <label for="animal-3">Another Animal:</label>
        <input  id="animal-3" type="text" name="animal-3" required>
        <br>
        <label for="adj-1">Adjective (past tense):</label>
        <input  id="adj-1" type="text" name="adj-1" required>
        <br>
        <label for="verb-1">Verb (ends in -ing):</label>
        <input  id="verb-1" type="text" name="verb-1" required>
        <br>
        <label for="num-1">Number:</label>
        <input  id="num-1" type="number" name="num-1" required>
        <br>
        <span> Yes or No:</span>
        <input id="yes" type="radio" name="answer" value="yes" required>
        <label for="yes"> Yes </label>
        <input id="no" type="radio" name="answer" value="no" required>
        <label for="no"> No </label>
        <br>
        <label for="speed"> Relative speed (end in -er):</label>
        <select id="speed" name="speed" required>
          <option value="slower">Slower</option>
          <option value="faster">Faster</option>
        </select>
        <br>
        <label for="quote"> Motivational Quote:</label>
        <input id="quote" name="quote" type="text" required list="quote-choices">
        <datalist id="quote-choices">
        <option value="Winner gets the ice cream!"></option>
        <option value="Velli on mahtavaa!"></option>
        <option value="Kiisseli miehen tiellä pitää!"></option>
        </datalist>
        <br>
        <label for="message"> Meaningful Message: </label>
        <br>
        <textarea id="message" name="message" required rows="8" cols="40"></textarea>
        <br>
        <input type="submit" value="Form My Story!">
        
      </form>
    </section>
  </body>
</html>
