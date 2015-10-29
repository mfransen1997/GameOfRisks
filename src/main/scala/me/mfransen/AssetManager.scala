package me.mfransen

import org.scalajs.dom.raw.Document
import org.scalajs.dom.raw.HTMLDivElement
import org.scalajs.dom.raw.HTMLImageElement
import scala.collection.mutable

class AssetManager(document: Document) {
  var div = document.createElement("div").asInstanceOf[HTMLDivElement]
  div.style.display="none"
  document.getElementsByTagName("body")(0).appendChild(div)
  var assets = mutable.Map[String,HTMLImageElement]()
  def loadAsset(name: String, file: String) :Unit = {
    val img: HTMLImageElement = document.createElement("img").asInstanceOf[HTMLImageElement]
    img.id = name
    img.src = s"assets/$file"
    assets.put(name, img)
    div.appendChild(img)
  }
}