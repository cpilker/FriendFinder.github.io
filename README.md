# FriendFinder.github.io
## Purpose
* This program uses node express.js functionalities to run a local server for users to find friends - similar to a Match.com, except for friends. The base data is sustained in the /app/data/friends.js file, with a base set of friends. This can be expanded to include a DB such as mongo or firefox.

## *How to Use*
* Customers must have the following npm packages installed:
    * Express
    * Body-parser
    * Path
    * (Node of course)

* Upon downloading the modules, ensure your local server is running (no SQL database is required):
    * Open the local host URL displayed: http://locahost:3000
    * Select Open Survey
    * Input a user name & image 
        * The image does not need to be an actual image
    * Answer all user questions
    * Select submit

* After submission, the javascript language in the survey.html file will compare the existing friend base to your answers. The friend with the closest answers will be matched as your friend.

#### Key Notes
* This program does not validate based on individual answers, but a summation of your total score.
* Per the requirements of the assignment, calculations were based on finding the difference of each input and then summed; however, this same answer would be discovered through summing all answers.
* Future development would require comparing each answer and running a variance algorithm for each question.