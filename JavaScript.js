$("document").ready(function(){
console.log("Java is working!");

// proměnné objekty pro další využití
let Swamp = {
    Image:"photo/Atchafalaya-Basin.webp",
    title: 'My different title',
    description: 'I hope you love America like me !'
};
let Canyon = {
    Image:"photo/Antelope-Canyon.webp",
    title: 'My different title1',
    description: 'I hope you love America like me !'
};

let bigbend = {
    Image:"photo/Big-Bend-National-Park.webp",
    title: 'My different title2',
    description: 'I hope you love America like me !'
};

let bigsur = {
    Image:"photo/Big-Sur.webp",
    title: 'My different title3',
    description: 'I hope you love America like me !'
};
let everglades = {
    Image:"photo/Everglades.webp",
    title: 'My different title4',
    description: 'I hope you love America like me !'
};
let florida = {
    Image:"photo/Florida-Keys.webp",
    title: 'My different title5',
    description: 'I hope you love America like me !'
};

let Grandpris = {
    Image:"photo/Grand-Prismatic.webp",
    title: 'My different title6',
    description: 'I hope you love America like me !'
};

let lechworth = {
    Image:"photo/Letchworth-State-Park.webp",
    title: 'My different title7',
    description: 'I hope you love America like me !'
};


let currentPhoto = 0;
const imagesData = [Swamp, Canyon, bigbend, bigsur, everglades, florida, Grandpris, lechworth];


// Lepší řešení pomocí funkce, která je prvně vytvořena a poté je následně spouštím s hodnotou currentPhoto !!!!,photoNumber je pouze proměnná, kterou nasledně zadám.

function LoadData(photoNumber) {
    $("#Image").attr("src", imagesData[photoNumber].Image);
    $("#Headings").text(imagesData[photoNumber].title);
    $("#description").text(imagesData[photoNumber].description);
};

LoadData(currentPhoto);
//tlačítka na vytvoření přes Jquery
$('.box3').click(() => {
    if (currentPhoto < 7)
    currentPhoto++;
    else {currentPhoto = 0};
LoadData(currentPhoto); //Nezapomenout pak vždy "Refreshnout celé načtení !", jinak je mi tohle clck uplně naprd !

});

$('.box1').click(() => {
    if (currentPhoto > 0)
    currentPhoto--;
    else {currentPhoto = 7};
LoadData(currentPhoto);

});

imagesData.forEach(( element, index) => {
    $('.container_2').append(`<img src="${imagesData[index].Image}" class="thumbnail" data-index="${index}">
    </img>`);

});

if ($(".thumbnail").click()) {
    console.log("first clicked")
}

LoadData(currentPhoto);

/* //Takto to jde udělat zdlouhavě přes podmíky, ale je to zdlouhavé!

if (currentPhoto === 0) {
    $("#Image").attr("src", imagesData[currentPhoto].Image);
    $("#Headings").text(Swamp.title);
    $("#description").text(Swamp.description);}
else if (currentPhoto === 1) {
    $("#Image").attr("src", Canyon.Image);
    $("#Headings").text(Canyon.title);
    $("#description").text(Canyon.description);}
else if (currentPhoto === 2) {
    $("#Image").attr("src", bigbend.Image);
    $("#Headings").text(bigbend.title);
    $("#description").text(bigbend.description);}
else if (currentPhoto === 3) {
    $("#Image").attr("src", bigsur.Image);
    $("#Headings").text(bigsur.title);
    $("#description").text(bigsur.description);}
else if (currentPhoto === 4) {
    $("#Image").attr("src", everglades.Image);
    $("#Headings").text(everglades.title);
    $("#description").text(everglades.description);}
else if (currentPhoto === 5) {
    $("#Image").attr("src", florida.Image);
    $("#Headings").text(florida.title);
    $("#description").text(florida.description);}
else if (currentPhoto === 6) {
    $("#Image").attr("src", Grandpris.Image);
    $("#Headings").text(Grandpris.title);
    $("#description").text(Grandpris.description);
}
else if (currentPhoto === 7) {
    $("#Image").attr("src", lechworth.Image);
    $("#Headings").text(lechworth.title);
    $("#description").text(lechworth.description);
}
else {alert("we don´t have so many photos!")}
*/
});