var scrollTop = window.pageYOffset;
var scrollLeft= window.pageXOffset;
var scrollLockvar = true;
var pass;

 alert("Welcome to Speedy Solutions, the racing tournament of Integrated Math.");
 alert("This race is a tournament that tests your ability in all 5 units of this math class.");
 alert("Compete in all of these races, and fight against the sloth lord.");
 alert("At the end if you finish, you will get a special prize, so get to racing.");
 alert("Pick a car of your choice, and then jump into the race, you can change your car between, but not during a race. Good Luck");
 window.onscroll= function(){
   if(scrollLockvar===true){
   window.scrollTo(0,0);
 }else{
   window.scrollTo(0,800);
 }
 };
function retry(){
  if(imageSelect==imageSelectFarm){
    farmFunction();
  }else if(imageSelect==imageSelectDown){
    cityFunction();
  }else if(imageSelect==imageSelectPlane){
    coastFunction();
  }else if(imageSelect==imageSelectForest){
    forestFunction();
  }else{
    desertFunction();
  }
}

var increment=0;
var a = "0";
var translateInc;
var translateIncer;
var playerCorrect=0;
var oppCorrect=0;
var verifyForFarm;
var answerToQuestion;
var imageSelect;
var victoryScreen;
var defeatScreen;
var answerToQuestionFarm=["A","C","C","D","D","D","D","C","C","A"];
var answerToQuestionDesert=['C','A','D',"C",'D','C','C','C','E'];
var answerToQuestionDown=['E','B','A','B','A','A','C','B','B','B'];
var answerToQuestionGrowth=['A','C','D','A','D','C','A','A','B','A'];
var answerToQuestionPlane=['B','B','A','E','A','D','C','B','B','B'];
var imageSelectPlane=["PlaneQ1.png","PlaneQ2.png","PlaneQ3.png","PlaneQ4.png","PlaneQ5.png","PlaneQ6.png","PlaneQ7.png","PlaneQ8.png","PlaneQ9.png","PlaneQ10.png"];
var imageSelectForest=["GrowthQ1.png","GrowthQ2.png","GrowthQ3.png","GrowthQ4.png","GrowthQ5.png","GrowthQ6.png","GrowthQ7.png","GrowthQ8.png","GrowthQ9.png","GrowthQ10.png"];
var imageSelectDown=["DownQ1.png","DownQ2.png","DownQ3.png","DownQ4.png","DownQ5.png","DownQ6.png","DownQ7.png","DownQ8.png","DownQ9.png","DownQ10.png"];
var imageSelectDesert=["ChangeQ1.png","ChangeQ2.png","ChangeQ3.png","ChangeQ4.png","ChangeQ5.png","ChangeQ6.png","ChangeQ7.png","ChangeQ8.png","ChangeQ9.png","ChangeQ10.png"];
var imageSelectFarm=["PatternsQ1.png","PatternsQ2.png","PatternsQ3.png","PatternsQ4.png","PatternsQ5.png","PatternsQ6.png","PatternsQ7.png","PatternsQ8.png","PatternsQ9.png","PatternsQ10.png"];
var congrats=["Good Job, on to the next question","Great answer, let's see if you can get this next one.","You're getting good at this","Excellent Work","How did you know that?","Good Work, keep it going with the next one","I really though that would stump you","Terrific Job","Correct, that was amazing","Amazing Math on that last problem.","Type anything to type to finish the race."];
var sorry =["Sorry that was incorrect","You'll get it next time","Next time you'll get it right","Incorrect, keep trying","So close, you'll get it next time","Sadly you got it wrong","I thought this one might stump you","Keep trying, almost there","Oh, you were so close","Type anything to type to finish the race."];

