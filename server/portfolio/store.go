package portfolio

import (
	"log"

	"github.com/dgraph-io/badger"
)

func BadgerDB() {
	opts := badger.DefaultOptions
	opts.Dir = "/tmp/badger"
	opts.ValueDir = "/tmp/badger"
	db, err := badger.Open(opts)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	// Your code here…

}
