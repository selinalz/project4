
//show keyboard on mobile
document.getElementById('keyboard').addEventListener('click', function(){
    var inputElement = document.getElementById('hiddenInput');
    inputElement.style.visibility = 'visible';
    inputElement.focus(); 
    inputElement.style.visibility = 'hidden';
});

//refresh to remove all flowers
var refresh = document.getElementsByClassName("refresh") [0];
refresh.addEventListener("click", Refresh);

  function Refresh() {
  var container = document.getElementsByClassName("container") [0];
   container.remove();
   var result = document.querySelector("#result");
   result.innerText = "NO KEYS PRESSED";
  }

//show pressed keyboards
let result = document.querySelector("#result");

document.addEventListener("keydown", function(event){
  
  console.log(event);
  console.log("what did we just press:")
  console.log(event.key)
  
  result.innerText = event.key;
  
})

//toggle different modes
var button = document.querySelector(".moon");
var theme = document.querySelector("#theme-link");

// Listen for a click on the button
button.addEventListener("click", function() {
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
    button.classList.add("sun");
  } else {
    theme.href = "light-theme.css";
  }
});

document.addEventListener('keydown', function (event) {

	var container = document.createElement("div");
    container.classList.add("container");
    document.querySelector(".main").append(container);
  
  //flower 1
  if (event.key === 'a') {
  	var flower = document.createElement("div");
  	flower.classList.add("flower");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower);
    flower.style.left = (100 * Math.random()) + '%';
    flower.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("petal_1");
  	petal.classList.add("petal_1");
  	flower.append(petal);
  	var petal2 = document.createElement("petal_2");
  	petal2.classList.add("petal_2");
  	flower.append(petal2);
  	var petal3 = document.createElement("petal_3");
  	petal3.classList.add("petal_3");
  	flower.append(petal3);
  	var petal4 = document.createElement("petal_4");
  	petal4.classList.add("petal_4");
  	flower.append(petal4);
  }

  //flower 2
  if (event.key === 'b') {
  	var flower2 = document.createElement("div");
  	flower2.classList.add("flower2");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower2);
    flower2.style.left = (100 * Math.random()) + '%';
    flower2.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("petal_one");
  	petal.classList.add("petal_one");
  	flower2.append(petal);
    var petal2 = document.createElement("petal_two");
    petal2.classList.add("petal_two");
    flower2.append(petal2);
    var petal3 = document.createElement("petal_three");
    petal3.classList.add("petal_three");
    flower2.append(petal3);
    var petal4 = document.createElement("petal_four");
    petal4.classList.add("petal_four");
    flower2.append(petal4);
    var petal5 = document.createElement("petal_five");
    petal5.classList.add("petal_five");
    flower2.append(petal5);
    var petal6 = document.createElement("petal_six");
    petal6.classList.add("petal_six");
    flower2.append(petal6);
    var petal7 = document.createElement("petal_seven");
    petal7.classList.add("petal_seven");
    flower2.append(petal7);
    var petal8 = document.createElement("petal_eight");
    petal8.classList.add("petal_eight");
    flower2.append(petal8);
    var petal9 = document.createElement("petal_nine");
    petal9.classList.add("petal_nine");
    flower2.append(petal9);
    var petal10 = document.createElement("petal_ten");
    petal10.classList.add("petal_ten");
    flower2.append(petal10);
  }

  //flower 3
  if (event.key === 'c') {
  	var flower3 = document.createElement("div");
  	flower3.classList.add("flower");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower3);
    flower3.style.left = (100 * Math.random()) + '%';
    flower3.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("petal-one");
  	petal.classList.add("petal-one");
  	flower3.append(petal);
    var petal2 = document.createElement("petal-two");
    petal2.classList.add("petal-two");
    flower3.append(petal2);
    var petal3 = document.createElement("petal-three");
    petal3.classList.add("petal-three");
    flower3.append(petal3);
    var petal4 = document.createElement("petal-four");
    petal4.classList.add("petal-four");
    flower3.append(petal4);
    var petal5 = document.createElement("petal-five");
    petal5.classList.add("petal-five");
    flower3.append(petal5);
    var petal6 = document.createElement("petal-six");
    petal6.classList.add("petal-six");
    flower3.append(petal6);
    var petal7 = document.createElement("petal-seven");
    petal7.classList.add("petal-seven");
    flower3.append(petal7);
    var petal8 = document.createElement("petal-eight");
    petal8.classList.add("petal-eight");
    flower3.append(petal8);
  }

