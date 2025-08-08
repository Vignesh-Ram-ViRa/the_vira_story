/**
 * Hobby Data Constants - Portfolio Content Management
 * 
 * Centralized hobby information and metadata for portfolio galleries.
 * Works in conjunction with assetReferences.js for complete asset management.
 * 
 * Structure:
 * - photography: Nature and landscape photography collection
 * - sketching: Digital art and traditional artwork portfolio  
 * - travel: Adventure memories and cultural experiences
 * 
 * Each category contains:
 * - title: Display name for the hobby
 * - description: Brief description for the gallery
 * - images: Array of image objects with metadata
 * 
 * Image object structure:
 * - id: Unique identifier
 * - src: Image URL from IMAGES constants
 * - title: Image title/name
 * - location: Geographic location (photography/travel)
 * - medium: Art medium/technique (sketching)
 * 
 * Usage:
 * import { HOBBY_DATA } from './hobbyData';
 * const artImages = HOBBY_DATA.sketching.images;
 */

import { IMAGES } from './assetReferences';

export const HOBBY_DATA = {
  photography: {
    title: "Photography Collection",
    description: "Capturing life's beautiful moments through my lens",
    images: [
      { id: 1, src: IMAGES.PHOTOGRAPHY.PHOTO_1, title: "Nature's Canvas", location: "Scenic Viewpoint" },
      { id: 2, src: IMAGES.PHOTOGRAPHY.PHOTO_2, title: "Golden Hour", location: "Landscape Photography" },
      { id: 3, src: IMAGES.PHOTOGRAPHY.PHOTO_3, title: "Through the Lens", location: "Nature Walk" },
      { id: 4, src: IMAGES.PHOTOGRAPHY.PHOTO_4, title: "Captured Moment", location: "Photography Session" },
      { id: 5, src: IMAGES.PHOTOGRAPHY.PHOTO_5, title: "Light & Shadow", location: "Street Photography" },
      { id: 6, src: IMAGES.PHOTOGRAPHY.PHOTO_6, title: "Perfect Frame", location: "Urban Explorer" }
    ]
  },
  sketching: {
    title: "Art Portfolio",
    description: "Freehand drawings and creative expressions",
    images: [
      { id: 1, src: IMAGES.ART.ART_1, title: "Digital Masterpiece", medium: "Digital Art" },
      { id: 2, src: IMAGES.ART.ART_2, title: "Pastel Dreams", medium: "Pastel" },
      { id: 3, src: IMAGES.ART.ART_3, title: "Pencil Sketch I", medium: "Graphite" },
      { id: 4, src: IMAGES.ART.ART_4, title: "Pencil Sketch II", medium: "Graphite" },
      { id: 5, src: IMAGES.ART.ART_5, title: "Pencil Sketch III", medium: "Graphite" },
      { id: 6, src: IMAGES.ART.ART_6, title: "Pencil Sketch IV", medium: "Graphite" }
    ]
  },
  travel: {
    title: "Travel Adventures",
    description: "Exploring cultures and landscapes around the world",
    images: [
      { id: 1, src: IMAGES.TRAVEL.TRAVEL_1, title: "Adventure Begins", location: "Mountain Trail" },
      { id: 2, src: IMAGES.TRAVEL.TRAVEL_2, title: "Journey Memories", location: "Scenic Route" },
      { id: 3, src: IMAGES.TRAVEL.TRAVEL_3, title: "Explorer's View", location: "Hiking Adventure" },
      { id: 4, src: IMAGES.TRAVEL.TRAVEL_4, title: "Travel Diary", location: "Cultural Experience" },
      { id: 5, src: IMAGES.TRAVEL.TRAVEL_5, title: "Wanderlust", location: "Nature's Beauty" },
      { id: 6, src: IMAGES.TRAVEL.TRAVEL_6, title: "Journey's End", location: "Peaceful Moments" }
    ]
  }
};

export default HOBBY_DATA; 