package main

import (
	"flag"
	"log"

	"github.com/studentofjs/portfolio/client/proto"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

var client proto.PortfolioServiceClient

func main() {
	addBioFlag := flag.Bool("addb", false, "add bio to cv")
	flag.Parse()

	conn, err := grpc.Dial("localhost:8900", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("can not dial server: %v", err)
	}

	client = proto.NewPortfolioServiceClient(conn)

	if *addBioFlag {
		addBio()
	}

}

func addBio() {
	bio, err := client.AddBio(context.Background(), &proto.AddBioRequest{
		Bio: &proto.Bio{
			Title:       "Rod's Bio",
			Description: "Rod's Bio Description",
		},
	})

	if err != nil {
		log.Fatalf("unable to add bio: %v", err)
	}

	log.Printf("new Bio: %s\n", bio)
}
