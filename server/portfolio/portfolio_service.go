package portfolio

import (
	"context"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"

	"github.com/studentofjs/portfolio/server/proto"
)

type portfolioService struct {
	api *portfolioAPI
}

func NewPortfolioService(api *portfolioAPI) *portfolioService {
	if api == nil {
		api = NewPortfolioAPI(nil)
	}
	return &portfolioService{api}
}

func (s *portfolioService) GetCV(req *proto.GetCVRequest, res proto.PortfolioService_GetCVServer) error {

	bio, err := s.api.getBio(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	projects, err := s.api.getProjects(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	edu, err := s.api.getEducation(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	exp, err := s.api.getExperience(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	skills, err := s.api.getSkills(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	cv := &proto.CV{
		Bio:      bio,
		Courses:  edu,
		Jobs:     exp,
		Projects: projects,
		Skills:   skills,
	}
	res.Send(&proto.GetCVResponse{
		Cv: cv,
	})
	return nil
}

func (s *portfolioService) Contact(context context.Context, req *proto.ContactRequest) (*proto.ContactResponse, error) {
	f := req.GetForm()
	c, err := s.api.formRequest(f, true)
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, err.Error())
	}
	r := &proto.ContactResponse{
		FormAccepted: c,
	}
	return r, nil
}
