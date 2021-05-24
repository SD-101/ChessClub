/// <reference path="Scripts/jquery-3.5.1.js" />
insert = function insert(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

setCopyRight = function setCopyRight(main_string) {
var intYear = new Date().getFullYear();
return insert($('#copyright').html(), " " + intYear.toString(), 1);
}

