package portfolio

import (
	"github.com/google/uuid"
	"github.com/studentofjs/portfolio/server/proto"
)

func InitCV() {
	var a *API
	var Bio *proto.Bio
	Bio.Description = "Rod's BIO description"
	Bio.Title = "Rod's BIO"
	a.addBio(Bio)

	Courses := []*proto.Course{
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "",
			Description: "",
			Dates:       "",
			Name:        "",
		},
	}
	for _, course := range Courses {
		a.addCourse(course)
	}

	Jobs := []*proto.Job{
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
		{
			ID:          uuid.New().ID(),
			Company:     "",
			JobTitle:    "",
			Location:    "",
			Dates:       "",
			Description: "",
			LogoUrl:     "",
		},
	}
	for _, job := range Jobs {
		a.addJob(job)
	}

	Projects := []*proto.Project{
		{
			ID:          uuid.New().ID(),
			Description: "This site! I decided to make the most complicated portfolio site I could imagine at the time. I had just finished a short tutorial on protocol buffers and wanting to learn more. Obviously, the best plan of action would be to reverse engineer an example. In order to be able to have a reasonable visual represention of my work, a frontend was required. The only gRPC web client in production at time of writting is improbable's. This limited my options to their hackernews app, for which I'm very grateful",
			Meta:        "TypeScript, Go, gRPC, protocol buffers",
			Title:       "portfolio",
			Repo:        "https://github.com/StudentOfJS/portfolio",
		},
		{
			ID:          uuid.New().ID(),
			Description: "Moonrock TGE site is an ERC20 ICO site and contract. The ERC20 contract is written in Solidity and testing is achieved using the truffle framework, web3 and Jest. The website is written in TypeScript and uses React",
			Meta:        "Ethereum, Solidity, TypeScript, React",
			Title:       "Moonrock",
			Repo:        "https://github.com/StudentOfJS/Moonrocks",
		},
		{
			ID:          uuid.New().ID(),
			Description: "Moonrock Server provides an API for authentication and a newletter sign up. It is used by the Moonrock ICO website. The server is written in Go and utilizes the Gin framework",
			Meta:        "Go, Gin, OAuth2.0",
			Title:       "Moonrock Server",
			Repo:        "https://github.com/StudentOfJS/moonrock-server",
		},
		{
			ID:          uuid.New().ID(),
			Description: "WeatherShiz is a weather app, that connects to the openWeatherAPI and returns graphs of weather data, depending on the end users search query",
			Meta:        "TypeScript, React/ Redux, openWeatherAPI",
			Title:       "WeatherShiz",
			Repo:        "https://github.com/StudentOfJS/weathershiz",
		},
		{
			ID:          uuid.New().ID(),
			Description: "Build surveys and analyse the results with the Survey Management framework. Express, Graphql server",
			Meta:        "Express, GraphQL, Apollo Server, Mongo",
			Title:       "Survey Management",
			Repo:        "https://github.com/StudentOfJS/survey-management",
		},
		{
			ID:          uuid.New().ID(),
			Description: "Typee is a basic blog, that connects to a simple api",
			Meta:        "React, TypeScript, Axios, Styled Components",
			Title:       "Typee",
			Repo:        "https://github.com/StudentOfJS/typee",
		},
		{
			ID:          uuid.New().ID(),
			Description: "An API for creating, and viewing articles, authentication required. Server uses the Gin framework.",
			Meta:        "Go, Gin",
			Title:       "Go Articles API",
			Repo:        "https://github.com/StudentOfJS/go-articles",
		},
	}
	for _, project := range Projects {
		a.addProject(project)
	}

	Skills := []*proto.Skill{
		{
			ID:          uuid.New().ID(),
			Description: "JS",
			Name:        "React",
			Rating:      9,
		},
		{
			ID:          uuid.New().ID(),
			Description: "html/JSON, GraphQL, gRPC",
			Name:        "API integration",
			Rating:      7,
		},
		{
			ID:          uuid.New().ID(),
			Description: "html/JSON, GraphQL, gRPC",
			Name:        "API creation",
			Rating:      7,
		},
		{
			ID:          uuid.New().ID(),
			Description: "HTML, CSS, JS",
			Name:        "Frontend basics",
			Rating:      10,
		},
		{
			ID:          uuid.New().ID(),
			Description: "MongoDB, BoltDB, SQL, PostgreSQL",
			Name:        "Databases",
			Rating:      7,
		},
		{
			ID:          uuid.New().ID(),
			Description: "intermediate level",
			Name:        "Go",
			Rating:      7,
		},
		{
			ID:          uuid.New().ID(),
			Description: "basics",
			Name:        "Node",
			Rating:      6,
		},
		{
			ID:          uuid.New().ID(),
			Description: "React and express/GraphQL server experience",
			Name:        "TypeScript",
			Rating:      8,
		},
		{
			ID:          uuid.New().ID(),
			Description: "Worked in ops for over a decade, primarily as Systems Administrator",
			Name:        "Sys Ops",
			Rating:      8,
		},
	}

	for _, skill := range Skills {
		a.addSkill(skill)
	}
	return nil
}