var questionNumber=0;
function desertFunction(){
  document.getElementById("LockedPlane").style.zIndex=0;
  document.getElementById("LockedPlane").style.visibility='hidden';
  scrollLockvar=false;
  playerCorrect=0;
  oppCorrect=0;
  increment=0;
  questionNumber=0;
  victoryScreen="DesertVictoryScreen.png";
  defeatScreen="DesertDefeatScreen.png";
  document.getElementById("playeranswer").style.visibility="visible";
  document.getElementById("submitButton").style.visibility="visible";
  document.getElementById("introQuestion").style.visibility="visible";
  document.getElementById("questions").style.visibility='visible';
    answerToQuestion=answerToQuestionDesert;
    imageSelect=imageSelectDesert;
    document.getElementById("nextRace").style.visibility="hidden";
 document.getElementById("endOfRace").style.visibility="hidden";
    window.scrollTo(0,1000);
      document.getElementById("retry").style.visibility="hidden";
      document.getElementById("topWall").style.backgroundImage="url('desert.png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="DesertBackground.png";
        document.getElementById("road").style.backgroundImage="url('DesertRoad.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0px";
        document.getElementById("oppCar").style.left="0px";
        document.getElementById("oppCar").style.transform="translateX(0px)";
        document.getElementById("playerCar").style.transform="translateX(0px)";
           alert("You will see an input bar on the right that you can input your answer.");
            document.getElementById("questions").src="ChangeQ1.png";
           document.getElementById("playeranswer").style.visibility="visible";
           document.getElementById("submitButton").style.visibility="visible";
           document.getElementById("introQuestion").style.visibility="visible";
           document.getElementById("questions").style.visibility='visible';
}
function cityFunction(){

    scrollLockvar=false;
  playerCorrect=0;
  oppCorrect=0;
  increment=0;
  questionNumber=0;
  document.getElementById("playeranswer").style.visibility="visible";
  document.getElementById("submitButton").style.visibility="visible";
  document.getElementById("introQuestion").style.visibility="visible";
  document.getElementById("questions").style.visibility='visible';
  victoryScreen="CityVictoryScreen.png";
  defeatScreen="CityDefeatScreen.png";
     document.getElementById("nextRace").style.visibility="hidden";
  document.getElementById("endOfRace").style.visibility="hidden";
      window.scrollTo(0,1000);
       document.getElementById("retry").style.visibility="hidden";
    answerToQuestion=answerToQuestionDown;
    imageSelect=imageSelectDown;
      document.getElementById("topWall").style.backgroundImage="url('Citything.png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="DowntownBackground.png";
        document.getElementById("road").style.backgroundImage="url('RoadToMove.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0%";
        document.getElementById("oppCar").style.left="0%";
        document.getElementById("oppCar").style.transform="translateX(0%)";
        document.getElementById("playerCar").style.transform="translateX(0%)";

                      alert("You will see an input bar on the right that you can input your answer.");
                                 alert("remember not to have ANY spaces in your answer! this will throw off the system");
                       document.getElementById("questions").src="DownQ1.png";
                      document.getElementById("playeranswer").style.visibility="visible";
                      document.getElementById("submitButton").style.visibility="visible";
                      document.getElementById("introQuestion").style.visibility="visible";
                      document.getElementById("questions").style.visibility='visible';

           }

function forestFunction(){
  document.getElementById("LockedCity").style.zIndex=0;
  document.getElementById("LockedCity").style.visibility='hidden';
    scrollLockvar=false;
  playerCorrect=0;
  oppCorrect=0;
  increment=0;
  questionNumber=0;
  victoryScreen="ForestVictoryScreen.png";
  defeatScreen="ForestDefeatScreen.png";
     document.getElementById("nextRace").style.visibility="hidden";
  document.getElementById("endOfRace").style.visibility="hidden";
    window.scrollTo(0,1000);
       document.getElementById("retry").style.visibility="hidden";
    answerToQuestion=answerToQuestionGrowth;
    imageSelect=imageSelectForest;
      document.getElementById("topWall").style.backgroundImage="url('forest.png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="ForestBackground.png";
        document.getElementById("road").style.backgroundImage="url('ForestRoad (1).png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0%";
        document.getElementById("oppCar").style.left="0%";
        document.getElementById("oppCar").style.transform="translateX(0%)";
        document.getElementById("playerCar").style.transform="translateX(0%)";


                      alert("You will see an input bar on the right that you can input your answer.");
                                 alert("remember not to have ANY spaces in your answer! this will throw off the system");
                       document.getElementById("questions").src="GrowthQ1.png";
                      document.getElementById("playeranswer").style.visibility="visible";
                      document.getElementById("submitButton").style.visibility="visible";
                      document.getElementById("introQuestion").style.visibility="visible";
                      document.getElementById("questions").style.visibility='visible';

           }

function farmFunction(){
    scrollLockvar=false;
  victoryScreen="FarmVictoryScreen.png";
  defeatScreen="FarmDefeatScreen.png";
  document.getElementById("LockedEgypt").style.zIndex=0;
  document.getElementById("LockedEgypt").style.visibility='hidden';
  document.getElementById("playeranswer").style.visibility="visible";
  document.getElementById("submitButton").style.visibility="visible";
  document.getElementById("introQuestion").style.visibility="visible";
  document.getElementById("questions").style.visibility='visible';
  playerCorrect=0;
  oppCorrect=0;
  increment=0;
  questionNumber=0;
    window.scrollTo(0,1000);
    answerToQuestion=answerToQuestionFarm;
       document.getElementById("retry").style.visibility="hidden";
      document.getElementById("endOfRace").style.visibility="hidden";
    imageSelect=imageSelectFarm;
      document.getElementById("topWall").style.backgroundImage="url('farm (5).png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="FarmBackground.png";
        document.getElementById("road").style.backgroundImage="url('FarmToMove.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0%";
        document.getElementById("oppCar").style.left="0%";
        document.getElementById("oppCar").style.transform="translateX(0%)";
        document.getElementById("playerCar").style.transform="translateX(0%)";



             document.getElementById("questions").src="PatternsQ1.png";
           alert("remember not to have ANY spaces in your answer! this will throw off the system");
           alert("You will see an input bar on the right that you can input your answer.");
           document.getElementById("playeranswer").visibility="visible";
           document.getElementById("introQuestion").visibility="visible";
           document.getElementById("submitButton").visibility="visible";
           document.getElementById("nextRace").style.visibility="hidden";
            document.getElementById("questions").style.visibility='visible';

}

