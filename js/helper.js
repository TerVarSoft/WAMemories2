function replaceAll(str, find, replace) {  
  try{
    return str.replace(new RegExp(find, 'g'), replace);
  }catch(ex){
      console.log("Error replacing the emoji", ex);
    return str;
  }
}