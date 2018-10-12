package main

import (
	"fmt"
	"os"

	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/unrolled/secure"
)

func GetPort() string {
	var port = os.Getenv("PORT")
	// Set a default port if there is nothing in the environment
	if port == "" {
		port = "8080"
		fmt.Println("INFO: No PORT environment variable detected, defaulting to " + port)
	}
	return ":" + port
}

func main() {

	secureFunc := func() gin.HandlerFunc {
		return func(c *gin.Context) {
			secureMiddleware := secure.New(secure.Options{
				SSLRedirect: true,
				SSLHost:     "www.rodfolio.com",
			})
			err := secureMiddleware.Process(c.Writer, c.Request)

			// If there was an error, do not continue.
			if err != nil {
				return
			}

			c.Next()
		}
	}()
	r := gin.Default()
	r.Use(secureFunc)
	r.Use(gzip.Gzip(9))
	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.LoadHTMLGlob("build/index.html")
	r.StaticFile("/favicon.ico", "./build/favicon.ico")
	r.Use(static.Serve("/", static.LocalFile("./build", false)))
	r.Run(GetPort())
}
