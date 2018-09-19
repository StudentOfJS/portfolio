package portfolio

import (
	"context"

	"github.com/studentofjs/portfolio/server/proto"
)

// Service is the portfolio service struct containing the service methods
type Service struct{}

// NewService returns a pointer to the Service struct
func NewService() *Service {
	return &Service{}
}

func (s *Service) AddBio(ctx context.Context, req *proto.AddBioRequest) (*proto.AddBioResponse, error) {
	err := addBio(req.Bio.GetDescription(), req.Bio.GetTitle(), true)
	var bio *proto.AddBioResponse
	if err != nil {
		ctx.Err()
		return bio, err
	}
	ctx.Done()
	return bio, nil
}

func (s *Service) AddCourse(ctx context.Context, req *proto.AddCourseRequest) (*proto.AddCourseResponse, error) {
	err := addCourse(*req.Course, true)
	var course *proto.AddCourseResponse
	if err != nil {
		ctx.Err()
		return course, err
	}
	ctx.Done()
	return course, nil
}

func (s *Service) AddJob(ctx context.Context, req *proto.AddJobRequest) (*proto.AddJobResponse, error) {
	err := addJob(*req.Job, true)
	var job *proto.AddJobResponse
	if err != nil {
		ctx.Err()
		return job, err
	}
	ctx.Done()
	return job, nil
}

func (s *Service) AddProject(ctx context.Context, req *proto.AddProjectRequest) (*proto.AddProjectResponse, error) {
	err := addProject(*req.Project, true)
	var project *proto.AddProjectResponse
	if err != nil {
		ctx.Err()
		return project, err
	}
	ctx.Done()
	return project, nil
}

func (s *Service) AddSkill(ctx context.Context, req *proto.AddSkillRequest) (*proto.AddSkillResponse, error) {
	err := addSkill(*req.Skill, true)
	var skill *proto.AddSkillResponse
	if err != nil {
		ctx.Err()
		return skill, err
	}
	ctx.Done()
	return skill, nil
}

func (s *Service) GetBio(ctx context.Context, req *proto.GetBioRequest) (*proto.GetBioResponse, error) {
	b, err := getBio(true)
	var bio *proto.GetBioResponse
	if err != nil {
		ctx.Err()
		return bio, err
	}
	bio.Bio = b
	ctx.Value(bio)
	ctx.Done()
	return bio, nil
}

func (s *Service) ListProjects(ctx context.Context, req *proto.ListProjectsRequest) (*proto.ListProjectsResponse, error) {
	p, err := getProjects(true)
	var projects *proto.ListProjectsResponse
	if err != nil {
		ctx.Err()
		return projects, err
	}
	projects.Projects = p
	ctx.Value(projects)
	ctx.Done()
	return projects, nil
}

func (s *Service) GetCV(ctx context.Context, req *proto.GetCVRequest) (*proto.GetCVResponse, error) {
	var cv *proto.GetCVResponse
	edu, err := getEducation(true)
	if err != nil {
		ctx.Err()
		return cv, nil
	}
	exp, err := getExperience(true)
	if err != nil {
		ctx.Err()
		return cv, nil
	}
	skills, err := getSkills(true)
	if err != nil {
		ctx.Err()
		return cv, nil
	}
	cv.Courses = edu
	cv.Jobs = exp
	cv.Skills = skills

	ctx.Value(cv)
	ctx.Done()

	return cv, nil
}
