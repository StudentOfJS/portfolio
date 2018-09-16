package portfolio

import (
	"log"

	"github.com/asdine/storm"
	"github.com/studentofjs/portfolio/server/proto"
)

// AddBio
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

func AddCourse(title string, description string) error {
	db, err := storm.Open("my.db")
	defer db.Close()
	bio := proto.Course{
		Title:       title,
		Description: description,
	}
	if err := db.Save(&bio); err != storm.ErrAlreadyExists {
		return log.Errorf("bio already exists: %v", err)
	}
	return nil
}
