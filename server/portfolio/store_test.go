package portfolio

import (
	"testing"
)

func TestAddBio(t *testing.T) {
	bio := Bio{
		ID:          1,
		Description: "test",
		Title:       "test",
	}

	if err := addBio(bio, false); err != nil {
		t.Errorf("adding bio failed: %v", err)
	}

}

func TestUpdateBio(t *testing.T) {
	bio := Bio{
		ID:          1,
		Description: "test",
		Title:       "test 2",
	}
	if err := updateBio(bio, false); err != nil {
		t.Errorf("updating bio failed with error: %v", err)
	}
}

func TestGetBio(t *testing.T) {
	b, err := getBio(false)
	if err != nil {
		t.Errorf("failed to fetch bio: %v", err)
	}
	if b.Description != "test" {
		t.Errorf("fetched wrong bio: %v", err)
	}
}

func TestDeleteBio(t *testing.T) {
	if err := deleteBio(1, false); err != nil {
		t.Errorf("failed to delete bio: %v", err)
	}
}

func TestAddCourse(t *testing.T) {
	course := Course{
		ID:          1,
		Institution: "PluralSight, Udemy, CodeSchool",
		Description: "40+ courses, 1000+hrs ",
		Dates:       "February 2017 - June 2018",
		Name:        "Go, Solidity, Haskell, Elm, JS, ES6-ES7, MongoDB, SQL, PostgreSQL, React",
	}
	err := addCourse(course, false)
	if err != nil {
		t.Errorf("adding course failed: %v", err)
	}
}

func TestUpdateCourse(t *testing.T) {
	course := Course{
		ID:          1,
		Institution: "test",
		Description: "test",
		Dates:       "February 2017 - June 2018",
		Name:        "test",
	}
	if err := updateCourse(course, false); err != nil {
		t.Errorf("updating course failed with error: %v", err)
	}
}

func TestGetCourses(t *testing.T) {
	b, err := getEducation(false)
	if err != nil {
		t.Errorf("failed to fetch courses: %v", err)
	}
	if len(b) != 1 {
		t.Errorf("expected 1 course to be returned, got %d", len(b))
	}
}

func TestDeleteCourse(t *testing.T) {
	if err := deleteCourse(1, false); err != nil {
		t.Errorf("failed to delete course: %v", err)
	}
}

func TestAddJob(t *testing.T) {
	job := Job{
		ID:          4,
		Company:     "BlueBox",
		JobTitle:    "Technical Analyst​",
		Location:    "Perth, Australia",
		Dates:       "10/2012 to 05/2013",
		Description: "AWS Sharepoint farm installs.",
		LogoUrl:     "https://media.licdn.com/dms/image/C560BAQHm3FChBd3YoA/company-logo_200_200/0?e=1545264000&v=beta&t=fnucaxUy24KjL69AuYXHclAEX7odNVovkpAGs7ZwK_c",
	}
	err := addJob(job, false)
	if err != nil {
		t.Errorf("adding job failed: %v", err)
	}
}

func TestUpdateJob(t *testing.T) {
	job := Job{
		ID:          4,
		Company:     "ByteCloud",
		JobTitle:    "SEO consultant /web developer",
		Location:    "Perth, WA",
		Dates:       "​05/2013 to 02/2015",
		Description: "Provided website performance upgrades, SEO advice, hosting setup and backup service setup",
		LogoUrl:     "https://media.licdn.com/dms/image/C4E0BAQEfpJxTAStdZw/company-logo_200_200/0?e=1545264000&v=beta&t=F4oZkwk5x4e-_5Cwn6MTO3rrMELOOPMm_lcjESkjCmc",
	}
	if err := updateJob(job, false); err != nil {
		t.Errorf("updating job failed with error: %v", err)
	}
}

func TestGetJobs(t *testing.T) {
	b, err := getExperience(false)
	if err != nil {
		t.Errorf("failed to fetch jobs: %v", err)
	}
	if len(b) != 1 {
		t.Errorf("expected 1 job to be returned, got %d", len(b))
	}
}

func TestDeleteJob(t *testing.T) {
	if err := deleteJob(4, false); err != nil {
		t.Errorf("failed to delete job: %v", err)
	}
}

func TestAddSkill(t *testing.T) {
	skill := Skill{
		ID:          1,
		Description: "JS",
		Name:        "React",
		Rating:      9,
	}
	err := addSkill(skill, false)
	if err != nil {
		t.Errorf("adding skill failed: %v", err)
	}
}

func TestUpdateSkill(t *testing.T) {
	skill := Skill{
		ID:          1,
		Description: "html/JSON, GraphQL, gRPC",
		Name:        "API integration",
		Rating:      9,
	}
	if err := updateSkill(skill, false); err != nil {
		t.Errorf("updating skill failed with error: %v", err)
	}
}

func TestGetSkills(t *testing.T) {
	b, err := getSkills(false)
	if err != nil {
		t.Errorf("failed to fetch skills: %v", err)
	}
	if len(b) != 1 {
		t.Errorf("expected 1 skill to be returned, got %d", len(b))
	}
}

func TestDeleteSkill(t *testing.T) {
	if err := deleteSkill(1, false); err != nil {
		t.Errorf("failed to delete skill: %v", err)
	}
}

func TestAddProject(t *testing.T) {
	project := Project{
		ID:          1,
		Description: "This site! I decided to make the most complicated portfolio site I could imagine at the time. I had just finished a short tutorial on protocol buffers and wanting to learn more. Obviously, the best plan of action would be to reverse engineer an example. In order to be able to have a reasonable visual represention of my work, a frontend was required. The only gRPC web client in production at time of writting is improbable's. This limited my options to their hackernews app, for which I'm very grateful",
		Meta:        "TypeScript, Go, gRPC, protocol buffers",
		Title:       "portfolio",
		Repo:        "https://github.com/StudentOfJS/portfolio",
	}
	err := addProject(project, false)
	if err != nil {
		t.Errorf("adding project failed: %v", err)
	}
}

func TestUpdateProject(t *testing.T) {
	project := Project{
		ID:          1,
		Description: "Moonrock TGE site is an ERC20 ICO site and contract. The ERC20 contract is written in Solidity and testing is achieved using the truffle framework, web3 and Jest. The website is written in TypeScript and uses React",
		Meta:        "Ethereum, Solidity, TypeScript, React",
		Title:       "Moonrock",
		Repo:        "https://github.com/StudentOfJS/Moonrocks",
	}
	if err := updateProject(project, false); err != nil {
		t.Errorf("updating project failed with error: %v", err)
	}
}

func TestGetProjects(t *testing.T) {
	b, err := getProjects(false)
	if err != nil {
		t.Errorf("failed to fetch projects: %v", err)
	}
	if len(b) != 1 {
		t.Errorf("expected 1 project to be returned, got %d", len(b))
	}
}

func TestDeleteProject(t *testing.T) {
	if err := deleteProject(1, false); err != nil {
		t.Errorf("failed to delete project: %v", err)
	}
}
