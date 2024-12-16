# handpose drawing tool ✏️

this project is an interactive drawing tool that uses hand detection to create dynamic paintings based on finger positioning. by leveraging **ml5.js** and hand pose detection models, users can interact with the canvas using their hands and fingers in real time.

## project overview
the tool uses:
- **video capture** to access real-time webcam input.
- **hand pose detection** via a pre-trained hand-tracking model.
- gesture-based drawing logic where a line is drawn when the thumb and index finger are close together.

## how it works
1. **hand tracking**: the handpose model detects key points on the user's hand, particularly the thumb and index finger.
2. **gesture-based drawing**: the midpoint between the thumb and index finger acts as the "brush" on the canvas.
3. **dynamic interactions**: if the distance between the thumb and index finger is small (less than 20 pixels), a yellow line is drawn.
4. **export artwork**: users can save their drawings by clicking the mouse.

## demo
![demo screenshot](path/to/demo-screenshot.png)

## dependencies
- [p5.js](https://p5js.org) for canvas rendering and video handling
- [ml5.js](https://ml5js.org) for machine learning models
- hand pose detection model: based on **google's mediapipe blazepose**

## installation and setup
1. clone this repository:
   ```bash
   git clone https://github.com/your-username/handpose-drawing-tool.git
   ```
2. open the project in your favorite code editor.
3. ensure you have a local development server set up (e.g., using vs code's live server or python simplehttpserver).
4. run the project and open it in a browser.

## code explanation
### key sections:
- **hand detection**: the `ml5.handpose` model is initialized and detects hand landmarks from webcam input.
- **drawing logic**: lines are dynamically drawn when the distance between the thumb and index finger is below a threshold.
- **graphics layer**: `creategraphics` is used to manage the painting layer, allowing the video feed to remain clean.
- **save functionality**: users can export the current canvas using `save()`.

### core files
- `index.html`: the html structure.
- `sketch.js`: the main javascript file handling video input, hand tracking, and drawing logic.
- `ml5.js` library (loaded via cdn).

## dataset and model
- **handpose model**: the hand tracking is powered by a model trained on the **coco dataset**.
- original dataset: [coco dataset](https://cocodataset.org/)
- active dataset used (courtesy of google): based on **mediapipe blazepose**.
- model reference paper: [blazepose: on-device real-time body pose tracking](https://arxiv.org/abs/2006.10204)

## trade-offs: blazepose vs. movenet
- **blazepose**: designed for high-performance, real-time pose estimation on mobile devices, with fast execution and low latency.
- **movenet**: focuses on higher accuracy for full-body pose estimation but may require more computational resources.

blazepose was chosen here due to its efficiency for hand tracking and real-time performance.

## features
- real-time hand tracking
- gesture-based interactive drawing
- save artwork with a single click

## acknowledgments
- **ml5.js** for easy-to-use ml models.
- **google's blazepose** for the backbone hand tracking model.
- **coco dataset** for the model's training data.
- [humansofai](#) for inspiration and active dataset contributions.

## future improvements
- add gesture recognition for additional tools (e.g., eraser, color picker).
- support for multiple hands or collaborative drawing.
- incorporate hand pose feedback visuals.

---
## 👩‍💻 about me

i’m udita gowdety, an artist and creative developer, exploring the intersections of **art + tech** through code. if you’re into creative coding, let’s connect and share ideas :)

---

*happy coding! 🎉*
