name := "Game of Risks"

version := "0.0.0"

scalaVersion := "2.11.7"

enablePlugins(ScalaJSPlugin)

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.8.0"

persistLauncher in Compile := true

persistLauncher in Test := false