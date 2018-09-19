package portfolio

import (
	"testing"

	"github.com/asdine/storm"
	"github.com/asdine/storm/codec/protobuf"
	"github.com/studentofjs/portfolio/server/proto"
)

func TestAddBio(t *testing.T) {
	err := addBio("test", "test", false)
	if err != nil {
		t.Errorf("adding bio failed: %v", err)
	}

	db, err := storm.Open("test.db")
	defer db.Close()
	if err != nil {
		t.Errorf("opening test db failed: %v", err)
	}
	var bio Bio
	if err := db.One("ID", 1, &bio); err != nil {
		t.Errorf("dropping Bio bucket failed: %v", err)
	}
	if err := db.DeleteStruct(&bio); err != nil {
		t.Errorf("failed to delete test %v", err)
	}
}

func TestAddCourse(t *testing.T) {
	course := proto.Course{
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

	db, err := storm.Open("test.db", storm.Codec(protobuf.Codec))
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
