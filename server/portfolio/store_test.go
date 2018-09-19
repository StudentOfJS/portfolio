package portfolio

import (
	"testing"

	"github.com/asdine/storm"
	"github.com/studentofjs/portfolio/server/proto"
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
		t.Errorf("adding bio failed: %v", err)
	}

	db, err := storm.Open("test.db")
	defer db.Close()
	if err != nil {
		t.Errorf("opening test db failed: %v", err)
	}

	var c proto.Course
	if err := db.One("ID", 1, &c); err != nil {
		t.Errorf("dropping Course bucket failed: %v", err)
	}
	t.Errorf("items: %s", c.Name)
	// if err := db.Init(&proto.Course{}); err != nil {
	// 	t.Errorf("initializing bucket failed: %v", err)
	// }
}
