let slideIndex = 0;
showSlides();

function showSlides(){
	let i;
	let slides =
	document.getElementByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 2000);
}

var status = "less";
function toggleContent(){
function toggleContent(){
	var i="I have two cats named Pops and Tofu, and a horse named Moon. I enjoy cooking, baking, gaming, and reading during my off time. My favorite games are Stardew Valley and The Sims. I also enjoy traveling, hiking, and camping.";
	
	if (status == "less"){
		document.getElementById("content").innerHTML=i;
		document.getElementByIs("button").innerText = "See Less";
		status = "more";
	}
	else if (status == "more"){
		document.getElementById("content").innerHTML = " ";
		document.getElementByIs("button").innerText = "See More";
		status = "less";
	}
}

var status = "less";
function toggleContent2(){
	var i="I have always really enjoyed helping people, and I think that is why I want to become a therapist. The brain and mental health are very fascinating to me, and I want to work primarily with families and children. I want to be able to help families function better and provide ways for them to work through their issues.";
	
	if (status == "less"){
		document.getElementById("content2").innerHTML=i;
		document.getElementByIs("button2").innerText = "See Less";
		status = "more";
	}
	else if (status == "more"){
		document.getElementById("content2").innerHTML = " ";
		document.getElementByIs("button2").innerText = "See More";
		status = "less";
	}
}

function results(quiz);{
	if(value == "correct"){
		i ++;
		alert("correct!");
	}
	else(value == "incorrect"){
		i == 0;
	}
}