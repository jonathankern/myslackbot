# myslackbot
New Year Countdown Slackbot

## What does the bot do?

The New Year Countdown Slackbot counts down to the new year in days, hours, minutes, seconds or the total amount of time for all variants.

## What commands can be used?

#### @bluebot When will this year be over?
returns the total amount of time ie. '26 days, 19 hours, 18 minutes, and 55 seconds' and it also included a 'cheers' giphy.

#### How many [wildcard] until the new year?
The [wildcard] is dependant on user input and returns as follows:

days - @user x days
hours - @user x hours
minutes - @user x minutes
seconds - @user x seconds

anything else
"That doesn't make sense! Try again." with a "that doesn't make sense" giphy


## Approach taken...

After I had the initial idea of creating a slackbot which was able to countdown to the new year, I researched various Date() methods and decided to calculate the amount of days, hours, minutes, seconds and the total amount of time remaining. Once this was working properly, I added functionality such as respond, send, reply, and wildcard to interact with the bot. Finally, I wanted to add giphys to the responses using the Giphy API. This part has not been completed and for the time being, I have hard coded a couple of giphys.


## Unsolved problems / Future directions

I wanted to integrate with the Giphy API, so a giphy would be included with the response. I couldn't figure it out, so for the time being, I chose specific animated gifs to use.

I wanted to display the countdown timer in real-time but I could only get static responses.

I wanted to style the responses but could not find a way to add CSS.