function coastFunction(){
  document.getElementById("LockedGrowth").style.zIndex=0;
  document.getElementById("LockedGrowth").style.visibility='hidden';
    scrollLockvar=false;
  victoryScreen="CoastalVictoryScreen.png";
  defeatScreen="CoastalDefeatScreen.png";
  playerCorrect=0;
  oppCorrect=0;
  increment=0;
  questionNumber=0;
    window.scrollTo(0,1000);
    answerToQuestion=answerToQuestionPlane;
    document.getElementById("playeranswer").style.visibility="visible";
    document.getElementById("submitButton").style.visibility="visible";
    document.getElementById("introQuestion").style.visibility="visible";
    document.getElementById("questions").style.visibility='visible';
       document.getElementById("retry").style.visibility="hidden";
      document.getElementById("endOfRace").style.visibility="hidden";
    imageSelect=imageSelectPlane;
      document.getElementById("topWall").style.backgroundImage="url('Coastal.png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="CoastalBackground.png";
        document.getElementById("road").style.backgroundImage="url('CoastalRoad.png')";
        document.getElementById("endOfRace").src="FarmVictoryScreen.png";
        document.getElementById("playerCar").style.left="0%";
        document.getElementById("oppCar").style.left="0%";
        document.getElementById("oppCar").style.transform="translateX(0%)";
        document.getElementById("playerCar").style.transform="translateX(0%)";



           alert("remember not to have ANY spaces in your answer! this will throw off the system");
           alert("You will see an input bar on the right that you can input your answer.");
              document.getElementById("questions").src="PlaneQ1.png";
           document.getElementById("playeranswer").visibility="visible";
           document.getElementById("introQuestion").visibility="visible";
           document.getElementById("submitButton").visibility="visible";
           document.getElementById("nextRace").style.visibility="hidden";
            document.getElementById("questions").style.visibility='visible';

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
     document.getElementById("endOfRace").src=victoryScreen;
     document.getElementById("endOfRace").style.zIndex="99999999999999999999";
     document.getElementById("introQuestion").style.visibility="hidden";
     document.getElementById("playeranswer").style.visibility="hidden";
     document.getElementById("submitButton").style.visibility="hidden";
     document.getElementById("questions").style.visibility="hidden";
     document.getElementById("retry").style.visibility="visible";
     document.getElementById("nextRace").style.visibility="visible";
       scrollLockvar=true;
       pass=true;
   }else{
     document.getElementById("road").style.animation="animation: animate 17s linear infinite";
     document.getElementById("topWall").style.animation="  animation: animate 18s linear infinite";
     document.getElementById("endOfRace").style.visibility="visible";
     document.getElementById("endOfRace").src=defeatScreen;
     document.getElementById("endOfRace").style.zIndex="99999999999999999999";
     document.getElementById("introQuestion").style.visibility="hidden";
     document.getElementById("playeranswer").style.visibility="hidden";
     document.getElementById("submitButton").style.visibility="hidden";
     document.getElementById("questions").style.visibility="hidden";
     document.getElementById("retry").style.visibility="visible";
     document.getElementById("nextRace").style.visibility="visible";
   }
   }else{
  if(a==answerToQuestion[increment]){

    playerCorrect++;
    document.getElementById("questions").src=imageSelect[1+increment];
    document.getElementById("playeranswer").focus();
    increment ++;
    document.getElementById("introQuestion").value=congrats[increment];
    translateInc=playerCorrect*140;
     translateIncer="translateX("+translateInc+"px)";
    document.getElementById("playerCar").style.transform=translateIncer;

  }else{
    oppCorrect++;
  document.getElementById("introQuestion").value=sorry[increment];
    document.getElementById("questions").src=imageSelect[1+increment];
      increment ++;
      translateInc=oppCorrect*140;
       translateIncer="translateX("+translateInc+"px)";
      document.getElementById("oppCar").style.transform=translateIncer;

  }
  }
}
function nextRace(){
  if(pass===true){
  window.scrollTo(0,0);
}else{
  alert("Looks like you didn't win the last race, try the race again to see if you can win.");
  retry();
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
