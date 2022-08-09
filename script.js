var dict = ["яблоко","кот","клоун","платина","наушник","слон","банан","машина","вагон","девять"];
var alfa = "абвгдеёжзийклмнопрстуфхцчшщьыъэюя";
var word = "";

function randomInteger(min,max)
{ 
	var rand = min - 0.5 + Math.random() * (max - min + 1); 
	return Math.round(rand);
}

function fill()
{
	var key = 0;
	var crypt = "";
	key = randomInteger(1, 10);

	document.getElementById("key").insertAdjacentHTML("beforeend", `${key}`);

	word = dict[randomInteger(0, dict.length - 1)];

	document.getElementById("answer").insertAdjacentHTML("beforeend", `${word}`)

	for(var counter = 0; counter < word.length; counter++)
	{
		for(var counter2 = 0; counter2 < alfa.length; counter2++)
		{
			if(word[counter] == alfa[counter2])
			{
				if(counter2 + key > alfa.length)  
				{
					crypt += alfa[counter2 + key - alfa.length]
				}
				else
				{
					crypt += alfa[counter2 + key]
				}
			}
		}
	}
	document.getElementById("crypt_text").insertAdjacentHTML("beforeend", `${crypt}`)
}

function Check()
{
	if(word == document.getElementById("decrypt_text_field").value)
	{
		document.getElementById("error_log").innerHTML = "правильно";
		document.getElementById("error_log").style.background = "green";
	}
	else
	{
		document.getElementById("error_log").innerHTML = "неправильно";
		document.getElementById("error_log").style.background = "red";
	}
}