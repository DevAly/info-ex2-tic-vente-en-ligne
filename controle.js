//Vente en ligne
function fillDateAndTime(){

   d = new Date();
   f.T1.value =  d.getDate()+"/"+(d.getMonth() + 1)+ "/"+ d.getFullYear();
   f.T2.value =  d.getHours()+":"+d.getMinutes() + ":"+ d.getSeconds();
}


function incrementer(T){
  value =  Number(T.value)
  value = value +1;
  
  if(value >= 0 && value <= 9){
   T.value = value ;
  }
}

function decrementer(T){
  value =  Number(T.value)
  value = value -1;
  
  if(value >= 0 && value <= 9){
   T.value = value ;
  }
}


//Verify section

function verif2(){

  if(!isValidQty()){
     alert('Qté est requis, Au moins un champ Qté admet une valeur superieur a zero!');
    return false;
  }
  
  if(!isValidCodeClient()){
     alert('Code client invalid!');
    return false;
  }
  
  
  if(!isValidPassword()){
     alert('Mot de passe doit etre compose de compose de 8 caractére');
    return false;

  }

}

function isValidQty(){

 validQty1 = false;
 validQty2 = false;
 
 qty1 =  Number(f.T3.value);
 qty2 =  Number(f.T4.value);
 
 if(qty1 >= 0 && qty1 <= 9){
    validQty1 = true;
 }
 
 if(qty2 >= 0 && qty2 <= 9){
    validQty2 = true;
 }
 
 if((validQty1 && validQty2) && (qty1 > 0 || qty2  > 0)){
 
    if(qty1 > 0 && !isValidSelect(f.D1)){
      return false;
    }
    
    if(qty2 > 0 && !isValidSelect(f.D2)){
      return false;
    }

 	return true;
 }
 

return false;
}

function isValidSelect(D){

 if(D.value != 'Séléctionner un article'){
    return true;
 }
 
 return false;
}


function isValidCodeClient(){
   
   codeClient = f.T5.value;
   if(codeClient.substring(0,2) >= 'A' && codeClient.substring(0,2) <= 'Z' && isValidNumber(codeClient.substring(2)) && codeClient.length == 8){
   	return true;
   }
  
}


function isValidNumber(n){
  valid = true;
  for (i=0; i < n.length; i++){
       if(isNaN(n.charAt(i))){
          valid = false;
       }
  }
  
  return valid;
}


function isValidPassword(){

  if(f.T6.value.length != 8){
    return false;
  }
  
  return true;
}







