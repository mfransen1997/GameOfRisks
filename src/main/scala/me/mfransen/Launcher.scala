package me.mfransen

import org.scalajs.dom.document
import org.scalajs.dom.raw._

import scala.collection.mutable.ArrayBuffer
import scala.scalajs.js.JSApp
import scala.scalajs.js.annotation.JSExport
import scala.util.Random

object Launcher extends JSApp {
  var windowHTML = "<html><head><title>Game of Risks</title></head><body style='margin: 0; padding: 0'><canvas id='game' style='margin: 0; padding: 0' width='640', height='640'></canvas></body></html>"
  var game: Game = null
  var players = ArrayBuffer[Player]()
  var codes = ArrayBuffer[String]("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f")
  def main(): Unit = {
  }
  @JSExport
  def launch(event: MouseEvent): Unit = {
    val gameWindow = document.open("", "Game of Risks", "width=640,height=640").asInstanceOf[Window]
    gameWindow.document.write(windowHTML)
    game = new Game(gameWindow)
    for(player <- players) {
      game.players :+= new Player(game,player.name,player.color,player.x,player.y)
    }
    game.init()
  }
  @JSExport
  def prompt(message :Int): Unit = {
    game.currentQuestion = message
    game.isPrompted = true
  }
  @JSExport
  def kill(player :Int): Unit = {
    game.players(player).alive = false
  }
  @JSExport
  def addPlayer(event: MouseEvent): Unit = {
    val select = document.getElementById("player-color").asInstanceOf[HTMLSelectElement]
    val name = document.getElementById("player-name").asInstanceOf[HTMLInputElement]
    var color = select.options(select.selectedIndex).asInstanceOf[HTMLOptionElement].text
    if(color == "Random") {
      val r = Random
      color = "#"
      for(i <- 1 to 6) {
        color += codes(r.nextInt(16))
      }
    }
    players:+= new Player(null,name.value,color,32,32)
    val playerOption = document.createElement("option").asInstanceOf[HTMLOptionElement]
    playerOption.text = name.value
    select.selectedIndex = 0
    name.value = ""
    document.getElementById("players").asInstanceOf[HTMLSelectElement].add(playerOption)
  }
}