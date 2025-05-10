// Word lists for poem generation
const birds = {
    "California Gull": "middling—bigger than a Ring-billed Gull and smaller than a Herring, mantle darker slate than a Herring Gull but not even close to a Great Black-backed. More like a Lesser, if anything, but not even really, a friend says.",
    "Black Vulture, Ozzy": "likes to sit on the ground and look into the shade and bite my shins",
    "owls": "with one eye",
    "eagle": "with broken wings",
    "4 or 5 wild vultures": "hanging out on top of the cage",
    "White-plumed Antbird": "has a cinnamon body, a dusty gray cardigan, and a radiant white face mask, like the ritual follower of some lost sun god, or maybe a star-nosed mole; an obligate follower of ant swarms; she harvests the fear of ants; fearless herself; her bill is long enough for foliage gleaning; her wings can sally fine; she calls herself to ants",
    "Osprey": "Looks like a hawk but has no family other than its own family; has spent twenty million years alone",
    "Storm-petrel": "a narrow, slate-gray bird with a tube on its nose; an angled thing; have salt in their blood; fly hundres of miles out to sea to find food then, alone and unprompted, turn around t orelieve a parter who's warming a small, white egg in an underground burrow.; are about the divorce",
    "storm-petrel chick": "starving in its nest; hasn't been fed for four days; eyes closed and wet; smaller than when he was when he hatched.",
    "The Great Auk": "a large flightless bird of the cold north Atlantic that first went extinct in 1844; beautiful birds; you can still see the shape of them in Razorbills and murres; stuffed specimens are smaller than I'd guessed.",
    "grackle": "doesn't bear the light but resonates; black purple blue green yellow; like Andromeda, or an oil slick.",
    "killdeer mother": "droops her left leg and left wing and drags herself, limping, towards the pond water"
};

const places = [
    "a sharp November beach in Connecticut",
    "the nature center where I work before starting college",
    "massive outdoor aviaries",
    "a beach playground",
    "in a workbook that basically says stuff like, alright hotshot so you disemboweled your cat and put him in the oven, alright then, it says, did you put him on a baking sheet or right on the rack?",
    "on the next page",
    "mornings when my brain runs with the same fierce gravity towards something wonderful",
    "In the back of the museum",
    "in the wilting, hot tropics",
    "close enough to everything you love, far enough away that you will never know where to put that love, middle distance.",
    "under a Maple tree",
    "In Boston",
    "on a thin patch of grass by the library",
    "in the hot mulch under the shrubs",
    "in the middle of a gravel parking spot",
    "the Dunkin off Exit 41"
];

const times = [
    "early in the morning",
    "After camp closes for the day",
    "the time in my life that I learn about my brain",
    "When I close the door to my apartment",
    "When I tell my mom",
    "Seven years later",
    "Two years in",
    "In August, ten months after she leaves",
    "before and during and after there was anything to lose",
    "the next day",
    "every morning"
];

const verbs = [
    "know the bird because it's middling",
    "understand, and fiddle with the cracked lids and too-hot coffee from the Dunkin' off exit 41",
    "pull into the beach-side lot",
    "are held like guns",
    "clock the bird in less than ten minutes",
    "told me California Gulls flew to the Great Salt Lake to eat a plague of katydids",
    "flew 2,000 miles further east to do nothing at all.",
    "go in your life list: the permanent record of every bird you've seen, and where, and when, and with whom.",
    "start crying, if only I was ready to explain why.",
    "are memories of birds",
    "have no artists",
    "take an idea like a little marble or ping pong ball and runs it through hoops and traps, Rube Goldberg style, over popsicle sticks and dominos, generating images of such tragedy that it would be funny, if only it wasn't happening",
    "are not so much the images, but rather how I attend to them",
    "like that, you should let yourself roll around in. Of course, it didn't happen, I think.",
    "are not stupid. They know detachment is a call to grief.",
    "could always make a living in the wilting, hot tropics",
    "raid slices of forest",
    "found the swarm in her vast territory",
    "are such good luck,",
    "show up at her grandmother's funeral with honey and quilts.",
    "can feel so much for so many people over so long a life, even if you never do anything about it.",
    "are SUVs idling in parking lots all across the state.",
    "are spotting scopes mounted in the windows.",
    "are smaller than I'd guessed,",
    "tell me 'why do you have UTI content in this why is that something you're bringing up.'",
    "show me how to make my hair curly without looking like I went for a swim.",
    "stand me up and take six hundred pictures.",
    "meet each other for coffee the next day,",
    "sit side-by-side, shielding our eyes, listening to each other."
];

