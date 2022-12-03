function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EtSd6c8OW/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    console.log('Got Result')
}


function gotResults(error,results){
    if (error) {
        console.error(error);

    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255 ) + 1;
      random_number_g = Math.floor(Math.random() * 255 ) + 1;
      random_number_b = Math.floor(Math.random() * 255 ) + 1;

     document.getElementById("sound").innerHTML = 'I can hear -'+
     results[0].label;
     document.getElementById("aos").innerHTML = 'Accuracy -'+
     (results[0].confidence*100).toFixed(2)+" %";
     document.getElementById("sound").style.color = "rgb("
     +random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("aos").style.color = "rgb("
     +random_number_r+","+random_number_g+","+random_number_b+")";



     if (results[0].label == "Cat"){
     document.getElementById("ear").src='meow.gif';
     }
     

     else if (results[0].label == "Dog"){
        document.getElementById("ear").src='Bark.gif';
     }


     else if (results[0].label == "Lion"){
        document.getElementById("ear").src='roar.gif';
     }


     else {
        document.getElementById("ear").src='Earing.jpg';
     }














    }
}