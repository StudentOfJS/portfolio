package portfolio

import (
	"github.com/studentofjs/portfolio/server/proto"
)

// Service is the portfolio service struct containing the service methods
type Service struct {
	api *API
}

// NewPortfolioService returns the api
func NewPortfolioService(api *API) *Service {
	if api == nil {
		api = NewPortfolioAPI()
	}
	return &Service{api}
}

func (s *Service) AddBio(req *proto.AddBioRequest, res proto.PortfolioService_AddBioServer) error {
	err := s.api.addBio(req.Bio)
	if err != nil {
		return err
	}
	res.Send(nil)
	return nil
}

func (s *Service) AddCourse(req *proto.AddCourseRequest, res proto.PortfolioService_AddCourseServer) error {
	err := s.api.addCourse(req.Course)
	if err != nil {
		return err
	}
	res.Send(nil)
	return nil
}

func (s *Service) AddJob(req *proto.AddJobRequest, res proto.PortfolioService_AddJobServer) error {
	err := s.api.addJob(req.Job)
	if err != nil {
		return err
	}
	res.Send(nil)
	return nil
}

func (s *Service) AddProject(req *proto.AddProjectRequest, res proto.PortfolioService_AddProjectServer) error {
	err := s.api.addProject(req.Project)
	if err != nil {
		return nil
	}
	res.Send(nil)
	return nil
}

func (s *Service) AddSkill(req *proto.AddSkillRequest, res proto.PortfolioService_AddSkillServer) error {
	err := s.api.addSkill(req.Skill)
	if err != nil {
		return nil
	}
	res.Send(nil)
	return nil
}

func (s *Service) GetBio(req *proto.GetBioRequest, res proto.PortfolioService_GetBioServer) error {
	b, err := s.api.getBio()
	if err != nil {
		return err
	}
	var bio *proto.GetBioResponse
	bio.Bio = b
	res.Send(bio)
	return nil
}

func (s *Service) ListProjects(req *proto.ListProjectsRequest, res proto.PortfolioService_ListProjectsServer) error {
	p, err := s.api.getProjects()
	if err != nil {
		return nil
	}
	var projects *proto.ListProjectsResponse
	projects.Projects = p
	res.Send(projects)
	return nil
}

func (s *Service) GetCV(req *proto.GetCVRequest, res proto.PortfolioService_GetCVServer) error {
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