//flower 4
  if (event.key === 'd') {
  	var flower4 = document.createElement("div");
  	flower4.classList.add("flower4");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower4);
    flower4.style.left = (100 * Math.random()) + '%';
    flower4.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("p1");
  	petal.classList.add("p1");
  	flower4.append(petal);
    var petal2 = document.createElement("p2");
    petal2.classList.add("p2");
    flower4.append(petal2);
    var petal3 = document.createElement("p3");
    petal3.classList.add("p3");
    flower4.append(petal3);
    var petal4 = document.createElement("p4");
    petal4.classList.add("p4");
    flower4.append(petal4);
  }

//flower 5
  if (event.key === 'e') {
  	var flower5 = document.createElement("div");
  	flower5.classList.add("flower5");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower5);
    flower5.style.left = (100 * Math.random()) + '%';
    flower5.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("p-1");
  	petal.classList.add("p-1");
  	flower5.append(petal);
    var petal2 = document.createElement("p-2");
    petal2.classList.add("p-2");
    flower5.append(petal2);
    var petal3 = document.createElement("p-3");
    petal3.classList.add("p-3");
    flower5.append(petal3);
    var petal4 = document.createElement("p-4");
    petal4.classList.add("p-4");
    flower5.append(petal4);
    var petal5 = document.createElement("p-5");
    petal5.classList.add("p-5");
    flower5.append(petal5);
    var petal6 = document.createElement("p-6");
    petal6.classList.add("p-6");
    flower5.append(petal6);
    var petal7 = document.createElement("p-7");
    petal7.classList.add("p-7");
    flower5.append(petal7);
    var petal8 = document.createElement("p-8");
    petal8.classList.add("p-8");
    flower5.append(petal8);
    var petal9 = document.createElement("p-9");
    petal9.classList.add("p-9");
    flower5.append(petal9);
    var petal10 = document.createElement("p-10");
    petal10.classList.add("p-10");
    flower5.append(petal10);
    var petal11 = document.createElement("p-11");
    petal11.classList.add("p-11");
    flower5.append(petal11);
    var petal12 = document.createElement("p-12");
    petal12.classList.add("p-12");
    flower5.append(petal12);
  }

//flower 6
  if (event.key === 'f') {
  	var flower6 = document.createElement("div");
  	flower6.classList.add("flower6");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower6);
    flower6.style.left = (100 * Math.random()) + '%';
    flower6.style.top = (70 * Math.random()) + '%';
  	var petal = document.createElement("p_1");
  	petal.classList.add("p_1");
  	flower6.append(petal);
    var petal2 = document.createElement("p_2");
    petal2.classList.add("p_2");
    flower6.append(petal2);
    var petal3 = document.createElement("p_3");
    petal3.classList.add("p_3");
    flower6.append(petal3);
    var petal4 = document.createElement("p_4");
    petal4.classList.add("p_4");
    flower6.append(petal4);
    var petal5 = document.createElement("p_5");
    petal5.classList.add("p_5");
    flower6.append(petal5);
    var petal6 = document.createElement("p_6");
    petal6.classList.add("p_6");
    flower6.append(petal6);
    var petal7 = document.createElement("p_7");
    petal7.classList.add("p_7");
    flower6.append(petal7);
    var petal8 = document.createElement("p_8");
    petal8.classList.add("p_8");
    flower6.append(petal8);
    var petal9 = document.createElement("p_9");
    petal9.classList.add("p_9");
    flower6.append(petal9);
  }

  //flower 7
  if (event.key === 'g') {
    var flower7 = document.createElement("div");
  	flower7.classList.add("flower7");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower7);
    flower7.style.left = (100 * Math.random()) + '%';
    flower7.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("p_one");
  	petal.classList.add("p_one");
    flower7.append(petal);
    var petal2 = document.createElement("p_two");
    petal2.classList.add("p_two");
    flower7.append(petal2);
    var petal3 = document.createElement("p_three");
    petal3.classList.add("p_three");
    flower7.append(petal3);
    var petal4 = document.createElement("p_four");
    petal4.classList.add("p_four");
    flower7.append(petal4);
    var petal5 = document.createElement("p_five");
    petal5.classList.add("p_five");
    flower7.append(petal5);
    var petal6 = document.createElement("p_six");
    petal6.classList.add("p_six");
    flower7.append(petal6);
    var petal7 = document.createElement("p_seven");
    petal7.classList.add("p_seven");
    flower7.append(petal7);
    var petal8 = document.createElement("p_eight");
    petal8.classList.add("p_eight");
    flower7.append(petal8);
    var petal9 = document.createElement("p_nine");
    petal9.classList.add("p_nine");
    flower7.append(petal9);
    var petal10 = document.createElement("p_ten");
    petal10.classList.add("p_ten");
    flower7.append(petal10);
  }

