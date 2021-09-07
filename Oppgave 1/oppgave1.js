//Alternative 1
const text1 = "Let's talk about me. Let's talk about the 6'8 frame the 37 inch verticle leap ... the black steel that drapes down my back AKA the bullet proof mullet, the google prototype scopes with built in LCD LED 1080p 3D sony technology. The Ethiopian poisonous caterpillar aka SLICK DADDY. Let's talk about the cabinets right behind me that go 40 feet deep into the wall that house the other 95% of my trophies, the awards, the certificates, all claiming first place, right? Let me give you a little inside glimpse into the hotshot, video gaming lifestyle of the two time international video gaming superstar. Because that's what this channel's about, that's what this domain is about, that's what this society is about. You are looking at the new face of Twitch and GODDAMN is Twitch lucky ..."


//Regex to grab whole words only
var textArray1 = text1.split(/(\w+)/)
var longestWord1 = ""

for (i = 0; i < textArray1.length; i++){
    if (textArray1[i].length > longestWord1.length){
        longestWord1 = textArray1[i]
    }
}

console.log(text1 + "\n\n\n")
console.log("Longest word: " + longestWord1)



//Alternative 2
const text2 =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord2 = () => {
    var textArray2 = text2.split(/(\w+)/)
    var longestWord2 = textArray2[0]

    for (i = 0; i < textArray2.length; i++){
        if (textArray2[i].length > longestWord2.length){
            longestWord2 = textArray2[i]
        }
    }
    return longestWord2
};

console.log(longestWord2());