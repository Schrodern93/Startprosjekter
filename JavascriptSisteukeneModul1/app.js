//function(){

var firebaseConfig = {
    apiKey: "AIzaSyDJudofDYHe6jAavBq2Ei9O0lCMzNkVfZc",
    authDomain: "fir-test-e989e.firebaseapp.com",
    databaseURL: "https://fir-test-e989e.firebaseio.com",
    projectId: "fir-test-e989e",
    storageBucket: "fir-test-e989e.appspot.com",
    messagingSenderId: "309319920225",
    appId: "1:309319920225:web:9fcb3b7ba171ffdcccd820",
    measurementId: "G-KBVXLJ3PNW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");
const input = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function () {
    const textToSave = input.value;
    console.log("I am going to save" + textToSave + "to Firestore");
    docRef.set({
        hotDogStatus: textToSave
    }).then(function () {
        console.log("Status saved");
    }).catch(function (error) {
        console.log("Got an error", error);
    });
})


//})();