//flower 8
  if (event.key === 'h') {
    var flower8 = document.createElement("div");
  	flower8.classList.add("flower8");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower8);
    flower8.style.left = (100 * Math.random()) + '%';
    flower8.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("p-one");
  	petal.classList.add("p-one");
  	flower8.append(petal);
    var petal2 = document.createElement("p-two");
    petal2.classList.add("p-two");
    flower8.append(petal2);
    var petal3 = document.createElement("p-three");
    petal3.classList.add("p-three");
    flower8.append(petal3);
    var petal4 = document.createElement("p-four");
    petal4.classList.add("p-four");
    flower8.append(petal4);
    var petal5 = document.createElement("p-five");
    petal5.classList.add("p-five");
    flower8.append(petal5);
    var petal6 = document.createElement("p-six");
    petal6.classList.add("p-six");
    flower8.append(petal6);
    var petal7 = document.createElement("p-seven");
    petal7.classList.add("p-seven");
    flower8.append(petal7);
  }

//flower 9
  if (event.key === 'i') {
    var flower9 = document.createElement("div");
  	flower9.classList.add("flower9");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower9);
    flower9.style.left = (100 * Math.random()) + '%';
    flower9.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pone");
  	petal.classList.add("pone");
  	flower9.append(petal);
    var petal2 = document.createElement("ptwo");
    petal2.classList.add("ptwo");
    flower9.append(petal2);
    var petal3 = document.createElement("pthree");
    petal3.classList.add("pthree");
    flower9.append(petal3);
    var petal4 = document.createElement("pfour");
    petal4.classList.add("pfour");
    flower9.append(petal4);
    var petal5 = document.createElement("pfive");
    petal5.classList.add("pfive");
    flower9.append(petal5);
    var petal6 = document.createElement("psix");
    petal6.classList.add("psix");
    flower9.append(petal6);
    var petal7 = document.createElement("pseven");
    petal7.classList.add("pseven");
    flower9.append(petal7);
  }

//flower 10
  if (event.key === 'j') {
    var flower10 = document.createElement("div");
  	flower10.classList.add("flower10");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower10);
    flower10.style.left = (100 * Math.random()) + '%';
    flower10.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pe1");
  	petal.classList.add("pe1");
  	flower10.append(petal);
    var petal2 = document.createElement("pe2");
    petal2.classList.add("pe2");
    flower10.append(petal2);
    var petal3 = document.createElement("pe3");
    petal3.classList.add("pe3");
    flower10.append(petal3);
    var petal4 = document.createElement("pe4");
    petal4.classList.add("pe4");
    flower10.append(petal4);
    var petal5 = document.createElement("pe5");
    petal5.classList.add("pe5");
    flower10.append(petal5);
  }

