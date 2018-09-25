package portfolio

// InitCV initializes the data in the database
func InitCV() {
	b := Bio{
		Description: "Rod's BIO description",
		Title:       "Rod's BIO",
	}
	var api *portfolioAPI
	api.addBio(b, true)

	Courses := []Course{
		{
			ID:          1,
			Institution: "PluralSight, Udemy, CodeSchool",
			Description: "40+ courses, 1000+hrs ",
			Dates:       "February 2017 - June 2018",
			Name:        "Go, Solidity, Haskell, Elm, JS, ES6-ES7, MongoDB, SQL, PostgreSQL, React",
		},
		{
			ID:          2,
			Institution: "FreeCodeCamp",
			Description: "Certification, representing approximately 400 hours of coursework",
			Dates:       "September 2016 - September 2017",
			Name:        "Front End Development Program Certificate",
		},
		{
			ID:          3,
			Institution: "IBM",
			Description: "Intro to Hyperledger",
			Dates:       "August 2017",
			Name:        "Blockchain Essentials",
		},
		{
			ID:          4,
			Institution: "DataCamp",
			Description: "Intermediate R and Intermediate Python for Data Science",
			Dates:       "February 2016 - September 2016",
			Name:        "",
		},
		{
			ID:          5,
			Institution: "The Hong Kong University of Science and Technology",
			Description: "final grade: 100%",
			Dates:       "September, 2016",
			Name:        "Front-End Web UI Frameworks and Tools",
		},
		{
			ID:          6,
			Institution: "MITx",
			Description: "final grade: 93%",
			Dates:       "Nov, 2016",
			Name:        "Introduction to Computer Science and Programming Using Python",
		},
		{
			ID:          7,
			Institution: "Microsoft",
			Description: "final grade: 90%",
			Dates:       "June, 2016",
			Name:        "DAT209x Programming in R for Data Science",
		},
		{
			ID:          8,
			Institution: "Microsoft",
			Description: "final grade: 92%",
			Dates:       "April, 2016",
			Name:        "DAT204x Introduction to R Programming",
		},
		{
			ID:          9,
			Institution: "Microsoft",
			Description: "final grade: 92%",
			Dates:       "April, 2016",
			Name:        "DAT204x Introduction to R Programming",
		},
		{
			ID:          10,
			Institution: "Global Knowledge",
			Description: "AWS Certified Solutions Architect Associate",
			Dates:       "April 2015",
			Name:        "Architecting on AWS",
		},
		{
			ID:          11,
			Institution: "Bolitho",
			Description: "Computing - A, Art - B,  Business studies - C",
			Dates:       "1998 - 2000",
			Name:        "A levels",
		},
		{
			ID:          12,
			Institution: "King's School",
			Description: "10 grade A-C",
			Dates:       "1994-1998",
			Name:        "GCSE",
		},
	}
	for _, course := range Courses {
		api.addCourse(course, true)
	}

	Jobs := []Job{
		{
			ID:          1,
			Company:     "Moonrock",
			JobTitle:    "Freelance Developer",
			Location:    "Bonn Germany",
			Dates:       "09/2017 to 09/2018",
			Description: "Fullstack development. PoC to production deployment. Specializing in React/TypeScript apps and Go",
			LogoUrl:     "https://pbs.twimg.com/profile_images/795188378132160512/qcn9gKEs_400x400.jpg",
		},
		{
			ID:          2,
			Company:     "SCSLhealth",
			JobTitle:    "Systems Administrator",
			Location:    "Cornwall, UK",
			Dates:       "03/2015 to 05/2016",
			Description: "Windows/ Linux Systems Administrator for the UK’s leading provider of diabetes management software",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQHEsi7t_JomAw/company-logo_200_200/0?e=1545264000&v=beta&t=c_CtmX5NjRMB3aFGsvY5EIMvbiIXN3vjPnSOTT0oObs",
		},
		{
			ID:          3,
			Company:     "ByteCloud",
			JobTitle:    "Consultant",
			Location:    "Perth, WA",
			Dates:       "​05/2013 to 02/2015",
			Description: "Provided website performance upgrades, SEO advice, deployment and backup service",
			LogoUrl:     "https://media.licdn.com/dms/image/C4E0BAQEfpJxTAStdZw/company-logo_200_200/0?e=1545264000&v=beta&t=F4oZkwk5x4e-_5Cwn6MTO3rrMELOOPMm_lcjESkjCmc",
		},
		{
			ID:          4,
			Company:     "BlueBox",
			JobTitle:    "Technical Analyst​",
			Location:    "Perth, Australia",
			Dates:       "10/2012 to 05/2013",
			Description: "Sharepoint farm installs and dev environment deployments on AWS",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQHm3FChBd3YoA/company-logo_200_200/0?e=1545264000&v=beta&t=fnucaxUy24KjL69AuYXHclAEX7odNVovkpAGs7ZwK_c",
		},
		{
			ID:          5,
			Company:     "Swift Networks",
			JobTitle:    "Systems Integrator/ Administrator​",
			Location:    "​Perth, WA",
			Dates:       "11/2009 to 10/2012",
			Description: "Designed, deployed and maintained infrastructure for VOIP, IPTV and VOD systems on remote minesites",
			LogoUrl:     "https://media.licdn.com/dms/image/C560BAQEEcF640KTtyQ/company-logo_200_200/0?e=1545264000&v=beta&t=zdX90oN_8DuuoBsrhXoqul1DfuKDJ3KY81M2MlUl3iA",
		},
		{
			ID:          6,
			Company:     "Medion",
			JobTitle:    "Tech Support Lead",
			Location:    "Swindon, UK",
			Dates:       "10/2007 to 04/2009",
			Description: "Provided tech support for Medion PCs to the American market.",
			LogoUrl:     "https://media.licdn.com/dms/image/C4D0BAQFnqVwyqwr-Gw/company-logo_200_200/0?e=1545264000&v=beta&t=95FCovYn5YRjAaa3SNmPSi0jGiXpgCwqu1l7kWVFZJw",
		},
	}
	for _, job := range Jobs {
		api.addJob(job, true)
	}

	Projects := []Project{
		{
			ID:          1,
			Description: "This site! So gRPC is a little overkill for a portfolio site, but I wanted a challenge. Aside from a little extra configuration, there aren't any other negatives compared to a RESTful API. Frontend - React/TypeScript/Redux. Backend - Go. Database - boltDB/storm",
			Meta:        "TypeScript, Go, gRPC, protocol buffers",
			Title:       "portfolio",
			Repo:        "https://github.com/StudentOfJS/portfolio",
		},
		{
			ID:          2,
			Description: "Moonrock TGE site is an ERC20 ICO site and contract. The ERC20 contract is written in Solidity and testing is achieved using the truffle framework, web3 and Jest. The website is written in TypeScript and uses React",
			Meta:        "Ethereum, Solidity, TypeScript, React",
			Title:       "Moonrock",
			Repo:        "https://github.com/StudentOfJS/Moonrocks",
		},
		{
			ID:          3,
			Description: "Moonrock Server provides an API for authentication and a newletter sign up. It is used by the Moonrock ICO website. The server is written in Go and utilizes the Gin framework",
			Meta:        "Go, Gin, OAuth2.0",
			Title:       "Moonrock Server",
			Repo:        "https://github.com/StudentOfJS/moonrock-server",
		},
		{
			ID:          4,
			Description: "WeatherShiz is a weather app, that connects to the openWeatherAPI and returns graphs of weather data, depending on the end users search query",
			Meta:        "TypeScript, React/ Redux, openWeatherAPI",
			Title:       "WeatherShiz",
			Repo:        "https://github.com/StudentOfJS/weathershiz",
		},
		{
			ID:          5,
			Description: "Build surveys and analyse the results with the Survey Management framework. Express, Graphql server",
			Meta:        "Express, GraphQL, Apollo Server, Mongo",
			Title:       "Survey Management",
			Repo:        "https://github.com/StudentOfJS/survey-management",
		},
		{
			ID:          6,
			Description: "An API for creating, and viewing articles, authentication required. Server uses the Gin framework.",
			Meta:        "Go, Gin",
			Title:       "Go Articles API",
			Repo:        "https://github.com/StudentOfJS/go-articles",
		},
	}
	for _, project := range Projects {
		api.addProject(project, true)
	}

	Skills := []Skill{
		{
			ID:          1,
			Description: "React",
			Name:        "JS",
			Rating:      9,
		},
		{
			ID:          2,
			Description: "Redux",
			Name:        "JS",
			Rating:      9,
		},
		{
			ID:          3,
			Description: "Es5, ES6, ES7",
			Name:        "JS",
			Rating:      9,
		},
		{
			ID:          4,
			Description: "API - html/JSON, GraphQL, gRPC",
			Name:        "N",
			Rating:      7,
		},
		{
			ID:          5,
			Description: "HTML, CSS",
			Name:        "CSS",
			Rating:      9,
		},
		{
			ID:          6,
			Description: "Styled Components",
			Name:        "CSS",
			Rating:      10,
		},
		{
			ID:          7,
			Description: "MongoDB",
			Name:        "DB",
			Rating:      9,
		},
		{
			ID:          7,
			Description: "BoltDB",
			Name:        "DB",
			Rating:      9,
		},
		{
			ID:          8,
			Description: "SQL",
			Name:        "DB",
			Rating:      5,
		},
		{
			ID:          9,
			Description: "PostgreSQL",
			Name:        "DB",
			Rating:      6,
		},
		{
			ID:          10,
			Description: "TypeOrm",
			Name:        "DB",
			Rating:      5,
		},
		{
			ID:          11,
			Description: "API - JSON/ HTML",
			Name:        "GO",
			Rating:      8,
		},
		{
			ID:          12,
			Description: "Gin-Go",
			Name:        "GO",
			Rating:      9,
		},
		{
			ID:          13,
			Description: "gRPC, protocol buffers",
			Name:        "GO",
			Rating:      6,
		},
		{
			ID:          14,
			Description: "Express",
			Name:        "N",
			Rating:      6,
		},
		{
			ID:          15,
			Description: "Experience with truffle, web3 and solidity",
			Name:        "SC",
			Rating:      6,
		},
		{
			ID:          16,
			Description: "TypeScript with React/Redux/GraphQL",
			Name:        "TS",
			Rating:      8,
		},
		{
			ID:          17,
			Description: "TypeScript with Node/Express/Apollo Server",
			Name:        "TS",
			Rating:      8,
		},
		{
			ID:          18,
			Description: "Apollo Client React",
			Name:        "GQL",
			Rating:      10,
		},
		{
			ID:          19,
			Description: "Apollo server",
			Name:        "GQL",
			Rating:      8,
		},
		{
			ID:          20,
			Description: "Sys Ops",
			Name:        "S",
			Rating:      8,
		},
	}

	for _, skill := range Skills {
		api.addSkill(skill, true)
	}
}
