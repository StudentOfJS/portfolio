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
	getBioFlag := flag.Bool("getb", false, "get bio from server")
	flag.Parse()

	conn, err := grpc.Dial("localhost:8900", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("can not dial server: %v", err)
	}

	client = proto.NewPortfolioServiceClient(conn)

	if *addBioFlag {
		addBio()
	}
	if *getBioFlag {
		getBio()
	}

}

func addBio() {
	b, err := client.AddBio(context.Background(), &proto.AddBioRequest{
		Bio: &proto.Bio{
			Title:       "Rod's Bio",
			Description: "Rod's Bio Description",
		},
	})

	if err != nil {
		log.Fatalf("unable to add bio: %v", err)
	}
	log.Printf("added bio, %s", b.String())
}

func getBio() {
	bio, err := client.GetBio(context.Background(), &proto.GetBioRequest{})
	if err != nil {
		log.Fatalf("unable to fetch bio: %v", err)
	}
	log.Printf("string of bio", bio.String())
	msg := bio.GetBio()

	log.Printf("Bio: %s\n", msg.GetTitle())
	log.Printf("Bio: %s\n", msg.GetDescription())
}