//flower 11
  if (event.key === 'k') {
    var flower11 = document.createElement("div");
  	flower11.classList.add("flower11");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower11);
    flower11.style.left = (100 * Math.random()) + '%';
    flower11.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pe-1");
  	petal.classList.add("pe-1");
  	flower11.append(petal);
    var petal2 = document.createElement("pe-2");
    petal2.classList.add("pe-2");
    flower11.append(petal2);
    var petal3 = document.createElement("pe-3");
    petal3.classList.add("pe-3");
    flower11.append(petal3);
    var petal4 = document.createElement("pe-4");
    petal4.classList.add("pe-4");
    flower11.append(petal4);
    var petal5 = document.createElement("pe-5");
    petal5.classList.add("pe-5");
    flower11.append(petal5);
    var petal6 = document.createElement("pe-6");
    petal6.classList.add("pe-6");
    flower11.append(petal6);
    var petal7 = document.createElement("pe-7");
    petal7.classList.add("pe-7");
    flower11.append(petal7);
    var petal8 = document.createElement("pe-8");
    petal8.classList.add("pe-8");
    flower11.append(petal8);
    var petal9 = document.createElement("pe-9");
    petal9.classList.add("pe-9");
    flower11.append(petal9);
  }

  //flower 12
  if (event.key === 'l') {
    var flower12 = document.createElement("div");
  	flower12.classList.add("flower12");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower12);
    flower12.style.left = (100 * Math.random()) + '%';
    flower12.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pe_1");
  	petal.classList.add("pe_1");
  	flower12.append(petal);
    var petal2 = document.createElement("pe_2");
    petal2.classList.add("pe_2");
    flower12.append(petal2);
    var petal3 = document.createElement("pe_3");
    petal3.classList.add("pe_3");
    flower12.append(petal3);
    var petal4 = document.createElement("pe_4");
    petal4.classList.add("pe_4");
    flower12.append(petal4);
    var petal5 = document.createElement("pe_5");
    petal5.classList.add("pe_5");
    flower12.append(petal5);
    var petal6 = document.createElement("pe_6");
    petal6.classList.add("pe_6");
    flower12.append(petal6);
    var petal7 = document.createElement("pe_7");
    petal7.classList.add("pe_7");
    flower12.append(petal7);
    var petal8 = document.createElement("pe_8");
    petal8.classList.add("pe_8");
    flower12.append(petal8);
    var petal9 = document.createElement("pe_9");
    petal9.classList.add("pe_9");
    flower12.append(petal9);
    var petal10 = document.createElement("pe_10");
    petal10.classList.add("pe_10");
    flower12.append(petal10);
  }

//flower 13
  if (event.key === 'm') {
    var flower13 = document.createElement("div");
  	flower13.classList.add("flower13");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower13);
    flower13.style.left = (100 * Math.random()) + '%';
    flower13.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pe-one");
  	petal.classList.add("pe-one");
  	flower13.append(petal);
    var petal2 = document.createElement("pe-two");
    petal2.classList.add("pe-two");
    flower13.append(petal2);
    var petal3 = document.createElement("pe-three");
    petal3.classList.add("pe-three");
    flower13.append(petal3);
    var petal4 = document.createElement("pe-four");
    petal4.classList.add("pe-four");
    flower13.append(petal4);
    var petal5 = document.createElement("pe-five");
    petal5.classList.add("pe-five");
    flower13.append(petal5);
  }

//flower 14
  if (event.key === 'n') {
    var flower14 = document.createElement("div");
  	flower14.classList.add("flower14");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower14);
    flower14.style.left = (100 * Math.random()) + '%';
    flower14.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("petal");
  	petal.classList.add("petal");
  	flower14.append(petal);
    var petal2 = document.createElement("petal2");
    petal2.classList.add("petal2");
    flower14.append(petal2);
    var petal3 = document.createElement("petal3");
    petal3.classList.add("petal3");
    flower14.append(petal3);
    var petal4 = document.createElement("petal4");
    petal4.classList.add("petal4");
    flower14.append(petal4);
  }

//flower 15
  if (event.key === 'o') {
    var flower15 = document.createElement("div");
  	flower15.classList.add("flower15");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower15);
    flower15.style.left = (100 * Math.random()) + '%';
    flower15.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("petal-1");
  	petal.classList.add("petal-1");
  	flower15.append(petal);
    var petal2 = document.createElement("petal-2");
    petal2.classList.add("petal-2");
    flower15.append(petal2);
    var petal3 = document.createElement("petal-3");
    petal3.classList.add("petal-3");
    flower15.append(petal3);
    var petal4 = document.createElement("petal-4");
    petal4.classList.add("petal-4");
    flower15.append(petal4);
    var petal5 = document.createElement("petal-5");
    petal5.classList.add("petal-5");
    flower15.append(petal5);
    var petal6 = document.createElement("petal-6");
    petal6.classList.add("petal-6");
    flower15.append(petal6);
    var petal7 = document.createElement("petal-7");
    petal7.classList.add("petal-7");
    flower15.append(petal7);
    var petal8 = document.createElement("petal-8");
    petal8.classList.add("petal-8");
    flower15.append(petal8);
    var petal9 = document.createElement("petal-9");
    petal9.classList.add("petal-9");
    flower15.append(petal9);
    var petal10 = document.createElement("petal-10");
    petal10.classList.add("petal-10");
    flower15.append(petal10);
  }

