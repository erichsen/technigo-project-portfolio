# Mikael Erichsén — Frontend Developer Portfolio

A personal portfolio built with React as part of the Technigo frontend developer program. The goal was to create a clean, responsive portfolio that showcases my projects and skills — designed closely to a provided Figma brief while making it my own with a custom colour palette and layout decisions.

## View it live

🔗 [technigo-project-portfolio.pages.dev](https://technigo-project-portfolio.pages.dev/)

## Features

- **Hero section** — introduction with name, title, tagline, portrait and social links
- **Skills section** — four-column layout covering code, tools, upcoming skills and soft skills
- **Featured Projects** — horizontally scrollable project cards with images, tags, live demo and GitHub links, driven by a JSON data file
- **Tech section** — summary of technologies used throughout the course
- **My Journey** — horizontally scrollable article cards with click-and-drag support
- **Contact section** — name, email and social links
- **Fully responsive** — works from 320px up to 1600px wide

## Tech stack

- React (Vite)
- CSS — custom properties, Flexbox, Grid, responsive media queries
- react-icons

## Approach

Project data is stored in `src/data.json` and rendered dynamically with `.map()`. Each section is its own component with a scoped CSS file. Horizontal scroll sections use `useRef` and mouse event handlers for drag-to-scroll on desktop, with native touch scrolling on mobile. The colour palette (teal `#256F71` + coral `#E8845C`) was chosen to give the portfolio a distinct identity while keeping good contrast and readability.

## If I had more time

- Add scroll animations as the user moves down the page
- Add `og:tags` for better social media sharing previews
- Write and publish real blog articles for the My Journey section
- Add a favicon
- Connect a custom domain