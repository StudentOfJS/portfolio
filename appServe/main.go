package main

import (
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(gzip.Gzip(9))
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.LoadHTMLGlob("build/index.html")
	r.Use(static.Serve("/", static.LocalFile("./build", false)))
	r.Run(":8080")
}