//flower 16
  if (event.key === 'p') {
    var flower16 = document.createElement("div");
  	flower16.classList.add("flower16");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower16);
    flower16.style.left = (100 * Math.random()) + '%';
    flower16.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("petalone");
  	petal.classList.add("petalone");
  	flower16.append(petal);
    var petal2 = document.createElement("petaltwo");
    petal2.classList.add("petaltwo");
    flower16.append(petal2);
    var petal3 = document.createElement("petalthree");
    petal3.classList.add("petalthree");
    flower16.append(petal3);
    var petal4 = document.createElement("petalfour");
    petal4.classList.add("petalfour");
    flower16.append(petal4);
    var petal5 = document.createElement("petalfive");
    petal5.classList.add("petalfive");
    flower16.append(petal5);
    var petal6 = document.createElement("petalsix");
    petal6.classList.add("petalsix");
    flower16.append(petal6);
    var petal7 = document.createElement("petalseven");
    petal7.classList.add("petalseven");
    flower16.append(petal7);
    var petal8 = document.createElement("petaleight");
    petal8.classList.add("petaleight");
    flower16.append(petal8);
  }

  //flower 17
  if (event.key === 'q') {
    var flower17 = document.createElement("div");
  	flower17.classList.add("flower17");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower17);
    flower17.style.left = (100 * Math.random()) + '%';
    flower17.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pe_one");
  	petal.classList.add("pe_one");
  	flower17.append(petal);
    var petal2 = document.createElement("pe_two");
    petal2.classList.add("pe_two");
    flower17.append(petal2);
    var petal3 = document.createElement("pe_three");
    petal3.classList.add("pe_three");
    flower17.append(petal3);
    var petal4 = document.createElement("pe_four");
    petal4.classList.add("pe_four");
    flower17.append(petal4);
  }

//flower 18
  if (event.key === 'r') {
    var flower18 = document.createElement("div");
  	flower18.classList.add("flower18");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower18);
    flower18.style.left = (100 * Math.random()) + '%';
    flower18.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pet1");
  	petal.classList.add("pet1");
  	flower18.append(petal);
    var petal2 = document.createElement("pet2");
    petal2.classList.add("pet2");
    flower18.append(petal2);
    var petal3 = document.createElement("pet3");
    petal3.classList.add("pet3");
    flower18.append(petal3);
    var petal4 = document.createElement("pet4");
    petal4.classList.add("pet4");
    flower18.append(petal4);
    var petal5 = document.createElement("pet5");
    petal5.classList.add("pet5");
    flower18.append(petal5);
    var petal6 = document.createElement("pet6");
    petal6.classList.add("pet6");
    flower18.append(petal6);
    var petal7 = document.createElement("pet7");
    petal7.classList.add("pet7");
    flower18.append(petal7);
    var petal8 = document.createElement("pet8");
    petal8.classList.add("pet8");
    flower18.append(petal8);
    var petal9 = document.createElement("pet9");
    petal9.classList.add("pet9");
    flower18.append(petal9);
    var petal10 = document.createElement("pet10");
    petal10.classList.add("pet10");
    flower18.append(petal10);
    var petal11 = document.createElement("pet11");
    petal11.classList.add("pet11");
    flower18.append(petal11);
    var petal12 = document.createElement("pet12");
    petal12.classList.add("pet12");
    flower18.append(petal12);
  }

