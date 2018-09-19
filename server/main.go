package main

import (
	"log"
	"net"

	"github.com/studentofjs/portfolio/server/portfolio"

	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
)

func main() {
	// portfolio.InitCV()
	// grpcServer := grpc.NewServer()

	// portfolioService := portfolio.NewPortfolioService(nil)
	// portfolio_pb.RegisterPortfolioServiceServer(grpcServer, portfolioService)

	// wrappedGrpc := grpcweb.WrapServer(grpcServer)

	// router := chi.NewRouter()
	// router.Use(
	// 	chiMiddleware.Logger,
	// 	chiMiddleware.Recoverer,
	// 	middleware.NewGrpcWebMiddleware(wrappedGrpc).Handler, // Must come before general CORS handling
	// 	cors.New(cors.Options{
	// 		AllowedOrigins:   []string{"*"},
	// 		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	// 		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
	// 		ExposedHeaders:   []string{"Link"},
	// 		AllowCredentials: true,
	// 		MaxAge:           300, // Maximum value not ignored by any of major browsers
	// 	}).Handler,
	// )

	// router.Get("/portfolio", proxy.Portfolio)

	// if err := http.ListenAndServe(":8900", router); err != nil {
	// 	grpclog.Fatalf("failed starting http2 server: %v", err)
	// }

	listener, err := net.Listen("tcp", ":8900")
	if err != nil {
		log.Fatalf("unable to listen on port 8900 port %v", err)
	}

	srv := grpc.NewServer()

	service := portfolio.NewService()

	proto.RegisterPortfolioServiceServer(srv, service)

	srv.Serve(listener)

}
