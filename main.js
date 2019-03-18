const pets = [
    {
      name: "Dusty",
      slogan: "'Benghaziiiiiii!'",
      runningMate: "Charlie Daniels",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      slogan: "'Maybe we can?'",
      runningMate: "Aunt Becky",
      type: "dino",
      imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
    },
    {
      name: "Whiskers",
      slogan: "'Chillary Rodham Clinton'",
      runningMate: "Bill Clinton",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      slogan: "'More Bernie than Bernie'",
      runningMate: "Any Bernie bro will do",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      slogan: "'Church is the state'",
      runningMate: "Rick Perry",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      slogan: "'Legalize it'",
      runningMate: "Beto O'Rourke",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      slogan: "'But her emails!'",
      runningMate: "Trey Gowdy",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      slogan: "'Feel the churn'",
      runningMate: "Elizabeth Warren",
      type: "dino",
      imageUrl: "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg"
    },
    {
      name: "Sassy",
      slogan: "'Less Trump than Trump'",
      runningMate: "Don Jr.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      slogan: "'No more Canadians'",
      runningMate: "Melania Trump",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      slogan: "'Let's get intersectional'",
      runningMate: "Alexandria Ocasio-Cortez",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      slogan: "'Here for the free samples. And the freedom'",
      runningMate: "Ralph Nader",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      slogan: "Arf",
      runningMate: "Homer Simpson",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      name: "Samantha",
      slogan: "'I like beer'",
      runningMate: "Brett Kavanaugh",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      slogan: "'End the Fed, stay red'",
      runningMate: "Burps minimally",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      slogan: "'I never inhaled'",
      runningMate: "Smokey the Bear",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
      name: "Muffin",
      slogan: "'If I did it...'",
      runningMate: "OJ Simpson",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      slogan: "'I don't see nothin wrong'",
      runningMate: "R Kelly",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      name: "Callie",
      slogan: "'When you snuggle, the world snuggles back'",
      runningMate: "Bert & Ernie",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      name: "Spooky",
      slogan: "'The comeback kid'",
      runningMate: "Howard Stern",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      slogan: "'Drink more sparkling water'",
      runningMate: "Super Mario",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
      name: "Snuggles",
      slogan: "'I miss Dan Quayle'",
      runningMate: "Dan Quayle",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
      name: "Buddy",
      slogan: "'Red or white?'",
      runningMate: "Enjoys fine wine",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      slogan: "'Healthcare for all'",
      runningMate: "Jared Kushner",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      slogan: "'Bringing you the real America'",
      runningMate: "Sean Hannity",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
      name: "Bubba",
      slogan: "'Wal-Mart did it'",
      runningMate: "Ross Perot",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      slogan: "'The Democrats are dead. Long live the Democrats'",
      runningMate: "Oscar the Grouch",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      slogan: "'It's good to be back. No, really.'",
      runningMate: "Mitt Romney",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      slogan: "'End millenial video games'",
      runningMate: "Pokemon",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      slogan: "'Don't you bring me down today'",
      runningMate: "Christina Aguilera",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    },
];
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const petBuilder = (monkeybutts) => {
    let domString = '';

    monkeybutts.forEach((pet) => {
        
        domString += `<div class="pet">`;
        domString += `<div class="name"><h4>${pet.name}</h4></div>`;
        domString += `<img src="${pet.imageUrl}">`;
        domString += `<h4> ${pet.slogan}</h4>`;
        domString += `<h4>Running mate: ${pet.runningMate}</h4>`;
        domString += `<div class="type ${pet.type}"><h4>${pet.type}</h4></div>`;
        domString += `</div>`;
        

    })

    
    printToDom('many-pets', domString);
};

const buttonClick = (e) => {
    const buttonId = e.target.id;

    //console.log('you clicked a button', e.target.id);
    //loop over hte pies array
    //if value of instructor key is the same as the buttonId - keep that object
    //once we have all the pies for that instructor - call pieBuilder

    const selectedPets = [];
    pets.forEach((pet) => {
        if (pet.type === buttonId) {
            selectedPets.push(pet);
        }

    });

    if (buttonId === 'All') {
        petBuilder(pets);
    } else {
        petBuilder(selectedPets);
    }

};

const buttonEvents = () => {
    document.getElementById('cat').addEventListener('click', buttonClick);
    document.getElementById('dog').addEventListener('click', buttonClick);
    document.getElementById('dino').addEventListener('click', buttonClick);
    document.getElementById('All').addEventListener('click', buttonClick);
};

const init = () => {
    buttonEvents();
    petBuilder(pets);

};

init();