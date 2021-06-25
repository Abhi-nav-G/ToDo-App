
document.querySelector("#print-value").addEventListener("click", overall);
function overall(){
  //accessing values
    
    var dayValue = document.querySelector("#days").value;
    
    //console.log(h1InsideDiv);
    var inpValue = document.querySelector(".form-control").value;
    var createList = document.createElement("li");
    createList.setAttribute("class", "list-group-item");

    //creating h4 day tags
    
      var createText = document.createElement("h4");
      var upper = dayValue.toUpperCase();
      createText.setAttribute("id", "createH");
    
      //console.log(upper);
      
    
      createText.textContent =  upper;
      //document.getElementsByClassName(dayValue)[0].append(createText);
        var no = document.getElementById("createH");
        var checkh1 = document.getElementsByClassName(dayValue)[0].contains(no);
        
      
        if(checkh1 == false){
          document.getElementsByClassName(dayValue)[0].append(createText);
        }
        //console.log(checkh1);
      //if (checkh1 == false){
      //  document.getElementsByClassName(dayValue)[0].append(createText);
      //}
      
      //console.log(createText);
      
    
    
    // create input
    var createInput = document.createElement("input");
    createInput.type = "checkbox";
    createInput.setAttribute("id", "check");
    createInput.setAttribute("class", "strikethrough");

    //create label for input
    var createLabel = document.createElement("label");
    createLabel.setAttribute("for", "check");
    createLabel.setAttribute("class", "stri");
    labelValue = document.createTextNode(inpValue);
    createLabel.append(labelValue);

    // append input and label to list

    createList.append(createInput);

    createList.append(createLabel);

    
    
      //realValue = document.createTextNode(inpValue);
      //createList.append(realValue);
    //document.querySelector("#simp").append(createList);
    document.getElementById(dayValue).append(createList);

    document.querySelector(".form-control").value = "";
   
}