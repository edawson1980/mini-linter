let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];



//break up string into an array of individual words:
let storyWords = story.split(" ");
console.log(storyWords.length);

//create a new array that holds all the words minus the words in unnecessaryWords
let betterWords = storyWords.filter(word => {
 return !word === unnecessaryWords.includes(word);
});
console.log(betterWords);


//find # of times an overused word appears in betterWords:
let really = 0;
let very = 0;
let basically = 0;

betterWords.forEach(word => {
  if(word === 'really'){
    really += 1;
  }else if(word === 'very'){
    very += 1;
  }else if(word === 'basically'){
    basically += 1;
  }else{
    return word;
  }
});
console.log(`really: ${really}, very: ${very}, basically: ${basically}`);

//find number of sentences in the story:
let sentenceCount = 0;
betterWords.forEach(word => {
  if((word.slice(-1) === '.') || (word.slice(-1) === '!')){
    sentenceCount += 1;
  };
});
console.log(`There are ${sentenceCount} sentences in this story.`)
