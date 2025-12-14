# Image URL Viewer

A simple, lightweight web-based image gallery viewer that displays images from URLs in a responsive masonry layout.

## Features

- **Responsive Masonry Layout**: Automatically adjusts column count based on screen size
- **Lightbox Modal**: Click any image to view it in full size
- **Easy URL Input**: Paste comma-separated image URLs to load multiple images at once
- **Error Handling**: Gracefully handles failed image loads
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## Live Demo

Visit the live demo at: [https://dedenbangkit.github.io/image-url-viewer/](https://dedenbangkit.github.io/image-url-viewer/)

## Usage

1. Open the application in your browser
2. Paste image URLs in the input modal (comma-separated)
3. Click "Proceed" to load the images
4. Click on any thumbnail to view the full-size image
5. Use the "+" button to add more images

### Example URLs Format

```
https://example.com/image1.jpg, https://example.com/image2.png, https://example.com/image3.webp
```

## Local Development

Simply open `image-viewer.html` in your web browser. No build process or server required.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a deployment.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the `main` branch to trigger deployment

## Browser Support

Works in all modern browsers that support:
- CSS Grid/Flexbox
- ES6 JavaScript
- CSS Column Layout

## License

MIT License - feel free to use this project for any purpose.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
