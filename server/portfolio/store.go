package portfolio

import (
	"github.com/asdine/storm"
	"github.com/google/uuid"
	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
)

func addBio(title string, description string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	bio := proto.Bio{
		Title:       title,
		Description: description,
	}
	if err := db.Save(&bio); err != storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "bio already exists")
	}
	return nil
}

func addCourse(institution string, description string, dates string, name string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	id := uuid.New().ID()
	course := proto.Course{
		ID:          id,
		Institution: institution,
		Description: description,
		Dates:       dates,
		Name:        name,
	}
	if err := db.Save(&course); err != storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "course already exists")
	}
	return nil
}

func addJob(company, dates, description, jobTitle, location, logoUrl string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	id := uuid.New().ID()
	job := proto.Job{
		ID:          id,
		Company:     company,
		Dates:       dates,
		Description: description,
		JobTitle:    jobTitle,
		Location:    location,
		LogoUrl:     logoUrl,
	}
	if err := db.Save(&job); err != storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "job already exists")
	}
	return nil
}

func addProject(description, meta, title string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	id := uuid.New().ID()
	project := proto.Project{
		ID:          id,
		Title:       title,
		Meta:        meta,
		Description: description,
	}
	if err := db.Save(&project); err != storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "project already exists")
	}
	return nil
}

func addSkill(institution string, description string, rating uint32, name string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	id := uuid.New().ID()
	skill := proto.Skill{
		ID:          id,
		Description: description,
		Rating:      rating,
		Name:        name,
	}
	if err := db.Save(&skill); err != storm.ErrAlreadyExists {
		return grpc.Errorf(codes.AlreadyExists, "skill already exists")
	}
	return nil
}

func getBio(title string) (*proto.Bio, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var bio *proto.Bio

	if err := db.One("Title", title, &bio); err != nil {
		return bio, grpc.Errorf(codes.NotFound, "bio not found")
	}
	return bio, nil
}

func getEducation() (*proto.Education, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var courses []*proto.Course
	var edu *proto.Education

	if err := db.All(&courses); err != nil {
		return edu, grpc.Errorf(codes.NotFound, "no course found")
	}
	edu.Courses = courses
	return edu, nil
}

func getExperience() (*proto.Experience, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var jobs []*proto.Job
	var experience *proto.Experience

	if err := db.All(&jobs); err != nil {
		return experience, grpc.Errorf(codes.NotFound, "no job found")
	}

	experience.Jobs = jobs
	return experience, nil
}

func getProjects() (*proto.Projects, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var p []*proto.Project
	var projects *proto.Projects
	if err := db.All(&p); err != nil {
		return projects, grpc.Errorf(codes.NotFound, "no project found")
	}

	projects.Projects = p
	return projects, nil
}

func getSkills() (*proto.Skills, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var s []*proto.Skill
	var skills *proto.Skills
	if err := db.All(&s); err != nil {
		return skills, grpc.Errorf(codes.NotFound, "no skill found")
	}

	skills.Skills = s
	return skills, nil
}
