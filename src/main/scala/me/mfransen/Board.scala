package me.mfransen

class Board(game : Game) {
  var tiles = Array[Tile]()
  def draw() {
    for(tile <- tiles) {
      if(tile.special)
        game.context.drawImage(game.assets.assets("tile-special"), tile.x, tile.y, 64, 64)
      else {
        game.context.drawImage(game.assets.assets("tile"), tile.x, tile.y, 64, 64)
        game.context.beginPath()
        game.context.rect(tile.x,tile.y,64,64)
        game.context.lineWidth=1
        if(tile.owner!=(0-1)) {
          game.context.fillStyle = game.players(tile.owner).color
          game.context.fill()
        }

        game.context.stroke()
      }
      game.context.lineWidth=1
      game.context.strokeRect(tile.x, tile.y, 64, 64)
    }
  }
  def generate() :Unit = {

    for(i <- 0 to 9) {
      tiles(i) = new Tile(i*64,0,false)
    }
    for(i <- 10 to 18) {
      tiles(i) = new Tile(576,(i-9)*64,false)
    }
    for(i <- 19 to 27) {
      tiles(i) = new Tile(0-(i-27)*64,576,false)
    }
    for(i <- 28 to 35) {
      tiles(i) = new Tile(0,0-(i-36)*64,false)
    }
    tiles(0).special = true
    tiles(9).special = true
    tiles(18).special = true
    tiles(27).special = true
  }
  def getMove(pos :Int) :Move = {
    if(pos >= 0 && pos <= 9) {
      new Move(pos*64+32,32,true)
    } else if(pos >= 10 && pos <= 18) {
      new Move(609,(pos-9)*64+32,false)
    } else if(pos >= 19 && pos <= 27) {
      new Move(32-(pos-27)*64,609,true)
    } else if(pos>=28 && pos <=35) {
      new Move(32,0-(pos-36)*64+32,false)
    } else {
      null
    }
  }
}