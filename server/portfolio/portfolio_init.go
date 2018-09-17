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
			Institution: "Bolitho",
			Description: "Computing - A, Art - B,  Business studies - C",
			Dates:       "A levels",
			Name:        "",
		},
		{
			ID:          uuid.New().ID(),
			Institution: "King's School Bruton",
			Description: "10 grade A-C",
			Dates:       "1994-1998",
			Name:        "GCSE",
		},
	}
	for _, course := range Courses {
		a.addCourse(course)
	}

	Jobs := []*proto.Job{
		{
			ID:          1,
			Company:     "Moonrock",
			JobTitle:    "Freelance Developer",
			Location:    "Bonn Germany",
			Dates:       "09/2017 to 09/2018",
			Description: "Created PoC React based apps. Production HR software.",
			LogoUrl:     "https://www.linkedin.com/company/rocketship-wp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_showcase%3B0zcyIurxTkyieDgwd7W%2FGg%3D%3D",
		},
		{
			ID:          2,
			Company:     "SCSLhealth",
			JobTitle:    "Systems Administrator",
			Location:    "Cornwall, UK",
			Dates:       "03/2015 to 05/2016",
			Description: "Windows/Linux systems administration for the UK’s leading provider of diabetes management software",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQHEsi7t_JomAw/company-logo_200_200/0?e=1545264000&v=beta&t=c_CtmX5NjRMB3aFGsvY5EIMvbiIXN3vjPnSOTT0oObs",
		},
		{
			ID:          3,
			Company:     "ByteCloud",
			JobTitle:    "SEO consultant /web developer",
			Location:    "Perth, WA",
			Dates:       "​05/2013 to 02/2015",
			Description: "Provided website performance upgrades, SEO advice, hosting setup and backup service setup",
			LogoUrl:     "https://media.licdn.com/dms/image/C4E0BAQEfpJxTAStdZw/company-logo_200_200/0?e=1545264000&v=beta&t=F4oZkwk5x4e-_5Cwn6MTO3rrMELOOPMm_lcjESkjCmc",
		},
		{
			ID:          4,
			Company:     "BlueBox",
			JobTitle:    "Technical Analyst​",
			Location:    "Perth, Australia",
			Dates:       "10/2012 to 05/2013",
			Description: "AWS Sharepoint farm installs.",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQHm3FChBd3YoA/company-logo_200_200/0?e=1545264000&v=beta&t=fnucaxUy24KjL69AuYXHclAEX7odNVovkpAGs7ZwK_c",
		},
		{
			ID:          5,
			Company:     "Swift Networks",
			JobTitle:    "Systems Integrator/ Administrator​",
			Location:    "​Perth, WA",
			Dates:       "11/2009 to 10/2012",
			Description: "Architect, deploy and maintain infrastructure for VOIP, IPTV and VOD systems on remote minesites",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQEEcF640KTtyQ/company-logo_200_200/0?e=1545264000&v=beta&t=zdX90oN_8DuuoBsrhXoqul1DfuKDJ3KY81M2MlUl3iA",
		},
		{
			ID:          6,
			Company:     "Medion",
			JobTitle:    "Tech Support Lead",
			Location:    "Swindon, UK",
			Dates:       "10/2007 to 04/2009",
			Description: "",
			LogoUrl:     "https://media.licdn.com/dms/image/C4D0BAQFnqVwyqwr-Gw/company-logo_200_200/0?e=1545264000&v=beta&t=95FCovYn5YRjAaa3SNmPSi0jGiXpgCwqu1l7kWVFZJw",
		},
		{
			ID:          7,
			Company:     "BRG Direct Ltd",
			JobTitle:    "IT Support",
			Location:    "Cornwall, UK",
			Dates:       "10/2007 to 04/2009",
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
			Description: "experience with truffle, web3 and solidity",
			Name:        "Smart Contracts",
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
}
