function display() {
			var a = document.getElementById("name").innerHTML;
            alert("User name is: "+a);
		}
function change() {
			var b = prompt("enter the user");
			var a = document.getElementById("name").innerHTML=b;
			alert("User name is: "+a);
		}
function change_style() {
			document.getElementById("about").style.color = "red";
            document.getElementById("about").style.fontFamily="Times New Roman";
            document.getElementById("about").style.backgroundColor="#766";
		}
function Uppercase() {
			var x = document.getElementById("inp");
			x.value = x.value.toUpperCase();
			alert(x.value)
		}
function highlight() {
			var ele = document.getElementsByTagName("b");
            for(var i=0;i<ele.length;i++)
                {
                    ele[i].style.color = "red";
                }
		}
function normal(argument) {
			var ele = document.getElementsByTagName("b");
            for(var i=0;i<ele.length;i++){
                ele[i].style.color = "black";
            }
		}
        
		