//flower 19
  if (event.key === 's') {
    var flower19 = document.createElement("div");
  	flower19.classList.add("flower19");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower19);
    flower19.style.left = (100 * Math.random()) + '%';
    flower19.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pet-1");
  	petal.classList.add("pet-1");
  	flower19.append(petal);
    var petal2 = document.createElement("pet-2");
    petal2.classList.add("pet-2");
    flower19.append(petal2);
    var petal3 = document.createElement("pet-3");
    petal3.classList.add("pet-3");
    flower19.append(petal3);
    var petal4 = document.createElement("pet-4");
    petal4.classList.add("pet-4");
    flower19.append(petal4);
    var petal5 = document.createElement("pet-5");
    petal5.classList.add("pet-5");
    flower19.append(petal5);
    var petal6 = document.createElement("pet-6");
    petal6.classList.add("pet-6");
    flower19.append(petal6);
    var petal7 = document.createElement("pet-7");
    petal7.classList.add("pet-7");
    flower19.append(petal7);
    var petal8 = document.createElement("pet-8");
    petal8.classList.add("pet-8");
    flower19.append(petal8);
    var petal9 = document.createElement("pet-9");
    petal9.classList.add("pet-9");
    flower19.append(petal9);
  }

//flower 20
  if (event.key === 't') {
    var flower20 = document.createElement("div");
  	flower20.classList.add("flower4");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower20);
    flower20.style.left = (100 * Math.random()) + '%';
    flower20.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pet_1");
  	petal.classList.add("pet_1");
  	flower20.append(petal);
    var petal2 = document.createElement("pet_2");
    petal2.classList.add("pet_2");
    flower20.append(petal2);
    var petal3 = document.createElement("pet_3");
    petal3.classList.add("pet_3");
    flower20.append(petal3);
    var petal4 = document.createElement("pet_4");
    petal4.classList.add("pet_4");
    flower20.append(petal4);
    var petal5 = document.createElement("pet_5");
    petal5.classList.add("pet_5");
    flower20.append(petal5);
    var petal6 = document.createElement("pet_6");
    petal6.classList.add("pet_6");
    flower20.append(petal6);
    var petal7 = document.createElement("pet_7");
    petal7.classList.add("pet_7");
    flower20.append(petal7);
    var petal8 = document.createElement("pet_8");
    petal8.classList.add("pet_8");
    flower20.append(petal8);
    var petal9 = document.createElement("pet_9");
    petal9.classList.add("pet_9");
    flower20.append(petal9);
    var petal10 = document.createElement("pet_10");
    petal10.classList.add("pet_10");
    flower20.append(petal10);
  }

//flower 21
  if (event.key === 'u') {
    var flower21 = document.createElement("div");
  	flower21.classList.add("flower21");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower21);
    flower21.style.left = (100 * Math.random()) + '%';
    flower21.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pet-one");
  	petal.classList.add("pet-one");
  	flower21.append(petal);
    var petal2 = document.createElement("pet-two");
    petal2.classList.add("pet-two");
    flower21.append(petal2);
    var petal3 = document.createElement("pet-three");
    petal3.classList.add("pet-three");
    flower21.append(petal3);
    var petal4 = document.createElement("pet-four");
    petal4.classList.add("pet-four");
    flower21.append(petal4);
    var petal5 = document.createElement("pet-five");
    petal5.classList.add("pet-five");
    flower21.append(petal5);
    var petal6 = document.createElement("pet-six");
    petal6.classList.add("pet-six");
    flower21.append(petal6);
    var petal7 = document.createElement("pet-seven");
    petal7.classList.add("pet-seven");
    flower21.append(petal7);
  }

  //flower 22
  if (event.key === 'v') {
    var flower22 = document.createElement("div");
  	flower22.classList.add("flower22");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower22);
    flower22.style.left = (100 * Math.random()) + '%';
    flower22.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("pet_one");
  	petal.classList.add("pet_one");
  	flower22.append(petal);
    var petal2 = document.createElement("pet_two");
    petal2.classList.add("pet_two");
    flower22.append(petal2);
    var petal3 = document.createElement("pet_three");
    petal3.classList.add("pet_three");
    flower22.append(petal3);
    var petal4 = document.createElement("pet_four");
    petal4.classList.add("pet_four");
    flower22.append(petal4);
    var petal5 = document.createElement("pet_five");
    petal5.classList.add("pet_five");
    flower22.append(petal5);
    var petal6 = document.createElement("pet_six");
    petal6.classList.add("pet_six");
    flower22.append(petal6);
    var petal7 = document.createElement("pet_seven");
    petal7.classList.add("pet_seven");
    flower22.append(petal7);
  }

