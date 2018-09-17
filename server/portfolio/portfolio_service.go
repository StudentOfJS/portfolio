package portfolio

import (
	"context"

	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type portfolioService struct{}

func (s *portfolioService) GetBio(ctx context.Context, projectQuery *proto.GetBioRequest) (*proto.GetBioResponse, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))

	b, err := getBio()
	if err != nil {
		return nil, err
	}
	var bio *proto.GetBioResponse
	bio.Bio = b
	return bio, nil
}

func (s *portfolioService) GetProjects(ctx context.Context, projectQuery *proto.ListProjectsRequest) (*proto.ListProjectsResponse, error) {
	grpc.SendHeader(ctx, metadata.Pairs("Pre-Response-Metadata", "Is-sent-as-headers-unary"))
	grpc.SetTrailer(ctx, metadata.Pairs("Post-Response-Metadata", "Is-sent-as-trailers-unary"))

	p, err := getProjects()
	if err != nil {
		return nil, err
	}
	var projects *proto.ListProjectsResponse
	projects.Projects = p
	return projects, nil
}

func (s *portfolioService) GetCV(ctx context.Context, projectQuery *proto.GetCVRequest) (*proto.GetCVResponse, error) {
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
	var cv *proto.GetCVResponse
	cv.Courses = edu
	cv.Jobs = exp
	cv.Skills = skills

	return cv, nil
}
