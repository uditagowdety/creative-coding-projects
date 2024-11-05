# Reaction-Diffusion Simulation

This project implements a **2D Reaction-Diffusion simulation** using the **Gray-Scott model**, a mathematical model known for producing complex and dynamic patterns. This simulation, inspired by the work of Karl Sims, explores the interactions between two virtual chemicals, A and B, as they react and diffuse across a grid.

![diff](https://github.com/user-attachments/assets/41f99495-b773-428d-bf73-a72c255d7780)

## Project Overview

The core idea of this simulation involves:
- **Chemical A** being added at a given feed rate.
- **Chemical B** being removed at a given kill rate.

### Key Behaviors:
- **Reaction**: Two molecules of B convert a molecule of A into more B, akin to B reproducing using A as "food".
- **Diffusion**: Both chemicals spread across the grid, with A diffusing faster than B.

### Model Details:
- Each cell in the grid holds the concentrations of A and B.
- The grid is updated using the following set of equations:

    ```
    ∂A/∂t = DA * ∇²A - A * B² + f * (1 - A)
    ∂B/∂t = DB * ∇²B + A * B² - (k + f) * B
    ```

    where:
    - **DA** and **DB** are the diffusion rates of A and B.
    - **f** is the feed rate for adding A.
    - **k** is the kill rate for removing B.
    - The Laplacian (∇²) is approximated using a 3x3 convolution kernel.

### Initialization:
- The grid is initialized with A = 1 and B = 0 across all cells, with a small seed area set to B = 1.
- Example parameter values: `DA = 1.0`, `DB = 0.5`, `f = 0.055`, `k = 0.062`.

### Visual Representation:
- **Chemical A** is rendered as white.
- **Chemical B** is rendered as black or in shades to create different visual effects.

## Key Features

- **Interactive Parameters**: Modify the feed rate `f` and kill rate `k` to observe a variety of emerging patterns.
- **Orientation and Style Map**: Customize diffusion directionality and rate maps for more complex visual effects.
- **Scalability**: The simulation is designed to work with grids of varying sizes, allowing for both small- and large-scale pattern generation.

## Example Patterns

- **Mitosis Simulation**: (f = 0.0367, k = 0.0649)
- **Coral Growth Simulation**: (f = 0.0545, k = 0.062)

These parameters can be adjusted to create intricate, organic-looking structures that resemble natural phenomena.

## Further Reading

- Explore the [Gray-Scott Reaction-Diffusion model on Wikipedia](https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system) for more theory.
- Check out the **Reaction-Diffusion Tool** web application for real-time parameter experimentation.
