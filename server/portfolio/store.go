package portfolio

import (
	"errors"
	"fmt"

	"github.com/asdine/storm"
)

type Bio struct {
	ID          int    `storm:"id,increment"`
	Description string `storm:"unique"`
	Title       string
}

type Course struct {
	ID          uint32 `storm:"id"`
	Institution string
	Description string
	Dates       string
	Name        string
}

type Job struct {
	ID          uint32 `storm:"id"`
	Company     string `storm:"index"`
	JobTitle    string
	Location    string
	Dates       string
	Description string
	LogoUrl     string
}

type Project struct {
	ID          uint32 `storm:"id"`
	Title       string `storm:"index"`
	Meta        string
	Description string
	Repo        string
}

type Skill struct {
	ID          uint32 `storm:"id"`
	Name        string `storm:"index"`
	Rating      uint32 `storm:"index"`
	Description string
}

func getDb(prod bool) string {
	var dbName = make(map[bool]string)
	dbName[true] = "my.db"
	dbName[false] = "test.db"
	return dbName[prod]
}

func addBio(bio *Bio, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&bio); err == storm.ErrAlreadyExists {
		return errors.New("bio already exists")
	}
	return nil
}

func addCourse(course *Course, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	if err := db.Save(&course); err == storm.ErrAlreadyExists {
		return errors.New("course already exists")
	}
	return nil
}

func addJob(job *Job, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	if err := db.Save(&job); err == storm.ErrAlreadyExists {
		return errors.New("job already exists")
	}
	return nil
}

func addProject(project Project, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&project); err == storm.ErrAlreadyExists {
		return errors.New("project already exists")
	}
	return nil
}

func addSkill(skill Skill, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&skill); err == storm.ErrAlreadyExists {
		return errors.New("skill already exists")
	}
	return nil
}

func deleteBio(id int, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	var bio Bio
	if err := db.One("ID", id, &bio); err != nil {
		return fmt.Errorf("bio not found: %v", err)
	}
	if err := db.DeleteStruct(&bio); err != nil {
		fmt.Errorf("failed to delete bio %v", err)
	}
	return nil
}

func deleteCourse(id uint32, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	var course Course
	if err := db.One("ID", id, &course); err != nil {
		return fmt.Errorf("failed to find course: %v", err)
	}
	if err := db.DeleteStruct(&course); err != nil {
		fmt.Errorf("failed to delete course %v", err)
	}

	return nil
}

func deleteJob(id uint32, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	var job Job
	if err := db.One("ID", id, &job); err != nil {
		return fmt.Errorf("failed to find job: %v", err)
	}
	if err := db.DeleteStruct(&job); err != nil {
		fmt.Errorf("failed to delete job %v", err)
	}
	return nil
}

func deleteProject(id uint32, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	var project Project
	if err := db.One("ID", id, &project); err != nil {
		return fmt.Errorf("failed to find project: %v", err)
	}
	if err := db.DeleteStruct(&project); err != nil {
		fmt.Errorf("failed to delete project %v", err)
	}
	return nil
}

func deleteSkill(id uint32, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	var skill Skill
	if err := db.One("ID", id, &skill); err != nil {
		return fmt.Errorf("failed to find skill: %v", err)
	}
	if err := db.DeleteStruct(&skill); err != nil {
		fmt.Errorf("failed to delete skill %v", err)
	}
	return nil
}

func getBio(prod bool) (*Bio, error) {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var bio []*Bio

	if err := db.All(&bio); err != nil {
		return bio[0], errors.New("bio not found")
	}
	return bio[0], nil
}

func getEducation(prod bool) ([]*Course, error) {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var courses []*Course

	if err := db.All(&courses); err != nil {
		return courses, errors.New("no course found")
	}

	return courses, nil
}

func getExperience(prod bool) ([]*Job, error) {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var jobs []*Job

	if err := db.All(&jobs); err != nil {
		return jobs, errors.New("no job found")
	}
	return jobs, nil
}

func getProjects(prod bool) ([]*Project, error) {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var projects []*Project
	if err := db.All(&projects); err != nil {
		return projects, errors.New("no project found")
	}
	return projects, nil
}

func getSkills(prod bool) ([]*Skill, error) {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var skills []*Skill
	if err := db.All(&skills); err != nil {
		return skills, errors.New("no skills found")
	}
	return skills, nil
}

func updateBio(bio *Bio, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Update(&bio); err != nil {
		switch err {
		case storm.ErrNotFound:
			return errors.New("bio not found")
		default:
			return errors.New("server error")
		}
	}
	return nil
}

func updateCourse(course *Course, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Update(&course); err != nil {
		switch err {
		case storm.ErrNotFound:
			return errors.New("course not found")
		default:
			return errors.New("server error")
		}
	}
	return nil
}

func updateJob(job *Job, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Update(&job); err != nil {
		switch err {
		case storm.ErrNotFound:
			return errors.New("job not found")
		default:
			return errors.New("server error")
		}
	}
	return nil
}

func updateProject(project *Project, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Update(&project); err != nil {
		switch err {
		case storm.ErrNotFound:
			return errors.New("project not found")
		default:
			return errors.New("server error")
		}
	}
	return nil
}

func updateSkill(skill *Skill, prod bool) error {
	db, err := storm.Open(getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Update(&skill); err != nil {
		switch err {
		case storm.ErrNotFound:
			return errors.New("skill not found")
		default:
			return errors.New("server error")
		}
	}
	return nil
}
