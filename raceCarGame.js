var increment=0;
var a = "0";
var translateInc;
var translateIncer;
var playerCorrect=0;
var oppCorrect=0;
var verifyForFarm;
var answerToQuestion;
var imageSelect;
var answerToQuestionFarm=["A","C","C","D","D","D","D","C","C","A"];
var imageSelectDesert=
var imageSelectFarm=["PatternsQ1.png","PatternsQ2.png","PatternsQ3.png","PatternsQ4.png","PatternsQ5.png","PatternsQ6.png","PatternsQ7.png","PatternsQ8.png","PatternsQ9.png","PatternsQ10.png"];
var congrats=["Good Job, on to the next question","Great answer, let's see if you can get this next one.","You're getting good at this","Excellent Work","How did you know that?","Good Work, keep it going with the next one","I really though that would stump you","Terrific Job","Correct, that was amazing","Amazing Math on that last problem.","Type anything to type to finish the race."];
var sorry =["Sorry that was incorrect","You'll get it next time","Next time you'll get it right","Incorrect, keep trying","So close, you'll get it next time","Sadly you got it wrong","I thought this one might stump you","Keep trying, almost there","Oh, you were so close","Type anything to type to finish the race."];
var concentfarm = "hello";

var questionNumber=0;
function farmFunction(){
    window.scrollTo(0,820);
    answerToQuestion=answerToQuestionFarm;
    imageSelect=imageSelectFarm;
      document.getElementById("topWall").style.backgroundImage="url('desert.png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="FarmBackground.png";
        document.getElementById("road").style.backgroundImage="url('FarmToMove.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0px";
        document.getElementById("oppCar").style.left="0px";
        document.getElementById("oppCar").style.transform="translateX(0px)";
        document.getElementById("playerCar").style.transform="translateX(0px)";
         concentfarm=prompt("Do you want to start this race? Please answer YES or NO?");
         if(concentfarm=="YES"||concentfarm=="YeS"||concentfarm=="Yes"||concentfarm=="yes"||concentfarm=="yES"){
           alert("You will see an input bar on the right that you can input your answer.");
           document.getElementById("playeranswer").visibility="visible";
           document.getElementById("introQuestion").visibility="visible";
           document.getElementById("submitButton").visibility="visible";

         }else{
           alert("ok enjoy the cars");
         }
}
function cityFunction(){
    document.getElementById("topWall").style.backgroundImage="url('Citything.png')";
    document.getElementById("topWall").style.visibility="visible";
    document.getElementById("road").style.visibility="visible";
    document.getElementById("raceBackground").src="DowntownBackground.png";
      document.getElementById("road").style.backgroundImage="url('RoadToMove.png')";
      document.getElementById("oppCar").style.transform="translateX(0px)";
      document.getElementById("playerCar").style.transform="translateX(0px)";
        window.scrollTo(0,820);

}
function forestFunction(){
    document.getElementById("topWall").style.backgroundImage="url('forest.png')";
    document.getElementById("topWall").style.visibility="visible";
    document.getElementById("road").style.visibility="visible";
    document.getElementById("raceBackground").src="ForestBackground.png";
      document.getElementById("road").style.backgroundImage="url('ForestRoad (1).png')";
      document.getElementById("playerCar").style.left="0px";document.getElementById("oppCar").style.transform="translateX(0px)";
      document.getElementById("playerCar").style.transform="translateX(0px)";
      document.getElementById("oppCar").style.left="0px";
        window.scrollTo(0,820);
}

function farmFunction(){
    window.scrollTo(0,820);
    answerToQuestion=answerToQuestionFarm;
    imageSelect=imageSelectFarm;
      document.getElementById("topWall").style.backgroundImage="url('farm (5).png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="FarmBackground.png";
        document.getElementById("road").style.backgroundImage="url('FarmToMove.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0px";
        document.getElementById("oppCar").style.left="0px";
        document.getElementById("oppCar").style.transform="translateX(0px)";
        document.getElementById("playerCar").style.transform="translateX(0px)";
         concentfarm=prompt("Do you want to start this race? Please answer YES or NO?");
         if(concentfarm=="YES"||concentfarm=="YeS"||concentfarm=="Yes"||concentfarm=="yes"||concentfarm=="yES"){
           alert("You will see an input bar on the right that you can input your answer.");
           document.getElementById("playeranswer").visibility="visible";
           document.getElementById("introQuestion").visibility="visible";
           document.getElementById("submitButton").visibility="visible";

         }else{
           alert("ok enjoy the cars");
         }
}

