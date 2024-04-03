const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const farmAnimals = 'cow horse sheep pig chicken'
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
console.log(moo, neigh,baa,oink,cluck);


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const remainingAnimals = farmAnimals.split(' ')
let deleteHorse = remainingAnimals.splice(1,1);
console.log(remainingAnimals);
const [bessie, dolly, babe, little] = remainingAnimals
console.log(bessie, dolly, babe, little);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
remainingAnimals.splice(3,1)
console.log(remainingAnimals);
const [blackAndWhite, black, pink] = remainingAnimals
console.log(blackAndWhite, black, pink);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors


// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let indig = colors.splice(5,1)
const [r,o,y,g,b,v] = colors
console.log(r,o,y,g,b,v);
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [indg] = indig
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet;


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const {album: {theMuppetMovie: { song2, song4 }}, nestedJob: kermitJob, nestedPartner: kermitPartner} = nestedMuppet;


console.log(song2);
console.log(song4);
console.log(nestedJob);
console.log(nestedPartner);