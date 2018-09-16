package portfolio

import (
	"context"
	"strings"

	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type projectService struct{}

func (s *projectService) GetProjects(ctx context.Context, projectQuery *proto.ListProjectsRequest) (*proto.Projects, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))

	return getProjects()
}

func (s *projectService) GetCV(ctx context.Context, projectQuery *proto.GetCVRequest) (*proto.GetCVResponse, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))
	edu, err := getEducation()
	if err != nil {
		return nil, err
	}
	exp, err := getExperience()
	if err != nil {
		return nil, err
	}
	skills, err := getSkills()
	if err != nil {
		return nil, err
	}
	cv := proto.GetCVResponse{
		Courses: edu,
		Jobs:    exp,
		Skills:  skills,
	}

	return cv, nill
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
