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
