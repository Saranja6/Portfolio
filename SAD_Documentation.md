# SAD Documentation — Professional Portfolio Website

## 1. Problem Statement
Students and early-career ICT professionals need a central professional platform to present their education, technical skills, academic projects, activities, CV and professional links. A portfolio website provides a structured and accessible way to communicate this information to recruiters, internship providers and professional contacts.

## 2. Objectives
- Present an accurate professional profile.
- Showcase academic and software projects.
- Provide clear evidence of technical skills.
- Provide direct access to CV, GitHub and LinkedIn.
- Provide a responsive interface for different devices.
- Apply System Analysis and Design principles.
- Deploy the completed website publicly.

## 3. Stakeholders
- Primary: Saranja Jeyaradnarajah (portfolio owner)
- Recruiters and internship providers
- Potential employers
- Freelance/project clients
- University/academic evaluators
- Professional networking contacts

## 4. Scope
### In scope
Profile, education, skills, projects, activities, CV link, contact details, responsive design, theme switching, GitHub/LinkedIn links, deployment and testing.

### Out of scope
User accounts, database-backed portfolio management, authenticated administration and a custom email server.

## 5. Constraints
- Project information must remain accurate.
- Missing project details must be added by the owner later.
- Contact form requires a backend or third-party form service for real submissions.
- CV PDF and project screenshots must be supplied by the owner.

## 6. Functional Requirements
FR1: Display professional introduction.
FR2: Display education information.
FR3: Display technical skills.
FR4: Display project information and links.
FR5: Display academic activities and events.
FR6: Provide CV download.
FR7: Provide LinkedIn, GitHub and email links.
FR8: Provide a contact form interface.
FR9: Support light/dark mode.
FR10: Provide responsive navigation.

## 7. Non-Functional Requirements
- Responsive on desktop, tablet and mobile.
- Accessible semantic HTML and keyboard-friendly controls.
- Fast-loading static assets.
- Clear visual hierarchy.
- Maintainable folder structure.
- Cross-browser compatible with modern browsers.
- Professional and recruiter-friendly presentation.

## 8. Use Case Diagram
Actors: Portfolio Visitor, Portfolio Owner.

Main visitor use cases:
- View Home
- Read About
- View Education
- View Skills
- Browse Projects
- View Activities
- Download CV
- Open LinkedIn/GitHub
- Send Contact Message

Owner use cases:
- Update profile content
- Add/update projects
- Replace CV
- Update links
- Maintain deployment

## 9. Use Case Descriptions
### View Projects
Actor: Visitor
Precondition: Website is available.
Main flow: Visitor opens Projects section → selects a project → reviews problem, contribution, technologies and links.
Postcondition: Visitor understands the project and can follow its repository/demo.

### Download CV
Actor: Visitor
Main flow: Visitor selects Download CV → browser opens/downloads the PDF.
Postcondition: Visitor receives the current CV.

### Send Message
Actor: Visitor
Main flow: Visitor enters name, email, subject and message → selects Send Message.
Current implementation: frontend-only confirmation.
Future implementation: connect to a form service/backend.
Postcondition: message is ready to be submitted through the configured service.

## 10. Activity Diagram
Visitor → Open Website → Browse Navigation → Select Section → Read Content → (Project? View Project Details → Open GitHub/Demo) → (CV? Download CV) → (Contact? Complete Form → Submit) → End.

## 11. Site Map
Home
├── About Me
├── Education
├── Skills
├── Projects
├── Experience & Activities
├── CV
└── Contact

## 12. Wireframes
### Desktop
Header/navigation
Hero: profile introduction + profile summary
About: text + career objective
Education: timeline/card
Skills: grouped skill cards
Projects: three project cards
Activities: activity cards
CV: call-to-action banner
Contact: contact details + form
Footer

### Mobile
Header + menu button
Stacked hero
Single-column content sections
Stacked project/activity cards
Stacked contact details/form
Footer links

## 13. Testing Table
| Test | Expected Result | Status |
|---|---|---|
| Navigation links | Scroll to correct section | To test |
| Mobile menu | Opens/closes correctly | To test |
| Theme toggle | Switches light/dark and remembers choice | To test |
| CV button | Opens/downloads PDF when file exists | To test |
| LinkedIn link | Opens correct profile | To test |
| GitHub link | Opens correct profile | To test |
| Email link | Opens mail client | To test |
| Contact validation | Required fields are enforced | To test |
| Responsive layout | Works across desktop/tablet/mobile | To test |
| Keyboard access | Main controls can be reached | To test |
| Browser compatibility | Works in modern Chrome/Edge/Firefox/Safari | To test |

## 14. Reflection
The portfolio applies SAD principles by identifying stakeholders, scope, functional and non-functional requirements, modelling the visitor journey, designing a responsive interface, implementing the website with maintainable static files and defining a testing plan. Future improvements can include a real contact backend, richer project case studies, analytics, additional accessibility testing and a content management workflow.