const people = [
    "A lapsing Mormon—up late learning to drink",
    "us from the Atlantic",
    "a 13 year old",
    "my grandfather picking a slug off the garden",
    "my cat",
    "a kid",
    "Shane",
    "Chloe",
    "my mom",
    "Elizabeth Bishop",
    "Katie and Emily",
    "Oliver",
    "Maya",
    "her mom",
    "her grandmother"
];

const birderVerbs = [
    "has made a fundamental mistake about their own discipline",
    "does not know their medium",
    "is like a carpenter who thinks the medium off carpentry is chairs",
    "is like a painter who thinks the medium of painting is faces",
    "thinks that the medium of birding is birds",
    "is a coward and journeyman",
    "daydreams about one of the popular kids torturing a robin's nest",
    "goes back and checks goes back and checks goes back and checks",
    "hears the ruckus and wades a few meters off the trail",
    "does stupid things like try to shoot all five ducks you are allowed to shoot",
    "grows slightly older and learns to experiment with method",
    "has only journeymen, who experiment with method",
    "steps out of a van and tells kids to put their binoculars away and listen",
    "tells me about phylogenetic birding-distinguishing birds not by species but by lineage",
    "would go home and write down Osprey the first time they saw it",
    "is better faster, weirder, more interesting than other birders. They are not any different. They remember the birds",
    "is desperate to understand myself and her",
    "silently repeats the gesture",
    "leaves for any number of reasons",
    "thinks they can talk about 'the sea'",
    "pulls him from the nest and gives him a tour of the world",
    "places him on moss",
    "touches his bill to a fern",
    "stays quiet",
    "makes a vague bargain",
    "sings near seals",
    "wants to stick her arm in freezing water and say it's like what we imagine knowledge to be / ... / flowing and drawn, and since / our knowledge is historical, flowing, and flown.",
    "should be better at talking about having and losing, flying and flown, seeing and forgetting?",
    "paid three sailors",
    "caught the last birds and strangled them to death",
    "crushed the egg with a boot",
    "drinks beer and drafts my Tinder bio",
    "ends up with a 'fun fact' about how I can't ride a bike.",
    "arrives sweating and promising 'I'm usually not so sweaty'",
    "is flat and brutal",
    "is quiet and studio-lit",
    "abdicates the naming of birds, or maybe abdicates knowing the names of birds"
];

const ingVerbs = [
    "chatting roughly with her lifelong partner",
    "reaping a cricket, in full view now, insatiable and expert",
    "shrugging its shoulders and hanging its neck like a wolf",
    "playing Super Smash Bros",
    "swiping, giddy and intolerable",
    "is luring us away from her baby",
    "having trouble talking with my friends; we are birders",
    "concocting violence just to get off on it",
    "is having trouble distinguishing, on the one hand, how it feels to think of something happening, or that something happened, from, on the other hand, something happening, or something having happened",
    "picking a slug off the garden",
    "is on my lap and pitch black and hot and purring",
    "warming a small, white egg in an underground burrow"
];

const emojis = [
    "🐦 No, but I've heard ",
    "🐓 Yes, I realized ",
    "🐦‍⬛ No, but I've heard ",
    "🦢 No, but I've heard ",
    "🦅 No, but I've heard ",
    "🦉 No, but I've heard ",
    "🦆 No, but I've heard ",
    "🦩 No, but I've heard ",
    "🦚 No, but I've heard ",
    "🦜 No, but I've heard ",
    "❌ No, but I've heard ",
    "🐦 Yes, I realized ",
    "🐓 Yes, I realized ",
    "🐦‍⬛ Yes, I realized ",
    "🦢 Yes, I realized ",
    "🦅 Yes, I realized ",
    "🦉 Yes, I realized ",
    "🦆 Yes, I realized ",
    "🦩 Yes, I realized ",
    "🦚 Yes, I realized ",
    "🦜 Yes, I realized "
];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to get a random bird and one of its descriptions
function getRandomBird() {
    const birdNames = Object.keys(birds);
    const randomBird = getRandomElement(birdNames);
    const descriptions = birds[randomBird].split(";");
    const description = getRandomElement(descriptions);
    
    return {
        name: randomBird,
        description: description
    };
}

