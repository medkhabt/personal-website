# Goal 
Have more detailed stats on the typing of the user. 
    - which character is typed the slowest. 
    - which combinaison is the slowest, more erros on it. 
    - which hand is weaker 
    - character statistic based on the character before it (maybe also after it, thinking about the next character ? ). 
    - familiar words and not so familiar words. 
    - familiar combos ( sequence of words) and the slowest sequence with a higher freqency.
To be honest, i might get more ideas in the future, but the important thing here 
is to capture the speed of each character being typed with the metadata about 
it's position.  
    - Suggest texts that are challeging for the user based on its character weaknesses
naive way of doing it, is taking the 3 worst characters for the user and count the 
texts searching for texts with those 3 worst characters 
        - Maybe a more advance way would be to do a character analysis on 
the text, give each text a ranking on a type of weakness. 

# Idea for the implemetation 
Just to continue on what i ended with in the last section. 
I need to store for now: 
    - position of the character. 
    - the character.
    - the speed of typing the character from the last one. 

but also i need to check with the sentence that is being written.

The idea for now would be. have a counter, when detecting change in input, check the last character and check the size.
Normal state : 
    - if the character is the same as the pointed character in the text and the size is the same as the counter + 1 the counter goes by one..
and we save the object. 
    - if the character is not, the counter doesn't move, and an new error is saved {position, character}, and we are in error state. 
    - if the counter reaches the string length we stop.
    - Space is the beginning of a new word, so clean up the input and add that space.
Error state: 
    - if we are in error state and size increase with add the character to the history of the error.  
    - if we are in error state and the size decreases by one, we get out of the error state and go back to Normal state. 

Take in consideration the words context, and it's time. 
calculate word per minutes :( all characters / 5  / time )
when ever we are detecting a space, it means the word ended : 
    - clear the input 
    - add word context : words = [{start: x, end:y }] 

So i need a stateManager. Error struct, stroke struct. 

let's start with the simplest thing. 
1 - detect input change 
2 - save each stroke. 
3 - add sentence to match 
4 - add comparaison with assuming that there is no erros. 


# Quote and text generation 
for now i am using an api provided by an individual, i have a function that can generate an amount of quotes from its api and save it in the database for use .
But it might be more interesting to use [google book api](https://developers.google.com/books/docs/v1/using?hl=de) or [open library api](https://openlibrary.org/dev/docs/api/books)
I am not quite sure if they have quotes also or if it is more related to the metadata of books.
Than there is good reads api but someone said that it shutdown ( the message was 6 months ago on reddit [link reddit](https://www.reddit.com/r/SideProject/comments/17o1yen/hi_any_good_alternatives_to_goodreads_api_they/), 
I found the quotes on there website but idk if they provide it on their api.

