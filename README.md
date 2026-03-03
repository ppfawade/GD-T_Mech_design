# Geometric Dimensioning and Tolerancing (GD&T) Knowledge Base
## A Digital Compendium for Mechanical Design and Manufacturing

**Author:** [Your Name/Organization]  
**Date:** October 2023  
**Version:** 1.0.0  
**Department:** Mechanical Engineering & Design Methodology

---

### Abstract

This repository contains the source code and documentation for the **GD&T Knowledge Base**, a web-based pedagogical tool designed to assist mechanical engineers, students, and manufacturing professionals in understanding and applying the principles of Geometric Dimensioning and Tolerancing (GD&T), Design for Manufacture and Assembly (DFMA), and related international standards (ASME/ISO).

The application serves as an interactive reference manual, visualizing complex tolerance zones and providing cross-referenced data to ensure design intent is communicated unambiguously.

---

### Foreword by the Reviewing Committee

> *"In the domain of mechanical engineering, the drawing is the contract. Ambiguity is the enemy of quality and cost. This project successfully bridges the gap between static textbook definitions and the dynamic needs of modern engineering design. By integrating visual representations of tolerance zones (e.g., the difference between Surface Straightness and Axis Straightness) directly with the relevant standards, it fosters a deeper intuition for the 'grammar' of engineering."*
>
> — **Prof. A. K. Metric**, Ph.D., Dept. of Mechanical Engineering

---

### Table of Contents

