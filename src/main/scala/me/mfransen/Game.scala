package me.mfransen
import org.scalajs.dom
import org.scalajs.dom.raw.{CanvasRenderingContext2D, Event, HTMLCanvasElement, MouseEvent, Window}

import scala.collection.mutable.ArrayBuffer

class Game(window :Window) {
  var document = window.document
  var canvas = document.getElementById("game").asInstanceOf[HTMLCanvasElement]
  var context = canvas.getContext("2d").asInstanceOf[CanvasRenderingContext2D]
  var assets = new AssetManager(document)
  var alpha :Int = 0
  var players = ArrayBuffer[Player]()
  var tileFrequency = 4
  var currentDie = 1
  var random = scala.util.Random
  var rolls = 0
  var board = new Board(this)
  var dieDone = true
  var currentPlayer = 0
  var task :Int = 0
  var isPrompted = false
  var currentQuestion = 0
  var questions = ArrayBuffer[Question]()
  var sources = ArrayBuffer[String]()
  def loadAssets() :Unit = {
    assets loadAsset("tile", "tile.png")
    assets loadAsset("tile-special", "tile-special.png")
    for(i <- 1 to 6) {
      assets loadAsset(s"dice$i", s"dice-$i.png")
    }
  }
  def loadQuestion(): Unit = {
    questions :+= new Question(this,"Approximately how many deaths are caused by smoking each year in the United States?(\"Health Effects\")","480,000,000","480","480,000","48,000","c")
    questions :+= new Question(this,"How many more people have people died from premature smoking than all the US wars?(\"Health Effects\")","3 times as many","5 times","10 times","20 times", "c");
    questions :+= new Question(this,"About how many deaths from COPD are caused by smoking?(\"Health Effects\")","8 out of 10","25%","1/3","2","a")
    questions :+= new Question(this,"Smoking is estimated to increase the risk for stroke by(\"Health Effects\")","1-2 times","2-3 times","3-4 times","2-4 times","d")
    questions :+= new Question(this,"Just after x many year(s) of smoking risk of heart attack your risk of heart attack drops sharply(\"Health Effects\")","2","1","4","5","b")
    questions :+= new Question(this,"Number of alcoholic liver disease deaths(\"Alcohol\")","18,146","18,000","23,618","15,000","a")
    questions :+= new Question(this,"Number of alcohol-induced deaths, excluding accidents and homicides(\"Alcohol\")","29,001","30,000","15,583","32,000","a")
    questions :+= new Question(this,"What BMI is considered overweight(\"Do\")","17","27","30","50","b")
    questions :+= new Question(this,"What is the \"Target\" BMI(\"Do\")","13.4-12","12-18.5","18.5-24.9","24.9-50","c")
    questions :+= new Question(this,"What is the \"Target\" Blood Pressure? (\"Do\")","60/20 mm Hg","120/30 mm Hg","160/80 mm Hg","120/80 mm Hg","d")
    questions :+= new Question(this, "Overweight increases the risk of ischemic stroke by what percent? (\"Health Risks\")","22%","32%","15%","58%","a")
    questions :+= new Question(this, "Which of the following can cause high blood pressure?(\"copy\")","Overweight","alcohol consumption","lack of physical exercise","all of the above","d")
  }
  def cyclePlayer(initial :Int): Boolean = {
    currentPlayer+=1
    if(currentPlayer>=players.length)
      currentPlayer=0
    if(!players(currentPlayer).alive && currentPlayer!=initial)
      cyclePlayer(initial)
    if(currentPlayer == initial)
      true
    else
      false
  }
  def cyclePlayer(): Boolean = {
    cyclePlayer(currentPlayer)
  }
  def draw() :Unit = {
     context.clearRect(0, 0, 640, 640)
     board.draw()
     for(player <- players) {
       player.draw()
     }
    context.drawImage(assets.assets(s"dice$currentDie"), 272, 272, 96, 96)
    if(isPrompted) {
      context.fillStyle = "lightGray"
      context.strokeStyle = "black"
      context.lineWidth=1
      context.fillRect(96,96,448,448)
      context.strokeRect(96,96,448,448)
      questions(currentQuestion).draw()
    }
  }
  
  def init() : Unit = {
    loadAssets()
    loadQuestion()
    board.generate()
    canvas.onclick = (e :Event) => click(e)
    task = dom.setInterval(() => update(), 50)
  }
  def click(e :Event): Unit = {
    val event = e.asInstanceOf[MouseEvent]
    if(event.clientX>=272&&event.clientY>=272&&event.clientX<=368&&event.clientY<=368 && !isPrompted) {
      if(dieDone) {
        rolls = 16
        dieDone = false
      }
    }else if(isPrompted&&event.clientX>=104&&event.clientY<=536) {
      if(event.clientY>=224&&event.clientY<=260) {
        promptFinish("a")
      } else if(event.clientY>=274&&event.clientY<=308)  {
        promptFinish("b")
      } else if(event.clientY>=324&&event.clientY<=360) {
        promptFinish("c")
      } else if(event.clientY>=374&&event.clientY<=408) {
        promptFinish("d")
      }
    }
  }
  def getAlive :Int = {
    var result = 0
    for(player <- players)
      if(player.alive)
        result+=1
    result
  }
  def getLastPlayer :Player = {
    for(player <- players)
      if(player.alive)
        return player
    null
  }
  def update() :Unit = {
    alpha += 1
    if (!dieDone && alpha % 2 == 0) {
      currentDie = random.nextInt(6) + 1
      rolls -= 1
    }
    if (!dieDone && rolls == 0) {
      dieDone = true
      var newPos = players(currentPlayer).position+currentDie
      if(newPos >= 36) {
        newPos -=36
      }
      players(currentPlayer).position = newPos
      players(currentPlayer).setPos(newPos)

    }
    if(getAlive==1) {
      window.alert(s"${getLastPlayer.name} Wins")
      window.close()
      dom.clearInterval(task)
    }
    draw()
  }
  def prompt(): Unit = {
    currentQuestion = random.nextInt(questions.length)
    isPrompted = true
  }
  def promptFinish(result :String): Unit = {
    isPrompted = false
    if(result == questions(currentQuestion).getAnswer()) {
      board.tiles(players(currentPlayer).position).owner = currentPlayer
      window.alert("Correct!")
    } else {
      window.alert(s"Incorrect the answer is:\n${questions(currentQuestion).getAnswerText()}")
    }
    cyclePlayer()
  }
}