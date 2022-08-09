var flag=0;
var flag2 = 0;
function editName() 
{
	if(flag==0)
	{
		document.getElementById("editform").style.display="block";
		flag = 1;}
		else
		{
			document.getElementById("editform").style.display="none";
			flag = 0;	
		}
	}

function Change()
{
	var newName;
	newName = document.getElementById("pole").value;
	document.getElementById("FIO").innerHTML = newName;
}

function editPName() 
{
	if(flag2==0)
	{
		document.getElementById("editPform").style.display="block";
		flag2 = 1;}
		else
		{
			document.getElementById("editPform").style.display="none";
			flag2 = 0;	
		}
	}

function Change2()
{
	var newPName;
	newPName = document.getElementById("pole2").value;
	document.getElementById("FIO2").innerHTML = newPName;
}