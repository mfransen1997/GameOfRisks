package me.mfransen

class Player(game: Game,_name: String, _color: String,_x: Int, _y: Int) {
  var x :Int = _x
  var y :Int = _y
  var position :Int = 0
  var color = _color
  var size = 3
  var alive = true
  var name = _name
  def draw(): Unit = {
    if(alive) {
      game.context.beginPath()
      game.context.arc(x, y, 24, 0, 2 * Math.PI)
      game.context.fillStyle = "black"
      game.context.strokeStyle = "black"
      game.context.lineWidth = 4
      game.context.fill()
      game.context.stroke()
      game.context.fillStyle = color
      game.context.beginPath()
      game.context.arc(x, y, size * 3, 0, 2 * Math.PI)
      game.context.lineWidth = 0
      game.context.fill()
    }

  }
  def move(x :Int, y: Int, xFirst: Boolean): Unit = {
    this.x += x
    this.y += y
  }
  def move(pos :Int): Unit = {
    val mov = game.board.getMove(position+pos)
    move(new Move(mov.x-x,mov.y-y,mov.xFirst))
  }
  def setPos(pos :Int): Unit = {
    val mov = game.board.getMove(pos)
    this.x = mov.x
    this.y = mov.y
    if(game.board.tiles(pos).special) {
      size+=3
      game.cyclePlayer()
    } else if(game.board.tiles(pos).owner==(0-1)) {
      game.board.tiles(pos).owner = game.players.indexOf(this)
      game.cyclePlayer()
    } else if(game.board.tiles(pos).owner!=game.players.indexOf(this)){
      size-=1
      game.prompt()
      if(size==0)
        alive=false
    } else if(game.board.tiles(pos).owner==game.players.indexOf(this)) {
      size += 1
      game.cyclePlayer()
    }
    if(size>8)
      size=8

  }
  def move(move :Move): Unit = {
    this.x += move.x
    this.y += move.y
  }
}