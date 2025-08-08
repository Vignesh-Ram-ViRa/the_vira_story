# Vira Portfolio

A modern, interactive React portfolio showcasing personal projects, skills, and creative works with stunning 3D animations and GitHub LFS asset management.

## 🚀 Features

- **Modern React 19** with latest features and optimizations
- **Framer Motion** for smooth animations and transitions
- **Redux Toolkit** for state management
- **3D Interactive Components** for engaging user experience
- **GitHub LFS Asset Management** for optimized image hosting
- **Centralized Constants System** for maintainable code
- **Multi-language Support** with dynamic content switching
- **Responsive Design** for all devices
- **WebGL Effects** using OGL library

## 🏗️ Project Architecture

### **Constants System**
Centralized management of all assets and data:

```
src/constants/
├── assetReferences.js    # Centralized image URLs and asset management
├── hobbyData.js         # Hobby portfolio content and metadata
├── themes.js           # Theme configurations
└── language.json       # Multi-language content
```

### **Component Structure**
```
src/components/
├── 3d/                 # Interactive 3D components
│   ├── Stack.jsx       # Draggable card stack component
│   └── MagicBento.jsx  # Interactive grid layout
├── molecules/          # Reusable UI components
│   └── ProfileCard/    # Animated profile display
└── organisms/          # Complex feature components
    ├── HobbyModal/     # Portfolio gallery modals
    └── ContactModal/   # Contact form interface
```

## 🖼️ Asset Management

### **GitHub LFS Integration**
Large images are hosted using GitHub LFS for optimal performance:

```javascript
// Asset URLs automatically generated
const GITHUB_LFS_BASE = "https://media.githubusercontent.com/media/Vignesh-Ram-ViRa/vira_assets/refs/heads/main/public/assets/images";

// Usage in components
import { IMAGES } from '../constants/assetReferences';
<img src={IMAGES.ART.ART_1} alt="Digital Art" />
```

### **Generic Asset Naming**
Consistent, scalable naming convention:
- `ART_1`, `ART_2`, `ART_3` - Art portfolio images
- `PHOTO_1`, `PHOTO_2`, `PHOTO_3` - Photography collection
- `TRAVEL_1`, `TRAVEL_2`, `TRAVEL_3` - Travel memories

### **Adding New Assets**
1. Upload images to your GitHub LFS repository
2. Update `src/constants/assetReferences.js`:
   ```javascript
   ART: {
     ART_1: `${GITHUB_LFS_BASE}/vira_story/Digital1.png`,
     ART_2: `${GITHUB_LFS_BASE}/vira_story/Digital2.png`, // Add new image
   }
   ```
3. Update `src/constants/hobbyData.js` with metadata

## 🛠️ Development

### **Installation**
```bash
npm install
```

### **Development Server**
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) in development mode.

### **Build for Production**
```bash
npm run build
```
Creates optimized production build in `build/` folder.

### **Code Quality**
```bash
npm test        # Run test suite
npm run lint    # Check code quality
```

## 📱 Key Components

### **HobbyModal**
Interactive portfolio galleries with image viewers:
- **Photography**: Nature and landscape collection
- **Art**: Digital art and traditional sketches
- **Travel**: Adventure memories and cultural experiences

### **Stack Component**
3D draggable card stack with physics-based interactions:
- Mouse/touch drag controls
- Smooth animations with Framer Motion
- Customizable card dimensions and sensitivity

### **ProfileCard**
Animated personal introduction with:
- Interactive hover effects
- Dynamic background gradients
- Social media integration

## 🎨 Customization

### **Adding New Hobby Categories**
1. Update `hobbyData.js`:
   ```javascript
   export const HOBBY_DATA = {
     // ... existing categories
     music: {
       title: "Music Collection",
       description: "Musical journey and compositions",
       images: [/* ... */]
     }
   }
   ```

2. Add corresponding assets to `assetReferences.js`
3. Update UI components to handle new category

### **Theme Customization**
Modify `src/constants/themes.js` for:
- Color schemes
- Animation timings
- Layout configurations

## 🌍 Multi-language Support

Content managed in `src/constants/language.json`:
```javascript
{
  "en": {
    "nav": { "home": "Home", "about": "About" },
    "hero": { "title": "Welcome to my portfolio" }
  }
}
```

## 📦 Dependencies

### **Core Libraries**
- **React 19** - Latest React features
- **Framer Motion** - Animation library
- **Redux Toolkit** - State management
- **React Router** - Navigation

### **3D & Animations**
- **OGL** - WebGL effects
- **GSAP** - Advanced animations

### **Development**
- **Create React App** - Build tooling
- **ESLint** - Code quality
- **Prettier** - Code formatting

## 🚀 Deployment

### **GitHub Pages**
```bash
npm run build
npm run deploy
```

### **Environment Variables**
```env
REACT_APP_CDN_URL=your_cdn_url
REACT_APP_UPLOAD_URL=your_upload_url
```

## 🤝 Contributing

1. Follow the established constants architecture
2. Use generic asset naming conventions
3. Update README when adding new features
4. Maintain component documentation

## 📄 License

This project is personal portfolio software. All rights reserved.

## 🔗 Links

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **GitHub**: [Repository](https://github.com/Vignesh-Ram-ViRa/vira)
- **Assets**: [GitHub LFS Repository](https://github.com/Vignesh-Ram-ViRa/vira_assets)

---

Built with ❤️ using React and modern web technologies.
