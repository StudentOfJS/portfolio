package portfolio

import (
	"github.com/studentofjs/portfolio/server/proto"
)

type service struct {
	api *API
}

// NewPortfolioService returns the api
func NewPortfolioService(api *API) *service {
	if api == nil {
		api = NewPortfolioAPI()
	}
	return &service{api}
}

func (s *service) GetBio(req *proto.GetBioRequest, resp proto.PortfolioService_GetBioServer) error {
	b, err := s.api.getBio()
	if err != nil {
		return err
	}
	var bio *proto.GetBioResponse
	bio.Bio = b
	resp.Send(bio)
	return nil
}

func (s *service) ListProjects(req *proto.ListProjectsRequest, resp proto.PortfolioService_ListProjectsServer) error {
	p, err := s.api.getProjects()
	if err != nil {
		return nil
	}
	var projects *proto.ListProjectsResponse
	projects.Projects = p
	resp.Send(projects)
	return nil
}

func (s *service) GetCV(req *proto.GetCVRequest, res proto.PortfolioService_GetCVServer) error {
	edu, err := s.api.getEducation()
	if err != nil {
		return nil
	}
	exp, err := s.api.getExperience()
	if err != nil {
		return nil
	}
	skills, err := s.api.getSkills()
	if err != nil {
		return nil
	}
	var cv *proto.GetCVResponse
	cv.Courses = edu
	cv.Jobs = exp
	cv.Skills = skills

	res.Send(cv)

	return nil
}