1.  [Introduction](#1-introduction)
2.  [Theoretical Framework](#2-theoretical-framework)
    *   [2.1 Geometric Dimensioning and Tolerancing (GD&T)](#21-geometric-dimensioning-and-tolerancing-gdt)
    *   [2.2 Design for Manufacture and Assembly (DFMA)](#22-design-for-manufacture-and-assembly-dfma)
3.  [Standards and Specifications](#3-standards-and-specifications)
4.  [System Architecture](#4-system-architecture)
5.  [Deployment and Usage](#5-deployment-and-usage)
6.  [References](#6-references)

---

### 1. Introduction

The primary objective of this project is to digitize the "Tribal Knowledge" often found in engineering firms and formalize it into a structured, accessible format. Traditional handbooks (e.g., *Machinery's Handbook*) are exhaustive but often lack the interactivity required for rapid comprehension.

This platform categorizes knowledge into distinct pillars:
*   **GD&T Symbols:** The vocabulary of geometry control.
*   **Fits & Limits:** Systems for defining mating part relationships (ISO 286).
*   **Metrology:** Principles of measurement and verification (CMM, Gaging).
*   **DFMA:** The philosophy of efficient production.
*   **Manufacturing:** Capabilities of production processes (Welding, Threads).
*   **Standards:** The legal and technical authority.

---

### 2. Theoretical Framework

#### 2.1 Geometric Dimensioning and Tolerancing (GD&T)

GD&T is a symbolic language used on engineering drawings and computer-generated three-dimensional solid models for explicitly describing nominal geometry and its allowable variation.

**Key Concepts Covered:**

*   **Form Controls:** *Flatness* ($\tiny \square$), *Straightness* ($\tiny -$), *Circularity* ($\tiny \bigcirc$), *Cylindricity* ($\tiny \emptyset$). These control the shape of features independent of their size or location.
*   **Orientation Controls:** *Perpendicularity* ($\tiny \perp$), *Parallelism* ($\tiny //$), *Angularity* ($\tiny \angle$). These require a datum reference frame (DRF).
*   **Location Controls:** *Position* ($\tiny \oplus$). The most powerful symbol, controlling location, orientation, and spacing simultaneously.

> **Reference Image:** [ASME Y14.5 Tolerance Zones](https://www.asme.org/wwwasmeorg/media/resourcefiles/aboutasme/who%20we%20are/standards/y14-5-2018-figure-1.jpg)

#### 2.2 Fits and Limits (ISO 286)

The ISO system of limits and fits provides a standardized way to define the relationship between mating parts (holes and shafts).

*   **Clearance Fits:** Always a gap (e.g., H7/f7).
*   **Transition Fits:** Can be gap or interference (e.g., H7/k6).
*   **Interference Fits:** Always tight (e.g., H7/p6).

#### 2.3 Metrology

Verification is as important as specification. The application covers:
*   **CMM (Coordinate Measuring Machines):** Sampling strategies and alignment.
*   **Hard Gaging:** Functional checks (Go/No-Go).

#### 2.4 Design for Manufacture and Assembly (DFMA)

DFMA is the integration of product design and process planning into one common activity.

*   **DFM (Design for Manufacture):** Concerned with selecting cost-effective raw materials and processes.
    *   *Example:* In injection molding, maintaining uniform wall thickness (1.5mm - 3.0mm) to prevent sink marks.
*   **DFA (Design for Assembly):** Concerned with the product structure.
    *   *Example:* Reducing part count by using snap-fits instead of screws.

---

### 3. Standards and Specifications

The application strictly adheres to the following international standards. Users are advised to consult the official publications for legal disputes.

| Standard | Title | Scope |
| :--- | :--- | :--- |
| **ASME Y14.5-2018** | Dimensioning and Tolerancing | The primary standard for GD&T in the United States. Defines the rules for the "Feature Control Frame". |
| **ISO 1101:2017** | Geometrical Product Specifications (GPS) | The international counterpart to ASME Y14.5. Note the differences in the "Envelope Principle" (Rule #1). |
| **ISO 2768-1** | General Tolerances | Simplifies drawings by setting default tolerances (f, m, c, v) for dimensions without specific indications. |
| **ISO 14405-1:2016** | Linear Sizes | Introduces modifiers like **(LP)** (Two-point size) and **(GG)** (Least-squares association) to resolve ambiguity in size measurement. |
| **ISO 286-1:2010** | Limits and Fits | Defines the ISO code system for tolerances on linear sizes (Hole basis vs. Shaft basis). |
| **AWS A2.4** | Welding Symbols | Standard symbols for specifying welding and brazing operations. |

---

### 4. System Architecture

The application is built as a Single Page Application (SPA) to ensure low latency and high interactivity.

*   **Frontend Framework:** React 19 (TypeScript)
*   **Build Tool:** Vite (for optimized bundling and code splitting)
*   **Styling:** Tailwind CSS (Utility-first CSS for consistent design language)
*   **Visualization:** Framer Motion (Physics-based animations for tolerance zones)
*   **Routing:** React Router v7 (Client-side routing)

**Optimization Strategy:**
The codebase utilizes `React.lazy()` and `Suspense` to split the application into smaller "chunks". This ensures that the user only downloads the code required for the current view, significantly reducing the Time to Interactive (TTI).

---

### 5. Deployment and Usage

#### Prerequisites
*   Node.js v18+
*   npm v9+

#### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/gdt-knowledge-base.git

# Navigate to the directory
cd gdt-knowledge-base

# Install dependencies (with legacy peer deps if necessary due to React 19 ecosystem transition)
npm install
```

#### Development Server

```bash
npm run dev
```
Access the local laboratory environment at `http://localhost:3000`.

#### Production Build

```bash
npm run build
```
This compiles the TypeScript code into optimized JavaScript assets in the `/dist` directory, ready for deployment to Vercel or Netlify.

---

### 6. References

1.  American Society of Mechanical Engineers. (2018). *Dimensioning and Tolerancing* (ASME Y14.5-2018). New York, NY.
2.  International Organization for Standardization. (2017). *Geometrical product specifications (GPS) — Geometrical tolerancing* (ISO 1101:2017). Geneva, Switzerland.
3.  Boothroyd, G., & Dewhurst, P. (1983). *Design for Assembly: A Designer's Handbook*. Boothroyd Dewhurst, Inc.
4.  Drake, P. J. (1999). *Dimensioning and Tolerancing Handbook*. McGraw-Hill Education.

---

*“Quality is not an act, it is a habit.”* — Aristotle (attributed)
