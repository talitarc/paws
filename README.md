# 🐾 Paws: Pet Adoption Swipe App

Paws is a mobile-first web application designed to connect potential pet owners with furry friends. It features a fluid, Tinder-inspired swiping interface, real-time data from Sanity CMS, and a persistent favourites system.

## 🚀 Features

- **Tinder-Style Swiping:** Interactive card stack for browsing pets.
- **Sanity.io Integration:** Dynamic content management for pet profiles.
- **Persistent Favourites:** Custom `useFavourites` hook leveraging `localStorage`.
- **Responsive Design:** Fully optimized for mobile and desktop using Material UI (MUI).
- **Skeleton Loading:** Smooth perceived performance during data fetching.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool/Bundler:** Vite
- **UI Library:** Material UI (MUI)
- **Backend/CMS:** Sanity.io
- **State Management:** Custom React Hooks
- **Routing:** React Router DOM

## 📂 Architecture

The project follows a modular "Container-Component" pattern:

- **`/hooks`**: Logic extraction (`usePetFeed`, `useFavourites`).
- **`/components`**: Reusable UI separated by common (eg, Cards, Dialogs, Drawers) and layout (Main, Header and Footer) roles.
- **`/pages`**: Main content of the different pages.

## 📋 Project Designs:

Figma designs are intended to be a guide and the project is not intended to be pixel-perfect in relation to them:
[Paws' Figma Designs](https://www.figma.com/design/aOQKRW7fyZ4k1ft2UPbzmd/Paws?node-id=0-1&t=WpxSB7gRF4QIyQbU-1)

## ⚙️ Live application

Check the live application on: [https://talitarc.github.io/paws](https://talitarc.github.io/paws)

## 📝 Next Steps:

- **TypeScript adoption:** TS was not the first choice for this project due to time constraints, but it is a top priority in the backlog and the natural next effort.
- **Testing:** Tests will be added using Jest and React Testing Library.
- **UX/Front-end:**
  - Pet cards will be kept only on the "findapet" page, and the home will include search buttons to filter the results.
  - Add "Remove All" button on Favourites page.
  - Add Contact and FAQ pages.
  - Add a form to the Contact page.
- **Sanity:**
  - Add i18n.
  - Add an FAQ section.
- **Other housekeeping tasks:**
  - Review deployment.
  - Review Lighthouse performance complaints.

## 🧠 Challenges

- Deployment: paws-cms was inside paws and it caused a major conflict when deploying the application to GitHub Pages. After trying a couple of solutions, paws-cms was moved out of the paws project and now lives in its own repo.

- Lighthouse: Lighthouse is indicating some performance issues (87 rating at this point). Some changes were made to address them (eg, lazy loading, fonts preconnection), but there are still some actions to take (eg, image sizing, review MUI imports)

## 🏆 Wins

- This project was designed, coded and deployed in 4 days, and it fulfills all requirements and optional features.
- Lighthouse accessibility grade is 100.
- Container-Component pattern.
- Styling objects naming and structure review.
- Proptypes addition: moving in a data type-safety direction.
- Custom hooks refactoring.
- Finishing this first effort knowing more about Vite, Material UI and deploying using GitHub Pages.

## 👩🏻‍💻 AI Usage

This project uses AI to gain velocity and better understand trade-offs during development. Some examples of how AI was helpful: - GitHub Copilot helped to find information on Vite's documentation faster and how to set its config properly. - AI also helped to consult Material UI components documentation and to decide the best solution for some features (eg, the drawer for the pets' description). - Grammarly was used to review this READ.me.

## 🐶 Content Disclaimer

To demonstrate real data, this project uses content from the 24PetConnect website, with which the project's author has no association. This application was developed for educational purposes only and it is not intended for commercial use. If you would like to adopt a pet, contact your local shelter, and if you are in Toronto, the city’s website is a great first-step resource to find your furry friend for real.
