# Assignment 3 — Advanced Functionality

## Overview
This project is an advanced version of my personal portfolio website built using HTML, CSS, and JavaScript. It extends the previous assignments by adding advanced functionality, API integration, user state management, and more complex interaction logic.

The portfolio demonstrates not only visual design, but also advanced front-end programming concepts such as:
- API integration
- filtering and sorting logic
- persistent user state
- dynamic content updates
- improved validation and feedback

## Main Features

### 1. Welcome Overlay
A welcome screen appears when the website opens.  
It displays a short introduction message and then disappears automatically.  
If the visitor has saved a name before, the overlay changes to a personalized “Welcome back” message.

### 2. Personal Welcome Section
The user can enter a name and save it.  
The website remembers the name using `localStorage` and displays it again after refresh.  
A timer also tracks how long the visitor has been on the website.

### 3. Project Explorer
The Projects section is interactive.  
Users can:
- filter projects by category
- sort projects by newest, oldest, or A–Z
- expand and collapse project details

### 4. GitHub Dashboard
The website integrates with the GitHub API to load public repositories dynamically.  
It displays:
- total number of repositories
- most used language
- latest updated repository
- repository cards with details

It also includes:
- loading state
- empty state
- error message if the request fails

### 5. Contact Form Validation
The contact form checks:
- name length
- valid email format
- minimum message length
- checkbox confirmation

Error messages appear below the related fields, and a success message is shown when the form is completed correctly.

### 6. Theme Toggle
The user can switch between dark and light theme.  
The selected theme is saved in `localStorage`.

### 7. Responsive Navigation
A responsive mobile menu is included for smaller screens.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- GitHub REST API
- localStorage

## How to Run the Project
1. Clone or download the repository
2. Open the project folder in VS Code
3. Run `index.html` using Live Server  
   or open it directly in the browser

## AI Usage Summary
AI was used to support:
- planning advanced features
- debugging JavaScript logic
- improving UI/UX structure
- refining responsive behavior
- strengthening documentation

More details are available in `docs/ai-usage-report.md`.

## Live Demo
Add your GitHub Pages link here.

## Repository
Add your GitHub repository link here.

## Student Information
- Name: Dhai Alsubaie
- Major: Software Engineering