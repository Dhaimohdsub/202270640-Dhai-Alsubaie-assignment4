# Technical Documentation — Assignment 3

## Project Overview
This project is a responsive and interactive personal portfolio website developed using HTML, CSS, and JavaScript. It builds on previous assignments by adding advanced front-end functionality such as API integration, project exploration logic, state management, and improved user guidance.

## Implemented Features

### 1. Welcome Overlay
A full-screen welcome overlay appears when the page loads.  
It provides an introduction before showing the portfolio content.

#### Behavior
- On first visit, the overlay displays a general welcome message.
- On later visits, if a visitor name has been saved, it displays a personalized “Welcome back” message.
- The overlay disappears automatically after a short delay using JavaScript and CSS transition effects.

#### Purpose
This feature improves the user experience and demonstrates conditional logic and state-based behavior.

---

### 2. Personal Welcome and Visitor State
Inside the hero section, the website includes a small interaction area where the visitor can enter and save a name.

#### Implementation
- The name is saved using `localStorage`
- The saved name is displayed in the welcome message
- A clear button removes the saved name
- A timer counts how many seconds the visitor has been on the site

#### Purpose
This feature demonstrates simple state management and dynamic updates to the UI.

---

### 3. Project Explorer
The Projects section is generated dynamically from a JavaScript array of project objects.

Each project object contains:
- title
- short description
- full description
- category
- year
- tags
- expanded state

#### Interactions
Users can:
- filter projects by category
- sort them by newest, oldest, or alphabetical order
- click “Show Details” to expand and collapse extra information

#### Logic
The feature uses:
- array filtering
- array sorting
- conditional rendering
- DOM updates
- per-project state tracking using an `expanded` property

#### Purpose
This feature satisfies the assignment requirement for more advanced application logic.

---

### 4. GitHub Dashboard (API Integration)
The GitHub Dashboard uses the GitHub API to fetch public repositories for a selected username.

#### Displayed Information
- total repositories loaded
- top language used
- latest updated repository
- repository cards containing:
  - repository name
  - description
  - primary language
  - stars
  - updated date

#### User Feedback
The section provides:
- a loading message while fetching data
- a friendly error message if the request fails
- an empty state message if no repositories are found

#### Purpose
This feature satisfies the assignment requirement for external API integration.

---

### 5. Contact Form Validation
The Contact form includes:
- Name field
- Email field
- Message field
- Checkbox confirmation

#### Validation Rules
- Name must contain at least 2 characters
- Email must match a valid pattern
- Message must be at least 10 characters
- Checkbox must be checked before submission

#### Feedback
- Invalid inputs show error messages below the field
- A success message appears after valid submission
- No backend is connected, so this works as a front-end demo

#### Purpose
This feature demonstrates multi-step validation logic and clear user feedback.

---

### 6. Theme Toggle
The website allows users to switch between dark mode and light mode.

#### Implementation
- CSS custom properties define both themes
- JavaScript updates the `data-theme` attribute on the root element
- The selected theme is saved in `localStorage`

#### Purpose
This demonstrates persistent application state and user preference handling.

---

### 7. Greeting Message
A greeting message appears based on the current local time.

#### Examples
- Good morning
- Good afternoon
- Good evening

#### Purpose
This adds dynamic content and improves the personal feel of the portfolio.

---

### 8. Responsive Navigation
The website includes:
- desktop navigation links
- a mobile menu button for smaller screens

#### Behavior
On smaller screens:
- the navigation links are hidden by default
- the Menu button toggles them using JavaScript

#### Purpose
This improves usability across devices and resolves earlier mobile UX issues.

---

### 9. Guide Section
A guide section was added to improve user experience.

It explains:
- where to start
- how to explore projects
- how to use the GitHub dashboard
- how to use the contact form

#### Purpose
This directly improves user guidance and addresses previous feedback about limited UX explanation.

---

## File Structure
- `index.html`: main HTML structure
- `css/styles.css`: styling, layout, responsiveness, transitions, and components
- `js/script.js`: all interactivity and advanced functionality
- `assets/images/`: image assets
- `docs/`: documentation files

## Performance Considerations
The project was kept lightweight by:
- avoiding large frameworks
- minimizing repeated code
- using small, simple assets
- keeping API usage limited to user-triggered requests
- using efficient JavaScript array methods and DOM updates

## Testing
The following features were tested:
- welcome overlay behavior
- visitor name save/clear
- theme persistence
- site timer
- project filtering
- project sorting
- show/hide details
- GitHub API loading
- GitHub API error handling
- mobile navigation
- contact form validation
- back-to-top anchor
- responsive layout

## How to Run
1. Open the project folder in VS Code
2. Run `index.html` using Live Server
3. Test the site in desktop and mobile widths
4. Try the GitHub API section with valid and invalid usernames