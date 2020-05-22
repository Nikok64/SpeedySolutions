

function desertFunction(){
  document.getElementById("topWall").style.backgroundImage="url('desert.png')";
  document.getElementById("topWall").style.visibility="visible";
  document.getElementById("road").style.visibility="visible";
  document.getElementById("raceBackground").src="DesertBackground.png";
  document.getElementById("road").style.backgroundImage="url('DesertRoad.png')";

  window.scrollTo(0,820);
}
function cityFunction(){
    document.getElementById("topWall").style.backgroundImage="url('Citything.png')";
    document.getElementById("topWall").style.visibility="visible";
    document.getElementById("road").style.visibility="visible";
    document.getElementById("raceBackground").src="DowntownBackground.png";
      document.getElementById("road").style.backgroundImage="url('RoadToMove.png')";

        window.scrollTo(0,820);

}
function forestFunction(){
    document.getElementById("topWall").style.backgroundImage="url('forest.png')";
    document.getElementById("topWall").style.visibility="visible";
    document.getElementById("road").style.visibility="visible";
    document.getElementById("raceBackground").src="ForestBackground.png";
      document.getElementById("road").style.backgroundImage="url('ForestRoad (1).png')";

        window.scrollTo(0,820);
}
function farmFunction(){
      document.getElementById("topWall").style.backgroundImage="url('farm (5).png')";
      document.getElementById("topWall").style.visibility="visible";
      document.getElementById("road").style.visibility="visible";
      document.getElementById("raceBackground").src="FarmBackground.png";
        document.getElementById("road").style.backgroundImage="url('FarmToMove.png')";

          window.scrollTo(0,820);
}
function coastFunction(){
  document.getElementById("topWall").style.backgroundImage="url('Coastal.png')";
  document.getElementById("topWall").style.visibility="visible";
  document.getElementById("road").style.visibility="visible";
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
    document.getElementById("playerCar").src="DodgeCharger.png"
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
    document.getElementById("playerCar").src="Lamborghini.png"
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
    document.getElementById("playerCar").src="Bugatti.png"
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