function coastFunction(){
  document.getElementById("topWall").style.backgroundImage="url('Coastal.png')";
  document.getElementById("topWall").style.visibility="visible";
  document.getElementById("road").style.visibility="visible";
  document.getElementById("oppCar").style.transform="translateX(0px)";
  document.getElementById("playerCar").style.transform="translateX(0px)";
  document.getElementById("raceBackground").src="CoastalBackground.png";
    document.getElementById("road").style.backgroundImage="url('CoastalRoad.png')";

      window.scrollTo(0,820);
}
var playerCarVal=0;
function mustangSelect(){
  document.getElementById("playerCar").src="Mustang (1).png";
  document.getElementById("MustangButton").value="Selected";
  document.getElementById("MustangButton").onClick="alreadyHave()";
    document.getElementById("bmwButton").onClick="bMWSelect()";

      document.getElementById("chevroletButton").onClick="chevroletSelect()";
        document.getElementById("lamboButton").onClick="lamboSelect()";
        document.getElementById("BugattiButton").onClick="bugattiSelect()";

        document.getElementById("bmwButton").value="BMW";
playerCarVal=0;
      document.getElementById("chargerButton").value="Dodge Charger";
        document.getElementById("chevroletButton").value="Chevrolet";
        chooseOpp();
            document.getElementById("BugattiButton").value="Bugatti";
              document.getElementById("lamboButton").value="Lamborghini";
}
function bMWSelect(){
    document.getElementById("playerCar").src="BMW.png";
    document.getElementById("bmwButton").value="Selected";
    document.getElementById("bmwButton").onClick="alreadyHave()";
  document.getElementById("chargerButton").onClick="chargerSelect()";
    document.getElementById("MustangButton").onClick="mustangSelect()";
      document.getElementById("chevroletButton").onClick="chevroletSelect()";
        document.getElementById("lamboButton").onClick="lamboSelect()";
        document.getElementById("BugattiButton").onClick="bugattiSelect()";
 playerCarVal=1;
        document.getElementById("MustangButton").value="Mustang";
      document.getElementById("chargerButton").value="Dodge Charger";
      chooseOpp();
        document.getElementById("chevroletButton").value="Chevrolet";
            document.getElementById("BugattiButton").value="Bugatti";
              document.getElementById("lamboButton").value="Lamborghini";
}
function chevroletSelect(){
    document.getElementById("playerCar").src="Chevrolet.png";
    document.getElementById("chevroletButton").value="Selected";
    document.getElementById("chevroletButton").onClick="alreadyHave()";
    document.getElementById("bmwButton").onClick="bMWSelect()";
    document.getElementById("MustangButton").onClick="mustangSelect()";
  document.getElementById("chargerButton").onClick="chargerSelect()";
        document.getElementById("lamboButton").onClick="lamboSelect()";
        document.getElementById("BugattiButton").onClick="bugattiSelect()";
        document.getElementById("bmwButton").value="BMW";
        document.getElementById("MustangButton").value="Mustang";

      document.getElementById("chargerButton").value="Dodge Charger";
  playerCarVal=2;
  chooseOpp();
            document.getElementById("BugattiButton").value="Bugatti";
              document.getElementById("lamboButton").value="Lamborghini";
}
function chargerSelect(){
    document.getElementById("playerCar").src="DodgeCharger.png";
    document.getElementById("chargerButton").value="Selected";
    document.getElementById("chargerButton").onClick="alreadyHave()";
    document.getElementById("bmwButton").onClick="bMWSelect()";
    document.getElementById("MustangButton").onClick="mustangSelect()";
      document.getElementById("chevroletButton").onClick="chevroletSelect()";
        document.getElementById("lamboButton").onClick="lamboSelect()";
        document.getElementById("BugattiButton").onClick="bugattiSelect()";
        document.getElementById("bmwButton").value="BMW";
        document.getElementById("MustangButton").value="Mustang";
  playerCarVal=3;
        document.getElementById("chevroletButton").value="Chevrolet";
            document.getElementById("BugattiButton").value="Bugatti";
            chooseOpp();
              document.getElementById("lamboButton").value="Lamborghini";
}
function lamboSelect(){
    document.getElementById("playerCar").src="Lamborghini.png";
    document.getElementById("lamboButton").value="Selected";
    document.getElementById("lamboButton").onClick="alreadyHave()";
    document.getElementById("bmwButton").onClick="bMWSelect()";
    document.getElementById("MustangButton").onClick="mustangSelect()";
  document.getElementById("chargerButton").onClick="chargerSelect()";
    document.getElementById("chevroletButton").onClick="chevroletSelect()";
        document.getElementById("BugattiButton").onClick="bugattiSelect()";
   playerCarVal=4;
        document.getElementById("bmwButton").value="BMW";
        document.getElementById("MustangButton").value="Mustang";
      document.getElementById("chargerButton").value="Dodge Charger";
        document.getElementById("chevroletButton").value="Chevrolet";
        chooseOpp();
            document.getElementById("BugattiButton").value="Bugatti";

}
function bugattiSelect(){
    document.getElementById("playerCar").src="Bugatti.png";
    document.getElementById("BugattiButton").value="Selected";
    document.getElementById("BugattiButton").onClick="alreadyHave()";
    document.getElementById("bmwButton").onClick="bMWSelect()";
    document.getElementById("MustangButton").onClick="mustangSelect()";
  document.getElementById("chargerButton").onClick="chargerSelect()";
    document.getElementById("chevroletButton").onClick="chevroletSelect()";
      document.getElementById("lamboButton").onClick="lamboSelect()";
      document.getElementById("bmwButton").value="BMW";
      document.getElementById("MustangButton").value="Mustang";
    document.getElementById("chargerButton").value="Dodge Charger";
      document.getElementById("chevroletButton").value="Chevrolet";
   playerCarVal=5;
      chooseOpp();
            document.getElementById("lamboButton").value="Lamborghini";
}

