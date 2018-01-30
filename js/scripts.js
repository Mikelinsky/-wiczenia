var question = prompt('Do you like strawberries?');				
										
switch (question.toLowerCase()) {						
  case 'yes':									
    alert('Great, me too!');							
    break;									
  case 'no':									
    alert('really?');								
    break;									
  default:									
    alert("You did not give a clear answer, so you're probably still wondering.");	
}	