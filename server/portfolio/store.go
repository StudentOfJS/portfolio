package portfolio

import (
	"log"

	"github.com/google/uuid"
	"github.com/asdine/storm"
	"github.com/studentofjs/portfolio/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"
)

func addBio(title string, description string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	bio := proto.Bio{
		Title:       title,
		Description: description,
	}
	if err := db.Save(&bio); err != storm.ErrAlreadyExists {
		return grpc.Errorf("bio already exists: %v", err)
	}
	return nil
}

func addCourse(institution string, description string, dates string, name string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	const id = uuid.New()
	course := proto.Course{
		ID: id,
		Institution: institution,
		Description: description,
		Dates: dates,
		Name: name
	}
	if err := db.Save(&course); err != storm.ErrAlreadyExists {
		return grpc.Errorf("course already exists: %v", err)
	}
	return nil
}


func addJob(company, dates, description, jobTitle, location, logoUrl string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	const id = uuid.New()
	job := proto.Job{
		ID: id,
		Company: company,
		Dates: dates,
		Description: description,
		JobTitle: jobTitle,
		Location: location,
		LogoUrl: logoUrl,
		Rating: rating,
	}
	if err := db.Save(&job); err != storm.ErrAlreadyExists {
		return grpc.Errorf("job already exists: %v", err)
	}
	return nil
}


func addProject(description string, meta int32, title string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	const id = uuid.New()
	project := proto.Project{
		ID: id,
		Title: title,
		Meta: meta
		Description: description,
	}
	if err := db.Save(&project); err != storm.ErrAlreadyExists {
		return grpc.Errorf("project already exists: %v", err)
	}
	return nil
}


func addSkill(institution string, description string, rating int32, name string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	const id = uuid.New()
	skill := proto.Skill{
		ID: id,
		Institution: institution,
		Description: description,
		Rating: rating,
		Name: name,
	}
	if err := db.Save(&skill); err != storm.ErrAlreadyExists {
		return grpc.Errorf("skill already exists: %v", err)
	}
	return nil
}


func getBio(title string) (proto.Bio, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var bio proto.Bio
	
	if err := db.One("Title", title, &bio); err != nil {
		return nil, grpc.Errorf("bio not found: %v", err)
	}
	return bio, nil
}


func getEducation() (proto.Education, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var courses []proto.Course
	
	if err := db.All(&courses); err != nil {
		return nil, grpc.Errorf("no course found: %v", err)
	}
	var edu proto.Education
	edu.Courses = courses
	return edu, nil
}


func getExperience() (proto.Experience, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var jobs []proto.Job
	
	if err := db.All(&jobs); err != nil {
		return nil, grpc.Errorf("no job found: %v", err)
	}
	var experience proto.Experience
	experience.Jobs = jobs
	return experience, nil
}


func getProjects() (proto.Projects, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var p []proto.Project
	
	if err := db.All(&p); err != nil {
		return nil, grpc.Errorf("no project found: %v", err)
	}
	var projects proto.Projects
	projects.Projects = p
	return projects, nil
}


func getSkills() (proto.Skills, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var s []proto.Skill
	
	if err := db.All(&s); err != nil {
		return nil, grpc.Errorf("no skill found: %v", err)
	}
	var skills proto.Skills
	skills.Skills = s
	return skills, nil
}
