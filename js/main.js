(() => {
  console.log('fired');

  let nameSelector = document.querySelectorAll("#mainNav li");
  let about =document.querySelectorAll(".contentBio");

  let buttons = document.querySelectorAll("#mainNav li");
  let changeImg = document.querySelector("#img");


  function switchDiv(e) {
    console.log("called");
    for (let i=0; i<about.length; i++ ) {
      about[i].style.display = 'none';
    }

    let selected = e.currentTarget.dataset.plan;
    document.querySelector(`#${selected}`).style.display ='block';
  
  }

  for(let i=0; i<nameSelector.length; i++ ) {
    nameSelector[i].addEventListener("click", switchDiv, false);
  }




  function changePic(e) {
    e.preventDefault();
    changeImg.src="images/"+e.currentTarget.id+".jpg";
  }

  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", changePic,false);
  }


})();








