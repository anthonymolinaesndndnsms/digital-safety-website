# Digital Safety Hub

A comprehensive static website for cybersecurity awareness and education, designed to help people protect themselves from online threats through practical, accessible guidance.

## Overview

Digital Safety Hub provides:
- **Interactive threat education** - Learn about phishing, malware, ransomware, and more
- **Practical prevention guides** - Step-by-step security checklists with progress tracking
- **Curated resources** - Links to authoritative cybersecurity organizations and tools
- **Accessible design** - Screen reader friendly, keyboard navigable, and mobile responsive

## Features

### Interactive Elements
- **Threat Cards**: Flip/accordion cards with detailed threat information
- **Progress Tracking**: Checklist system with localStorage persistence
- **Quick Scan Modal**: Resource summaries with tooltips
- **Email Demo**: Interactive phishing detection tutorial
- **Smooth Animations**: Powered by anime.js with respect for motion preferences

### Accessibility
- Full keyboard navigation support
- ARIA attributes and semantic HTML
- Screen reader optimized
- High contrast mode support
- Reduced motion preferences respected
- Focus management for modal interactions

### Content Sources
All content is derived from authoritative sources:
- **CISA** - Cybersecurity and Infrastructure Security Agency
- **NIST** - National Institute of Standards and Technology
- **OWASP** - Open Web Application Security Project
- **EFF** - Electronic Frontier Foundation
- **Have I Been Pwned** - Breach detection service
- **KrebsOnSecurity** - Cybersecurity journalism

## File Structure

```
Digital Safety Website/
├── index.html              # Home page
├── threats.html            # Interactive threat cards
├── prevention.html         # Security checklist
├── resources.html          # Curated resources
├── about.html              # Project information
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   ├── threats.css     # Threat page styles
│   │   ├── prevention.css  # Prevention page styles
│   │   └── resources.css   # Resources page styles
│   ├── js/
│   │   ├── anime.min.js    # Animation library
│   │   ├── main.js         # Shared functionality
│   │   ├── threats.js      # Threat card interactions
│   │   ├── prevention.js   # Checklist functionality
│   │   └── resources.js    # Resource modal system
│   └── icons/
│       ├── shield.svg      # Security icons
│       ├── alert.svg
│       ├── lock.svg
│       ├── phishing.svg
│       ├── malware.svg
│       ├── password.svg
│       ├── wifi.svg
│       ├── social.svg
│       ├── menu.svg
│       ├── check.svg
│       └── arrow-up.svg
└── README.md               # This file
```

## How to Use

### Local Development
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Navigate through the site using the main navigation

No server setup required - this is a fully static website.

### Deployment
The site can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

Simply upload all files maintaining the directory structure.

## Interactive Features Guide

### Threats Page
- **Desktop**: Cards flip to reveal detailed information
- **Mobile**: Cards expand as accordions for better usability
- **Keyboard**: Use Tab to navigate, Enter/Space to activate
- **Content**: Each threat includes examples, warning signs, and prevention steps

### Prevention Page
- **Checklist**: Check off items as you complete them
- **Progress**: Visual progress bar updates in real-time
- **Persistence**: Progress saved to localStorage
- **Categories**: Password security, 2FA, updates, browsing, backups
- **Info Toggles**: Click info buttons for additional details
- **Completion**: Celebration animation when all items completed

### Resources Page
- **Quick Scan**: Click buttons for resource summaries
- **Modal System**: Accessible modal with focus management
- **Categories**: Government resources, security organizations, tools, news
- **External Links**: All resources link to authoritative sources

### General Navigation
- **Mobile Menu**: Hamburger menu with smooth animations
- **Back to Top**: Appears after scrolling, smooth scroll to top
- **Smooth Scrolling**: Internal anchor links use smooth scrolling
- **Focus Management**: Proper focus handling for accessibility

## Technical Implementation

### CSS Features
- **CSS Custom Properties**: Consistent design system
- **CSS Grid & Flexbox**: Modern responsive layouts
- **Media Queries**: Mobile-first responsive design
- **Animation**: CSS transitions with anime.js enhancements
- **Accessibility**: High contrast and reduced motion support

### JavaScript Features
- **Vanilla JS**: No framework dependencies (except anime.js)
- **Progressive Enhancement**: Works without JavaScript
- **Event Delegation**: Efficient event handling
- **Local Storage**: Checklist progress persistence
- **Intersection Observer**: Scroll-based animations
- **Focus Management**: Accessibility-compliant modal interactions

### Performance
- **Minimal Dependencies**: Only anime.js for animations
- **Optimized Images**: SVG icons for scalability
- **Efficient CSS**: Minimal unused styles
- **Fast Loading**: Static files with optimized delivery

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Accessibility**: Screen readers (NVDA, JAWS, VoiceOver)
- **Progressive Enhancement**: Core functionality works without JavaScript

## Content Guidelines

### Threat Information
- Based on CISA, NIST, and other authoritative sources
- Includes real-world examples and practical prevention steps
- Updated regularly to reflect current threat landscape
- Accessible language without technical jargon

### Prevention Checklists
- Evidence-based security recommendations
- Step-by-step implementation guidance
- Links to authoritative sources for each recommendation
- Categorized by security domain (passwords, updates, etc.)

### Resource Curation
- Only authoritative, trusted sources included
- Government agencies and established security organizations
- Regular review and updates of external links
- Privacy-respecting recommendations

## Privacy and Security

- **No Tracking**: No analytics, cookies, or tracking scripts
- **No Data Collection**: All functionality is client-side
- **Local Storage Only**: Checklist progress stored locally
- **Secure Links**: External links use proper security attributes
- **Content Security**: All recommendations follow security best practices

## Maintenance

### Regular Updates
- Review threat information quarterly
- Check external links monthly
- Update security recommendations as needed
- Test accessibility with assistive technologies

### Content Review
- Verify accuracy with authoritative sources
- Update examples to reflect current threats
- Ensure language remains accessible
- Test all interactive features

## Customization

### Styling
- Modify CSS custom properties in `:root` for theme changes
- Responsive breakpoints defined in media queries
- Animation preferences handled via CSS and JavaScript

### Content
- Update threat information in respective HTML files
- Modify checklist items in prevention.html
- Add new resources in resources.html
- Maintain link attribution in footer

### Functionality
- JavaScript modules are self-contained
- Add new features by creating additional JS files
- Maintain accessibility standards for new interactions

## Credits

### Design & Development
- Built with modern web standards
- Accessibility-first approach
- Progressive enhancement methodology

### Content Sources
- **CISA**: Cybersecurity best practices and guidelines
- **NIST**: Cybersecurity framework and standards
- **OWASP**: Web application security guidance
- **EFF**: Digital privacy and security resources
- **Security Community**: Current threat intelligence

### Technologies
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern layout and styling techniques
- **JavaScript (ES6+)**: Interactive functionality
- **Anime.js**: Smooth animations and transitions
- **SVG**: Scalable vector graphics for icons

## License

This project is educational content for cybersecurity awareness. All linked resources maintain their respective licenses and terms of use.

---

**Important**: This website is for educational purposes only. While we strive for accuracy, cybersecurity is complex and situational. Always consult with cybersecurity professionals for specific security needs.