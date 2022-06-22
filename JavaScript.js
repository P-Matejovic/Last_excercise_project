$("document").ready(function(){
console.log("Java is working!");


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
    Image:"photo/Atchafalaya-Basin.webp",
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




let currentPhoto = 7;
const imagesData = [Swamp, Canyon, bigbend, bigsur, everglades, florida, Grandpris, lechworth];

if (currentPhoto === 0) {
    $("#Image").attr("src", Swamp.Image);
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
});