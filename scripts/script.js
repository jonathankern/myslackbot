// Description: New Year's Countdown. A user can ask how many days / hours / mins / seconds until 2018.
//
//
// Dependencies:
//
//
// Configuration:
//
//
// Commands:
//



module.exports = function(robot) {

    // set new year's date
    let today = new Date();
    let newYearsDay = new Date(today.getFullYear() +1, 0, 1);

    // get time remaining
    let timeRemaining = Date.parse(newYearsDay) - Date.parse(new Date());
    let days = Math.floor(timeRemaining/(1000*60*60*24));
    let hours = Math.floor( (timeRemaining/(1000*60*60)) % 24);
    let minutes = Math.floor((timeRemaining/1000/60) % 60);
    let seconds = Math.floor(timeRemaining/(1000) % 60);

    let totalTimeRemaining = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds";

    robot.respond(/When will this year be over?/, function(res) {
        // giphy cheers
        return res.reply("This year will end in " + totalTimeRemaining + "!", "http://gph.is/2vSVA5I");
    });

    robot.hear(/How many (.*) until the new year?/, function(res) {
        let userInputVariant = res.match[1];

        seconds = Math.floor((newYearsDay - (today))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);

        // return statements depending on user input
        if (userInputVariant === 'days') {
            return res.reply(days + " " + userInputVariant);
        } else if (userInputVariant === 'hours') {
            return res.reply(hours + " " + userInputVariant);
        } else if (userInputVariant === 'minutes') {
            return res.reply(minutes + " " + userInputVariant);
        } else if (userInputVariant === 'seconds') {
            return res.reply(seconds + " " + userInputVariant);
        } else if (userInputVariant !== 'days' || userInputVariant !== 'hours' || userInputVariant !== 'minutes' || userInputVariant !== 'seconds' ) {
            // giphy that doesn't make sense
            return res.send("That doesn't make sense! Try again.", "http://gph.is/1KoXeLm");
        }

    });
};


