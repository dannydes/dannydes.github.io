function updateBookType(genre)
{
	document.getElementById("bookGenre").innerHTML=genre;
	
	if(	document.getElementById("bookGenre").innerHTML == "Thriller")
	{
		document.getElementById("bookImageSmall1").src = "images/book1.jpg";
		document.getElementById("bookImageBig1").href = "images/book1.jpg";
		document.getElementById("bookDownload1").href = "images/book1.jpg";
		
		document.getElementById("bookImageSmall2").src = "images/book2.jpg";
		document.getElementById("bookImageBig2").href = "images/book2.jpg";
		document.getElementById("bookDownload2").href = "images/book2.jpg";
	}
	else if(document.getElementById("bookGenre").innerHTML == "War")
	{
		document.getElementById("bookImageSmall1").src = "images/book3.jpg";
		document.getElementById("bookImageBig1").href = "images/book3.jpg";
		document.getElementById("bookDownload1").href = "images/book3.jpg";
		
		document.getElementById("bookImageSmall2").src = "images/book4.jpg";
		document.getElementById("bookImageBig2").href = "images/book4.jpg";
		document.getElementById("bookDownload2").href = "images/book4.jpg";
	}
	else if(document.getElementById("bookGenre").innerHTML == "Music")
	{
		document.getElementById("bookImageSmall1").src = "images/book5.jpg";
		document.getElementById("bookImageBig1").href = "images/book5.jpg";
		document.getElementById("bookDownload1").href = "images/book5.jpg";
		
		document.getElementById("bookImageSmall2").src = "images/book6.jpg";
		document.getElementById("bookImageBig2").href = "images/book6.jpg";
		document.getElementById("bookDownload2").href = "images/book6.jpg";
	}
	else if(document.getElementById("bookGenre").innerHTML == "Adventure")
	{
		document.getElementById("bookImageSmall1").src = "images/book7.jpg";
		document.getElementById("bookImageBig1").href = "images/book7.jpg";
		document.getElementById("bookDownload1").href = "images/book7.jpg";
		
		document.getElementById("bookImageSmall2").src = "images/book8.jpg";
		document.getElementById("bookImageBig2").href = "images/book8.jpg";
		document.getElementById("bookDownload2").href = "images/book8.jpg";
	}
	else if(document.getElementById("bookGenre").innerHTML == "Cooking")
	{
		document.getElementById("bookImageSmall1").src = "images/book9.jpg";
		document.getElementById("bookImageBig1").href = "images/book9.jpg";
		document.getElementById("bookDownload1").href = "images/book9.jpg";
		
		document.getElementById("bookImageSmall2").src = "images/book10.jpg";
		document.getElementById("bookImageBig2").href = "images/book10.jpg";
		document.getElementById("bookDownload2").href = "images/book10.jpg";
	}
}


function loginChecker()
{	
	if(document.getElementById("username").value == "")
	{
		document.getElementById("userSpan").innerHTML = "User field cannot be empty";
		return false;
	}
	else if(document.getElementById("password").value == "")
	{
		document.getElementById("userSpan").innerHTML = "Password field cannot be empty";
		return false;
	}
	else
	{
		return true;
	}
}

function validateForm()
{
	if(isNaN(document.getElementById("10").value))
	{
		document.getElementById("errorMsg").innerHTML = 'The bank account field should be made of only numbers';
		return false;
	}
	else if(	document.getElementById("1").value == "" || document.getElementById("2").value == "" ||  document.getElementById("6").value == "" || 
				document.getElementById("7").value == "" || document.getElementById("8").value == "" || document.getElementById("9").value == ""  )
	{
		document.getElementById("errorMsg").innerHTML = 'No data field may be left empty, please fill in the rest';
		return false;
	}
	else if ( document.getElementById("7").value != document.getElementById("8").value)
	{
		document.getElementById("errorMsg").innerHTML = 'The passwords do not match';
		return false;
	}
	else
	{
		document.getElementById("errorMsg").innerHTML = 'Success, the account has been created, <a href = "index.html"> Head Back to the Home Page </a>';
		return false;
	}
}

function save()
{
	for (var i=1; i < 7;i++)
	{
		if(document.getElementById("textBox" + i ).type != 'hidden' && document.getElementById("textBox" + i ).value != '')
		{
			document.getElementById("data" + i).innerHTML = document.getElementById("textBox" + i ).value;
		}
		document.getElementById("textBox" + i).type = 'hidden';
	}
}

function makeVisible(idText)
{
	document.getElementById(idText).type = 'text';
}

function makeVisiblePass(idText)
{
	document.getElementById(idText).type = 'password';
}

function showAccount()
{
	document.getElementById("account").value = '123-433-543';
}

function saveConf()
{
	document.getElementById("saveData").innerHTML = 'Saved Auto-Subscribe';
}

function sentEmail()
{
	document.getElementById("email").innerHTML = 'E-mail Sent Succesfully';
}

function orderBook()
{
	var year = document.getElementById("3").value; 
	
	if(document.getElementById("1").value == '' || document.getElementById("2").value == '' || document.getElementById("3").value == '')
	{
		document.getElementById("emailConfirm").innerHTML = 'Data fields cannot be left empty';
	}	
	else if(isNaN(year))
	{
		document.getElementById("emailConfirm").innerHTML = 'The year field must be mad of numbers';
	}
	else 
	{
		document.getElementById("emailConfirm").innerHTML = 'Book Ordered Succesfully, we will get back to you via e-mail';
	}
	
}


function searchBook()
{
	var year = document.getElementById("3").value; 
	
	if(document.getElementById("1").value == '' && document.getElementById("2").value == '' && document.getElementById("3").value == '')
	{
		document.getElementById("emailConfirm").innerHTML = 'Fill in atleast one field';
		return false;
	}	
	else if(isNaN(year))
	{
		document.getElementById("emailConfirm").innerHTML = 'The year field must be mad of numbers';
		return false;
	}
	else 
	{
		return true;
	}
	
}