//type checkString below
function checkString(str){
  if (str.length>=8 && str.length<=20){
    return str;
  }
  else {
    throw RangeError("This is not a valid password...")}
}
//type getString below
function getString(str){
  str= checkString(str);
}
  catch(e){
    console.log(e.message);
    setNumber();
  }
}
