# React Movie Search App

A simple React + TypeScript app to search and display movies using the TMDB API, styled with Tailwind CSS, and tracks search analytics with Appwrite.

## Features
- 🔍 **Search Movies**: Search through thousands of movies via TMDB API.
- 🎬 **Movie Cards**: Responsive, modern movie card UI.
- 📊 **Search Analytics**: Tracks search terms and counts using Appwrite.
- ⚡ **Debounced Search**: Reduces API calls for a smoother UX.
- 🎨 **Tailwind CSS**: Custom design with utility-first CSS.
- 🟣 **TypeScript**: Type-safe React components.

## Getting Started
1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Environment Variables**  
   Create a `.env` file in the root with the following:
   ```
   VITE_TMDB_API_KEY=<your_tmdb_api_key>
   VITE_APPWRITE_ENDPOINT=<your_appwrite_endpoint>
   VITE_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
   VITE_APPWRITE_DATABASE_ID=<your_appwrite_database_id>
   VITE_APPWRITE_COLLECTION_ID=<your_appwrite_collection_id>
   ```
4. **Start the development server**  
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure
```
src/
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/             # Route components
├── services/          # API clients (TMDB & Appwrite)
├── App.tsx            # Root component
└── main.tsx           # Entry point
public/
└── index.html
tailwind.config.js
tsconfig.json
.env
```

## Customization

### Styling
Tailwind CSS is used with custom layers and utility classes in `index.css`.

### Appwrite Integration
Update `src/services/appwrite.ts` with your Appwrite endpoint and ensure your environment variables are set.

## Scripts
- `npm run dev` — Start development server  
- `npm run build` — Build for production  
- `npm run preview` — Preview production build  

## Credits
- [TMDB API](https://developers.themoviedb.org/)  
- [Appwrite](https://appwrite.io/)  
- [Tailwind CSS](https://tailwindcss.com/)  

## License
MIT

Happy coding! 🎬
