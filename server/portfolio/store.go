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
