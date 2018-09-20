package portfolio

import (
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"

	"github.com/studentofjs/portfolio/server/proto"
)

// Service is the portfolio service struct containing the service methods
type Service struct{}

// NewService returns a pointer to the Service struct
func NewService() Service {
	return Service{}
}

func (s Service) GetCV(req *proto.GetCVRequest, res proto.PortfolioService_GetCVServer) error {

	b, err := getBio(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}
	bio := &proto.Bio{
		Title:       b.Title,
		Description: b.Description,
	}

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

	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	edu, err := getEducation(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
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
		return grpc.Errorf(codes.NotFound, err.Error())
	}

	var jobs *proto.Experience
	for _, job := range exp {
		newJob := &proto.Job{
			ID:          job.ID,
			Company:     job.Company,
			Description: job.Description,
			Dates:       job.Dates,
			JobTitle:    job.JobTitle,
			Location:    job.Location,
			LogoUrl:     job.LogoUrl,
		}
		jobs.Jobs = append(jobs.Jobs, newJob)
	}

	sk, err := getSkills(true)
	if err != nil {
		return grpc.Errorf(codes.NotFound, err.Error())
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
	cv := proto.CV{
		Bio:      bio,
		Courses:  courses,
		Jobs:     jobs,
		Projects: projects,
		Skills:   skills,
	}
	res.Send(&proto.GetCVResponse{
		Cv: &cv,
	})
	return nil
}