//flower 23
  if (event.key === 'w') {
    var flower23 = document.createElement("div");
  	flower23.classList.add("flower23");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower23);
    flower23.style.left = (100 * Math.random()) + '%';
    flower23.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("peta1");
  	petal.classList.add("peta1");
  	flower23.append(petal);
    var petal2 = document.createElement("peta2");
    petal2.classList.add("peta2");
    flower23.append(petal2);
    var petal3 = document.createElement("peta3");
    petal3.classList.add("peta3");
    flower23.append(petal3);
    var petal4 = document.createElement("peta4");
    petal4.classList.add("peta4");
    flower23.append(petal4);
    var petal5 = document.createElement("peta5");
    petal5.classList.add("peta5");
    flower23.append(petal5);
  }

//flower 24
  if (event.key === 'x') {
    var flower24 = document.createElement("div");
  	flower24.classList.add("flower24");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower24);
    flower24.style.left = (100 * Math.random()) + '%';
    flower24.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("peta-1");
  	petal.classList.add("peta-1");
  	flower24.append(petal);
    var petal2 = document.createElement("peta-2");
    petal2.classList.add("peta-2");
    flower24.append(petal2);
    var petal3 = document.createElement("peta-3");
    petal3.classList.add("peta-3");
    flower24.append(petal3);
    var petal4 = document.createElement("peta-4");
    petal4.classList.add("peta-4");
    flower24.append(petal4);
    var petal5 = document.createElement("peta-5");
    petal5.classList.add("peta-5");
    flower24.append(petal5);
    var petal6 = document.createElement("peta-6");
    petal6.classList.add("peta-6");
    flower24.append(petal6);
    var petal7 = document.createElement("peta-7");
    petal7.classList.add("peta-7");
    flower24.append(petal7);
    var petal8 = document.createElement("peta-8");
    petal8.classList.add("peta-8");
    flower24.append(petal8);
    var petal9 = document.createElement("peta-9");
    petal9.classList.add("peta-9");
    flower24.append(petal9);
  }

//flower 25
  if (event.key === 'y') {
    var flower25 = document.createElement("div");
  	flower25.classList.add("flower25");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower25);
    flower25.style.left = (100 * Math.random()) + '%';
    flower25.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("peta_1");
  	petal.classList.add("peta_1");
  	flower25.append(petal);
    var petal2 = document.createElement("peta_2");
    petal2.classList.add("peta_2");
    flower25.append(petal2);
    var petal3 = document.createElement("peta_3");
    petal3.classList.add("peta_3");
    flower25.append(petal3);
    var petal4 = document.createElement("peta_4");
    petal4.classList.add("peta_4");
    flower25.append(petal4);
    var petal5 = document.createElement("peta_5");
    petal5.classList.add("peta_5");
    flower25.append(petal5);
    var petal6 = document.createElement("peta_6");
    petal6.classList.add("peta_6");
    flower25.append(petal6);
    var petal7 = document.createElement("peta_7");
    petal7.classList.add("peta_7");
    flower25.append(petal7);
    var petal8 = document.createElement("peta_8");
    petal8.classList.add("peta_8");
    flower25.append(petal8);
    var petal9 = document.createElement("peta_9");
    petal9.classList.add("peta_9");
    flower25.append(petal9);
    var petal10 = document.createElement("peta_10");
    petal10.classList.add("peta_10");
    flower25.append(petal10);
  }

//flower 26
  if (event.key === 'z') {
    var flower26 = document.createElement("div");
  	flower26.classList.add("flower26");
  	var container = document.getElementsByClassName("container") [0];
  	container.append(flower26);
    flower26.style.left = (100 * Math.random()) + '%';
    flower26.style.top = (70 * Math.random()) + '%';
    var petal = document.createElement("peta-one");
  	petal.classList.add("peta-one");
  	flower26.append(petal);
    var petal2 = document.createElement("peta-two");
    petal2.classList.add("peta-two");
    flower26.append(petal2);
    var petal3 = document.createElement("peta-three");
    petal3.classList.add("peta-three");
    flower26.append(petal3);
    var petal4 = document.createElement("peta-four");
    petal4.classList.add("peta-four");
    flower26.append(petal4);
    var petal5 = document.createElement("peta-five");
    petal5.classList.add("peta-five");
    flower26.append(petal5);
  }

});





