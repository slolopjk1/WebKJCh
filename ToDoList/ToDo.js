  var myNodelist = document.getElementsByTagName("LI");
      var i;
      for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7"); //x아이콘
        span.className = "close"; //span classname close 선언
        span.appendChild(txt);    //span뒤에 x 가 나온다
        myNodelist[i].appendChild(span);  //li 뒤에 spand이 나온다
      }

    
      var close = document.getElementsByClassName("close"); //span 클래스네임
      var i;
      for (i = 0; i < close.length; i++) { //X 버튼을 누르면 내용을 DISPLAY NONE 해서 숨긴다
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

      

      // Create a new list item when clicking on the "Add" button
      function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert(inputValue+"할일을 입력해주세요");
        } else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("myInput").value = "";
      
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
      }

      function titleElementSave(){
        for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7"); //x아이콘
        span.className = "close"; //span classname close 선언
        span.appendChild(txt);    //span뒤에 x 가 나온다
        myNodelist[i].appendChild(span);  //li 뒤에 spand이 나온다
      }
      }
