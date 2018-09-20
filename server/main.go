package main

import (
	"net/http"

	"github.com/go-chi/chi"
	chiMiddleware "github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/studentofjs/portfolio/server/middleware"
	"github.com/studentofjs/portfolio/server/portfolio"
	"github.com/studentofjs/portfolio/server/proto"
	"github.com/studentofjs/portfolio/server/proxy"

	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

func main() {
	portfolio.InitCV()
	grpcServer := grpc.NewServer()

	portfolioService := portfolio.NewService()
	proto.RegisterPortfolioServiceServer(grpcServer, portfolioService)

	wrappedGrpc := grpcweb.WrapServer(grpcServer)

	router := chi.NewRouter()
	router.Use(
		chiMiddleware.Logger,
		chiMiddleware.Recoverer,
		middleware.NewGrpcWebMiddleware(wrappedGrpc).Handler, // Must come before general CORS handling
		cors.New(cors.Options{
			AllowedOrigins:   []string{"*"},
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: true,
			MaxAge:           300, // Maximum value not ignored by any of major browsers
		}).Handler,
	)

	router.Get("/portfolio", proxy.Portfolio)
	if err := http.ListenAndServe(":8900", router); err != nil {
		grpclog.Fatalf("failed starting http2 server: %v", err)
	}
}
