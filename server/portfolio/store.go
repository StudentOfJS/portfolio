package portfolio

import (
	"github.com/asdine/storm"
	"github.com/google/uuid"
	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

// API contains the methods for interacting with the database
type API struct{}

// NewPortfolioAPI returns the API
func NewPortfolioAPI() *API {
	return &API{}
}

func (*API) addBio(bio *proto.Bio) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	if err := db.Save(&bio); err == storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "bio already exists")
	}
	return nil
}

func (*API) addCourse(institution string, description string, dates string, name string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	id := uuid.New().ID()
	course := proto.Course{
		ID:          id,
		Institution: institution,
		Description: description,
		Dates:       dates,
		Name:        name,
	}
	if err := db.Save(&course); err == storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "course already exists")
	}
	return nil
}

func (*API) addJob(job *proto.Job) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	id := uuid.New().ID()
	job.ID = id
	if err := db.Save(&job); err == storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "job already exists")
	}
	return nil
}

func (*API) addProject(project *proto.Project) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	id := uuid.New().ID()
	project.ID = id
	if err := db.Save(&project); err == storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "project already exists")
	}
	return nil
}

func (*API) addSkill(institution string, description string, rating uint32, name string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	id := uuid.New().ID()
	skill := proto.Skill{
		ID:          id,
		Description: description,
		Rating:      rating,
		Name:        name,
	}
	if err := db.Save(&skill); err == storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "skill already exists")
	}
	return nil
}

func (*API) deleteBio(title string, description string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	bio := proto.Bio{
		Title:       title,
		Description: description,
	}
	if err := db.DeleteStruct(&bio); err != nil {
		return grpc.Errorf(codes.NotFound, "bio does not exist")
	}
	return nil
}

func (*API) deleteCourse(id uint32) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var course proto.Course

	if err := db.Find("ID", id, &course); err == storm.ErrNotFound {
		return grpc.Errorf(codes.NotFound, "course not found")
	}
	if err := db.DeleteStruct(&course); err != nil {
		return grpc.Errorf(codes.Internal, "course found, but can't delete")
	}

	return nil
}

func (*API) deleteJob(id uint32) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var job proto.Job
	if err := db.Find("ID", id, &job); err == storm.ErrNotFound {
		return grpc.Errorf(codes.NotFound, "job not found")
	}
	if err := db.DeleteStruct(&job); err != nil {
		return grpc.Errorf(codes.Internal, "job found, but can't delete")
	}
	return nil
}

func (*API) deleteProject(id uint32) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var project proto.Project
	if err := db.Find("ID", id, &project); err == storm.ErrNotFound {
		return grpc.Errorf(codes.NotFound, "project not found")
	}
	if err := db.DeleteStruct(&project); err != nil {
		return grpc.Errorf(codes.Internal, "project found, but can't delete")
	}
	return nil
}

func (*API) deleteSkill(id uint32) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()

	var skill proto.Skill
	if err := db.Find("ID", id, &skill); err == storm.ErrNotFound {
		return grpc.Errorf(codes.NotFound, "skill not found")
	}
	if err := db.DeleteStruct(&skill); err != nil {
		return grpc.Errorf(codes.Internal, "skill found, but can't delete")
	}
	return nil
}

func (*API) getBio() (*proto.Bio, error) {
	db, err := storm.Open("my.db")
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var bio []*proto.Bio

	if err := db.All(&bio); err != nil {
		return bio[0], grpc.Errorf(codes.NotFound, "bio not found")
	}
	return bio[0], nil
}

func (*API) getEducation() (*proto.Education, error) {
	db, err := storm.Open("my.db")
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var courses []*proto.Course
	var edu *proto.Education

	if err := db.All(&courses); err != nil {
		return edu, grpc.Errorf(codes.NotFound, "no course found")
	}
	edu.Courses = courses
	return edu, nil
}

func (*API) getExperience() (*proto.Experience, error) {
	db, err := storm.Open("my.db")
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var jobs []*proto.Job
	var experience *proto.Experience

	if err := db.All(&jobs); err != nil {
		return experience, grpc.Errorf(codes.NotFound, "no job found")
	}

	experience.Jobs = jobs
	return experience, nil
}

func (*API) getProjects() (*proto.Projects, error) {
	db, err := storm.Open("my.db")
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var p []*proto.Project
	var projects *proto.Projects
	if err := db.All(&p); err != nil {
		return projects, grpc.Errorf(codes.NotFound, "no project found")
	}

	projects.Projects = p
	return projects, nil
}

func (*API) getSkills() (*proto.Skills, error) {
	db, err := storm.Open("my.db")
	if err != nil {
		return nil, grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	var s []*proto.Skill
	var skills *proto.Skills
	if err := db.All(&s); err != nil {
		return skills, grpc.Errorf(codes.NotFound, "no skill found")
	}

	skills.Skills = s
	return skills, nil
}

func (*API) updateBio(title string, description string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	bio := proto.Bio{
		Title:       title,
		Description: description,
	}
	if err := db.Update(&bio); err != nil {
		switch err {
		case storm.ErrNotFound:
			return grpc.Errorf(codes.NotFound, "bio not found")
		default:
			return grpc.Errorf(codes.Internal, "server error")
		}
	}
	return nil
}

func (*API) updateCourse(id uint32, institution string, description string, dates string, name string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	course := proto.Course{
		ID:          id,
		Institution: institution,
		Description: description,
		Dates:       dates,
		Name:        name,
	}
	if err := db.Update(&course); err != nil {
		switch err {
		case storm.ErrNotFound:
			return grpc.Errorf(codes.NotFound, "course not found")
		default:
			return grpc.Errorf(codes.Internal, "server error")
		}
	}
	return nil
}

func (*API) updateJob(id uint32, company, dates, description, jobTitle, location, logoURL string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()
	job := proto.Job{
		ID:          id,
		Company:     company,
		Dates:       dates,
		Description: description,
		JobTitle:    jobTitle,
		Location:    location,
		LogoUrl:     logoURL,
	}
	if err := db.Update(&job); err != nil {
		switch err {
		case storm.ErrNotFound:
			return grpc.Errorf(codes.NotFound, "job not found")
		default:
			return grpc.Errorf(codes.Internal, "server error")
		}
	}
	return nil
}

func (*API) updateProject(id uint32, description, meta, title string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()

	project := proto.Project{
		ID:          id,
		Title:       title,
		Meta:        meta,
		Description: description,
	}
	if err := db.Update(&project); err != nil {
		switch err {
		case storm.ErrNotFound:
			return grpc.Errorf(codes.NotFound, "project not found")
		default:
			return grpc.Errorf(codes.Internal, "server error")
		}
	}
	return nil
}

func (*API) updateSkill(id uint32, institution string, description string, rating uint32, name string) error {
	db, err := storm.Open("my.db")
	if err != nil {
		return grpc.Errorf(codes.Internal, "server error")
	}
	defer db.Close()

	skill := proto.Skill{
		ID:          id,
		Description: description,
		Rating:      rating,
		Name:        name,
	}
	if err := db.Update(&skill); err != nil {
		switch err {
		case storm.ErrNotFound:
			return grpc.Errorf(codes.NotFound, "skill not found")
		default:
			return grpc.Errorf(codes.Internal, "server error")
		}
	}
	return nil
}