// Function to create a dynamic text loading effect
function createDynamicTextEffect(element, finalText) {
    let currentText = '';
    let i = 0;
    const speed = 10; // Speed of typing effect in ms
    
    function typeText() {
        if (i < finalText.length) {
            // Add random glitch effect
            if (Math.random() < 0.1) { // 10% chance of glitch
                const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
                currentText = finalText.substring(0, i) + glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                currentText = finalText.substring(0, i + 1);
            }
            
            element.innerHTML = currentText;
            i++;
            setTimeout(typeText, speed);
        } else {
            // Ensure final text is displayed correctly
            element.innerHTML = finalText;
        }
    }
    
    typeText();
}

// Function to generate a poem
function generatePoem(waveNumber) {
    const bird = getRandomBird();
    const place = getRandomElement(places);
    const time = getRandomElement(times);
    const verb = getRandomElement(verbs);
    const person = getRandomElement(people);
    const birderVerb = getRandomElement(birderVerbs);
    const ingVerb = getRandomElement(ingVerbs);
    const emoji = getRandomElement(emojis);

    return `<div class="poem" style="line-height: 1.2; margin: 0; padding: 0;">
        <p class="observation" style="margin: 0; padding: 0;">LIFE LIST LOG #${waveNumber}</p>
        <p class="poem-intro" style="margin: 0; padding: 0;">TIME: ${time}</p>
        <p class="poem-intro" style="margin: 0; padding: 0;">PLACE: ${place}</p>
        <p class="poem-intro" style="margin: 0; padding: 0;">BIRD: ${bird.name} - ${bird.description}</p>
        <p class="poem-intro" style="margin: 0; padding: 0;">WITH: ${person}</p>
        <p class="poem-body" style="margin: 0; padding: 0;">OBSERVED: ${bird.name} ${ingVerb}. Birder ${birderVerb}.</p>
        <p style="margin: 0; padding: 0;">Did the life list grow?: ${emoji} life birds  ${verb}</p>
    </div>`;
}

// Function to update wave content with a new poem
function updateWaveWithPoem(waveElement, waveNumber) {
    const poem = generatePoem(waveNumber);
    const poemParagraph = waveElement.querySelector('p');
    if (poemParagraph) {
        // Clear existing content
        poemParagraph.innerHTML = '';
        // Create a new div for the poem
        const poemDiv = document.createElement('div');
        poemDiv.className = 'poem';
        poemParagraph.appendChild(poemDiv);
        
        // Split the poem into lines and create dynamic loading effect for each
        const lines = poem.split('\n');
        lines.forEach(line => {
            if (line.trim()) {
                const lineElement = document.createElement('p');
                lineElement.className = line.includes('LIFE LIST LOG') ? 'observation' : 
                                      line.includes('TIME:') || line.includes('PLACE:') || 
                                      line.includes('BIRD:') || line.includes('WITH:') ? 'poem-intro' : 
                                      line.includes('Observation') ? 'observation' : 'poem-body';
                poemDiv.appendChild(lineElement);
                createDynamicTextEffect(lineElement, line);
            }
        });
    }
}

// Initialize poem generation for all waves
function initializePoemGeneration() {
    const waves = document.querySelectorAll('.wave');
    waves.forEach((wave, index) => {
        // Generate initial poem with wave number
        const waveNumber = 30 - index; // Since waves are numbered from 30 down
        updateWaveWithPoem(wave, waveNumber);
        
        // Update poem on hover
        wave.addEventListener('mouseenter', () => {
            updateWaveWithPoem(wave, waveNumber);
        });
    });
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', initializePoemGeneration); 