package me.mfransen

/**
 * Created by matt on 10/28/15.
 */
class Question(game :Game, text :String, a: String, b: String, c: String, d :String, correct: String) {
  def draw(): Unit = {
    game.context.font = "16px Arial"
    game.context.fillStyle = "black"
    game.context.fillText(text,104,120,432)
    game.context.fillText(s"a) $a",104,240,432)
    game.context.fillText(s"b) $b",104,290,432)
    game.context.fillText(s"c) $c",104,340,432)
    game.context.fillText(s"d) $d",104,390,432)
  }
  def getAnswer(): String = {
    correct
  }
  def getAnswerText() :String = {
    if(correct=="a") {
      a
    } else if(correct=="b") {
      b
    } else if(correct=="c") {
      c
    } else if(correct=="d") {
      d
    } else {
      ""
    }
  }
}
