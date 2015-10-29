package me.mfransen

import org.scalajs.dom.document
import org.scalajs.dom.raw._

import scala.collection.mutable.ArrayBuffer
import scala.scalajs.js.JSApp
import scala.scalajs.js.annotation.JSExport

object Launcher extends JSApp {
  var windowHTML = "<html><head><title>Game of Risks</title></head><body style='margin: 0; padding: 0'><canvas id='game' style='margin: 0; padding: 0' width='640', height='640'></canvas></body></html>"
  var game: Game = null
  var players = ArrayBuffer[Player]()
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
    players:+= new Player(null,name.value,select.options(select.selectedIndex).asInstanceOf[HTMLOptionElement].text,32,32)
    val playerOption = document.createElement("option").asInstanceOf[HTMLOptionElement]
    playerOption.text = name.value
    select.selectedIndex = 0
    name.value = ""
    document.getElementById("players").asInstanceOf[HTMLSelectElement].add(playerOption)
  }
}