function submit(){
  questionNumber++;
    document.getElementById("playeranswer").focus();
   a = document.getElementById("playeranswer").value;
   if(questionNumber==11){
      if(playerCorrect>oppCorrect){
     document.getElementById("road").style.animation="animation: animate 17s linear infinite";
     document.getElementById("topWall").style.animation="  animation: animate 18s linear infinite";
     document.getElementById("endOfRace").style.visibility="visible";
     document.getElementById("endOfRace").style.zIndex="99999999999999999999";
     document.getElementById("introQuestion").style.visibility="hidden";
     document.getElementById("playeranswer").style.visibility="hidden";
     document.getElementById("submitButton").style.visibility="hidden";
     document.getElementById("questions").style.visibility="hidden";
     document.getElementById("retry").style.visibility="visible";
   }else{
     document.getElementById("road").style.animation="animation: animate 17s linear infinite";
     document.getElementById("topWall").style.animation="  animation: animate 18s linear infinite";
     document.getElementById("endOfRace").style.visibility="visible";
     document.getElementById("endOfRace").src="FarmDefeatScreen.png";
     document.getElementById("endOfRace").style.zIndex="99999999999999999999";
     document.getElementById("introQuestion").style.visibility="hidden";
     document.getElementById("playeranswer").style.visibility="hidden";
     document.getElementById("submitButton").style.visibility="hidden";
     document.getElementById("questions").style.visibility="hidden";
     document.getElementById("retry").style.visibility="visible";
   }
   }else{
  if(a==answerToQuestion[increment]){

    playerCorrect++;
    document.getElementById("questions").src=imageSelect[1+increment];
    document.getElementById("playeranswer").focus();
    increment ++;
    document.getElementById("introQuestion").value=congrats[increment];
    translateInc=playerCorrect*160;
     translateIncer="translateX("+translateInc+"px)";
    document.getElementById("playerCar").style.transform=translateIncer;

  }else{
    oppCorrect++;
  document.getElementById("introQuestion").value=sorry[increment];
    document.getElementById("questions").src=imageSelect[1+increment];
      increment ++;
      translateInc=oppCorrect*160;
       translateIncer="translateX("+translateInc+"px)";
      document.getElementById("oppCar").style.transform=translateIncer;

  }
  }
}

function alreadyHave(){
  alert("You already have this car selected.");
}
var cars=["Mustang (1).png","BMW.png","Chevrolet.png","DodgeCharger.png","Lamborghini.png","Bugatti.png"];
function chooseOpp(){
  if(playerCarVal<5){
  document.getElementById("oppCar").src=cars[playerCarVal+1];
  }else{
    document.getElementById("oppCar").src=cars[playerCarVal-1];
  }
}
