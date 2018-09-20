package portfolio

import (
	"context"

	"github.com/google/uuid"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"

	"github.com/studentofjs/portfolio/server/proto"
)

// Service is the portfolio service struct containing the service methods
type Service struct{}

// NewService returns a pointer to the Service struct
func NewService() *Service {
	return &Service{}
}

func (s *Service) AddBio(ctx context.Context, req *proto.AddBioRequest) (*proto.AddBioResponse, error) {
	err := addBio(Bio{
		Description: req.Bio.GetDescription(),
		Title:       req.Bio.GetTitle(),
	}, true)
	var res *proto.AddBioResponse
	if err != nil {
		ctx.Err()
		return res, err
	}
	ctx.Done()
	return res, nil
}

func (s *Service) AddCourse(ctx context.Context, req *proto.AddCourseRequest) (*proto.AddCourseResponse, error) {
	newCourse := req.GetCourse()
	course := Course{
		ID:          uuid.New().ID(),
		Institution: newCourse.GetInstitution(),
		Description: newCourse.GetDescription(),
		Dates:       newCourse.GetDates(),
		Name:        newCourse.GetName(),
	}
	err := addCourse(course, true)
	var res *proto.AddCourseResponse
	if err != nil {
		ctx.Err()
		return res, err
	}
	ctx.Done()
	return res, nil
}

func (s *Service) AddJob(ctx context.Context, req *proto.AddJobRequest) (*proto.AddJobResponse, error) {
	newJob := req.GetJob()
	job := Job{
		ID:          uuid.New().ID(),
		Company:     newJob.GetCompany(),
		JobTitle:    newJob.GetJobTitle(),
		Location:    newJob.GetLocation(),
		Dates:       newJob.GetDates(),
		Description: newJob.GetDescription(),
		LogoUrl:     newJob.GetLogoUrl(),
	}
	err := addJob(job, true)
	var res *proto.AddJobResponse
	if err != nil {
		ctx.Err()
		return res, err
	}
	ctx.Done()
	return res, nil
}

func (s *Service) AddProject(ctx context.Context, req *proto.AddProjectRequest) (*proto.AddProjectResponse, error) {
	newProject := req.GetProject()
	project := Project{
		ID:          uuid.New().ID(),
		Title:       newProject.GetTitle(),
		Meta:        newProject.GetMeta(),
		Repo:        newProject.GetRepo(),
		Description: newProject.GetDescription(),
	}
	err := addProject(project, true)
	var res *proto.AddProjectResponse
	if err != nil {
		ctx.Err()
		return res, err
	}
	ctx.Done()
	return res, nil
}

func (s *Service) AddSkill(ctx context.Context, req *proto.AddSkillRequest) (*proto.AddSkillResponse, error) {
	newSkill := req.GetSkill()
	skill := Skill{
		ID:          uuid.New().ID(),
		Name:        newSkill.GetName(),
		Description: newSkill.GetDescription(),
		Rating:      newSkill.GetRating(),
	}
	err := addSkill(skill, true)
	var res *proto.AddSkillResponse
	if err != nil {
		ctx.Err()
		return res, err
	}
	ctx.Done()
	return res, nil
}

func (s Service) GetBio(ctx context.Context, req *proto.GetBioRequest) (*proto.GetBioResponse, error) {
	b, err := getBio(true)
	var bio *proto.Bio
	bio.Title = b.Title
	bio.Description = b.Description

	var res *proto.GetBioResponse
	if err != nil {
		ctx.Err()
		return res, grpc.Errorf(codes.NotFound, err.Error())
	}
	res.Bio = bio
	ctx.Value(res)
	ctx.Done()
	return res, nil
}

func (s Service) ListProjects(ctx context.Context, req *proto.ListProjectsRequest) (*proto.ListProjectsResponse, error) {
	p, err := getProjects(true)
	var projects *proto.Projects
	for _, project := range p {
		newProject := proto.Project{
			ID:          project.ID,
			Title:       project.Title,
			Meta:        project.Meta,
			Repo:        project.Repo,
			Description: project.Description,
		}
		projects.Projects = append(projects.Projects, &newProject)
	}
	var res *proto.ListProjectsResponse
	if err != nil {
		ctx.Err()
		return res, grpc.Errorf(codes.NotFound, err.Error())
	}
	res.Projects = projects
	ctx.Value(res)
	ctx.Done()
	return res, nil
}

func (s Service) GetCV(ctx context.Context, req *proto.GetCVRequest) (*proto.GetCVResponse, error) {
	var res *proto.GetCVResponse
	edu, err := getEducation(true)
	if err != nil {
		ctx.Err()
		return res, grpc.Errorf(codes.NotFound, err.Error())
	}
	var courses *proto.Education
	for _, course := range edu {
		newCourse := proto.Course{
			ID:          course.ID,
			Institution: course.Institution,
			Description: course.Description,
			Dates:       course.Dates,
			Name:        course.Name,
		}
		courses.Courses = append(courses.Courses, &newCourse)
	}
	exp, err := getExperience(true)
	if err != nil {
		ctx.Err()
		return res, grpc.Errorf(codes.NotFound, err.Error())
	}
	var jobs *proto.Experience
	for _, job := range exp {
		newJob := proto.Job{
			ID:          job.ID,
			Company:     job.Company,
			Description: job.Description,
			Dates:       job.Dates,
			JobTitle:    job.JobTitle,
			Location:    job.Location,
			LogoUrl:     job.LogoUrl,
		}
		jobs.Jobs = append(jobs.Jobs, &newJob)
	}

	sk, err := getSkills(true)
	if err != nil {
		ctx.Err()
		return res, grpc.Errorf(codes.NotFound, err.Error())
	}
	var skills *proto.Skills
	for _, skill := range sk {
		newSkill := proto.Skill{
			ID:          skill.ID,
			Rating:      skill.Rating,
			Description: skill.Description,
			Name:        skill.Name,
		}
		skills.Skills = append(skills.Skills, &newSkill)
	}
	res.Courses = courses
	res.Jobs = jobs
	res.Skills = skills

	ctx.Value(res)
	ctx.Done()

	return res, nil
}
