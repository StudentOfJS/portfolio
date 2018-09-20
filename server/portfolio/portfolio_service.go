package portfolio

import (
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
