export const stCapitalize = (s) =>{
    let st = "";
    st = s[0].toUpperCase();
    if(s.length <= 1){
        return st;
    }
    for(var i=1; i<s.length; i++){
        st += s[i].toLowerCase();
    }
    return st;
  }