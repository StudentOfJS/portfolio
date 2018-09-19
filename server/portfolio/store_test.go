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
