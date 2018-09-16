package portfolio

import (
	"context"
	"strings"

	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
)

type projectService struct{}

func (s *projectService) GetProjects(ctx context.Context, projectQuery *proto.ListProjectsRequest) (*proto.Projects, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))

	return getProjects()

	return nil, grpc.Errorf(codes.NotFound, "Book could not be found")
}

func (s *projectService) QueryBooks(bookQuery *library.QueryBooksRequest, stream library.BookService_QueryBooksServer) error {
	stream.SendHeader(metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-stream"))
	for _, book := range books {
		if strings.HasPrefix(book.Author, bookQuery.AuthorPrefix) {
			stream.Send(book)
		}
	}
	stream.SetTrailer(metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-stream"))
	return nil
}
