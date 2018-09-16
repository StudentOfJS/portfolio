package portfolio

import (
	"log"

	"github.com/google/uuid"
	"github.com/asdine/storm"
	"github.com/studentofjs/portfolio/server/proto"
)
// AddBio adds the bio to the database
func AddBio(title string, description string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	bio := proto.Bio{
		Title:       title,
		Description: description,
	}
	if err := db.Save(&bio); err != storm.ErrAlreadyExists {
		return log.Errorf("bio already exists: %v", err)
	}
	return nil
}
// AddCourse adds a new course to the database
func AddCourse(institution string, description string, dates string, name string) error {
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
		return log.Errorf("course already exists: %v", err)
	}
	return nil
}

// AddJob adds a new skill to the database
func AddJob(company, dates, description, jobTitle, location, logoUrl string) error {
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
		return log.Errorf("job already exists: %v", err)
	}
	return nil
}

// AddProject adds a new skill to the database
func AddProject(description string, meta int32, title string) error {
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
		return log.Errorf("project already exists: %v", err)
	}
	return nil
}

// AddSkill adds a new skill to the database
func AddSkill(institution string, description string, rating int32, name string) error {
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
		return log.Errorf("skill already exists: %v", err)
	}
	return nil
}

// GetBio gets the bio from the database
func GetBio(title string) (proto.Bio, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var bio proto.Bio
	
	if err := db.One("Title", title, &bio); err != nil {
		return nil, log.Errorf("bio not found: %v", err)
	}
	return bio, nil
}

// GetEducation gets the courses from the database
func GetEducation() (proto.Education, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var courses []proto.Course
	
	if err := db.All(&courses); err != nil {
		return nil, log.Errorf("no course found: %v", err)
	}
	var edu proto.Education
	edu.Courses = courses
	return edu, nil
}

// GetExperience gets the courses from the database
func GetExperience() (proto.Experience, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var jobs []proto.Job
	
	if err := db.All(&jobs); err != nil {
		return nil, log.Errorf("no job found: %v", err)
	}
	var experience proto.Experience
	experience.Jobs = jobs
	return experience, nil
}

// GetProjects gets the courses from the database
func GetProjects() (proto.Projects, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var p []proto.Project
	
	if err := db.All(&p); err != nil {
		return nil, log.Errorf("no project found: %v", err)
	}
	var projects proto.Projects
	projects.Projects = p
	return projects, nil
}

// GetSkills gets the courses from the database
func GetSkills() (proto.Skills, error) {
	db, err := storm.Open("my.db")
	defer db.Close()
	var s []proto.Skill
	
	if err := db.All(&s); err != nil {
		return nil, log.Errorf("no skill found: %v", err)
	}
	var skills proto.Skills
	skills.Skills = s
	return skills, nil
}