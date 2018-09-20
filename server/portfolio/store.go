package portfolio

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/asdine/storm"
	"github.com/studentofjs/portfolio/server/proto"
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

type portfolioAPI struct{}

func NewPortfolioAPI(client *http.Client) *portfolioAPI {
	return &portfolioAPI{}
}

func (api *portfolioAPI) getDb(prod bool) string {
	var dbName = make(map[bool]string)
	dbName[true] = "my.db"
	dbName[false] = "test.db"
	return dbName[prod]
}

func (api *portfolioAPI) addBio(bio Bio, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&bio); err != nil {
		return err
	}
	return nil
}

func (api *portfolioAPI) addCourse(course Course, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	if err := db.Save(&course); err == storm.ErrAlreadyExists {
		return errors.New("course already exists")
	}
	return nil
}

func (api *portfolioAPI) addJob(job Job, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()
	if err := db.Save(&job); err == storm.ErrAlreadyExists {
		return errors.New("job already exists")
	}
	return nil
}

func (api *portfolioAPI) addProject(project Project, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&project); err == storm.ErrAlreadyExists {
		return errors.New("project already exists")
	}
	return nil
}

func (api *portfolioAPI) addSkill(skill Skill, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return errors.New("server error")
	}
	defer db.Close()

	if err := db.Save(&skill); err == storm.ErrAlreadyExists {
		return errors.New("skill already exists")
	}
	return nil
}

func (api *portfolioAPI) deleteBio(id int, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) deleteCourse(id uint32, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) deleteJob(id uint32, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) deleteProject(id uint32, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) deleteSkill(id uint32, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) getBio(prod bool) (*proto.Bio, error) {
	var bio []Bio
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()

	if err := db.All(&bio); err != nil {
		return nil, errors.New("bio not found")
	}
	if len(bio) > 0 {
		return &proto.Bio{
			Description: bio[0].Description,
			Title:       bio[0].Title,
		}, nil
	}
	return nil, errors.New("bio not found")
}

func (api *portfolioAPI) getEducation(prod bool) (*proto.Education, error) {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var courses []Course

	if err := db.All(&courses); err != nil {
		return nil, errors.New("no course found")
	}
	var newCourses []*proto.Course
	for _, c := range courses {
		course := &proto.Course{
			ID:          c.ID,
			Institution: c.Institution,
			Description: c.Description,
			Dates:       c.Dates,
			Name:        c.Name,
		}
		newCourses = append(newCourses, course)
	}
	return &proto.Education{
		Courses: newCourses,
	}, nil
}

func (api *portfolioAPI) getExperience(prod bool) (*proto.Experience, error) {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var jobs []Job

	if err := db.All(&jobs); err != nil {
		return nil, errors.New("no job found")
	}
	var newJobs []*proto.Job
	for _, j := range jobs {
		job := &proto.Job{
			ID:          j.ID,
			Company:     j.Company,
			JobTitle:    j.JobTitle,
			Location:    j.Location,
			Dates:       j.Dates,
			Description: j.Description,
			LogoUrl:     j.LogoUrl,
		}
		newJobs = append(newJobs, job)
	}
	return &proto.Experience{
		Jobs: newJobs,
	}, nil
}

func (api *portfolioAPI) getProjects(prod bool) (*proto.Projects, error) {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var projects []Project
	if err := db.All(&projects); err != nil {
		return nil, errors.New("no project found")
	}
	var newProjects []*proto.Project
	for _, p := range projects {
		project := &proto.Project{
			ID:          p.ID,
			Title:       p.Title,
			Meta:        p.Meta,
			Description: p.Description,
			Repo:        p.Repo,
		}
		newProjects = append(newProjects, project)
	}
	return &proto.Projects{
		Projects: newProjects,
	}, nil
}

func (api *portfolioAPI) getSkills(prod bool) (*proto.Skills, error) {
	db, err := storm.Open(api.getDb(prod))
	if err != nil {
		return nil, errors.New("server error")
	}
	defer db.Close()
	var skills []Skill
	if err := db.All(&skills); err != nil {
		return nil, errors.New("no skills found")
	}
	var newSkills []*proto.Skill
	for _, s := range skills {
		skill := &proto.Skill{
			ID:          s.ID,
			Name:        s.Name,
			Description: s.Description,
			Rating:      s.Rating,
		}
		newSkills = append(newSkills, skill)
	}
	return &proto.Skills{
		Skills: newSkills,
	}, nil
}

func (api *portfolioAPI) updateBio(bio Bio, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) updateCourse(course Course, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) updateJob(job Job, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) updateProject(project Project, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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

func (api *portfolioAPI) updateSkill(skill Skill, prod bool) error {
	db, err := storm.Open(api.getDb(prod))
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
