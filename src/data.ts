
export type Category = 'GD&T' | 'Fundamentals' | 'Stackups' | 'DFMA' | 'Manufacturing' | 'Standards' | 'Fits & Limits' | 'Metrology';

export interface Topic {
  id: string;
  title: string;
  category: Category;
  description: string;
  standardRef: string; // e.g., "ASME Y14.5-2018 Section 5.4.1"
  symbol?: string; // SVG path or similar identifier
  content: string;
  blueprintType: 'flatness' | 'straightness' | 'position' | 'circularity' | 'cylindricity' | 'perpendicularity' | 'parallelism' | 'angularity' | 'profile' | 'profile-line' | 'runout' | 'concentricity' | 'symmetry' | 'datum' | 'fits' | 'welding' | 'thread' | 'metrology' | 'surface-finish' | 'modifiers' | 'injection-molding' | 'sheet-metal' | 'cnc-machining' | 'stackup' | 'generic';
  relatedTopics?: string[]; // IDs of related topics
}

export const topics: Topic[] = [
  {
    id: 'flatness',
    title: 'Flatness',
    category: 'GD&T',
    description: 'Flatness is a condition of a surface or derived median plane having all elements in one plane.',
    standardRef: 'ASME Y14.5-2018, Section 5.4.2',
    symbol: '⏥',
    content: `
      Flatness is a form control. It specifies a tolerance zone defined by two parallel planes within which the surface must lie.
      
      **Key Characteristics:**
      - Does not control size.
      - Does not require a datum reference.
      - Applied to a surface, not a feature of size (unless applied to a derived median plane).
      
      **Application:**
      Commonly used for sealing surfaces, mounting surfaces, or where two parts must slide against each other without binding.
    `,
    blueprintType: 'flatness',
    relatedTopics: ['straightness', 'perpendicularity', 'surface-finish']
  },
  {
    id: 'straightness',
    title: 'Straightness',
    category: 'GD&T',
    description: 'Straightness is a condition where an element of a surface, or an axis, is a straight line.',
    standardRef: 'ASME Y14.5-2018, Section 5.4.1',
    symbol: '⎯',
    content: `
      Straightness can be applied to a surface element or an axis (feature of size).
      
      **Surface Straightness:**
      - Controls the form of a line on the surface.
      - Tolerance zone is two parallel lines.
      
      **Axis Straightness:**
      - Controls the straightness of the axis (e.g., a pin or shaft).
      - Tolerance zone is a cylinder (when the diameter symbol is present).
      - Can be applied at MMC (Maximum Material Condition).
    `,
    blueprintType: 'straightness',
    relatedTopics: ['flatness', 'position', 'machining-tolerances']
  },
  {
    id: 'position',
    title: 'Position',
    category: 'GD&T',
    description: 'Position is the location of one or more features of size relative to one another or to one or more datums.',
    standardRef: 'ASME Y14.5-2018, Section 7',
    symbol: '⌖',
    content: `
      Position is the most widely used GD&T symbol. It controls the location and orientation of features of size (holes, slots, pins).
      
      **Key Characteristics:**
      - Requires datums.
      - Controls location, orientation, and spacing.
      - Can use MMC, LMC, or RFS modifiers.
      
      **Tolerance Zone:**
      Typically a cylinder (for holes) or a width (for slots) centered at the true position.
    `,
    blueprintType: 'position',
    relatedTopics: ['perpendicularity', 'iso-14405-modifiers', 'machining-tolerances', 'fits-and-limits']
  },
  {
    id: 'perpendicularity',
    title: 'Perpendicularity',
    category: 'GD&T',
    description: 'Perpendicularity is the condition of a surface, axis, or line being at a 90-degree angle to a datum plane or axis.',
    standardRef: 'ASME Y14.5-2018, Section 6.3.1',
    symbol: '⟂',
    content: `
      Perpendicularity is an orientation control. It controls how much a feature can deviate from a perfect 90-degree angle relative to a datum.
      
      **Surface Perpendicularity:**
      - Tolerance zone is two parallel planes perpendicular to the datum.
      
      **Axis Perpendicularity:**
      - Tolerance zone is a cylinder perpendicular to the datum plane.
    `,
    blueprintType: 'perpendicularity',
    relatedTopics: ['flatness', 'position']
  },
  {
    id: 'dfma-intro',
    title: 'Introduction to DFMA',
    category: 'DFMA',
    description: 'Design for Manufacture and Assembly (DFMA) is an engineering methodology that focuses on reducing time-to-market and total production costs.',
    standardRef: 'Industry Best Practice',
    content: `
      **DFM (Design for Manufacture):**
      Focuses on selecting the most cost-effective raw materials and processes to be used in production.
      
      **DFA (Design for Assembly):**
      Focuses on reducing the number of parts in a product and ensuring that the remaining parts are easy to assemble.
      
      **Core Principles:**
      1. Minimize part count.
      2. Standardize parts and materials.
      3. Design for efficient joining (snap fits vs. screws).
      4. Minimize reorientation during assembly.
    `,
    blueprintType: 'generic',
    relatedTopics: ['injection-molding-dfm', 'sheet-metal-dfm', 'machining-tolerances']
  },
  {
    id: 'machining-tolerances',
    title: 'Standard Machining Tolerances',
    category: 'Manufacturing',
    description: 'General guidelines for achievable tolerances in standard machining processes.',
    standardRef: 'ISO 2768',
    content: `
      **ISO 2768-1 (General Tolerances):**
      Defines general tolerances for linear and angular dimensions without individual tolerance indications.
      
      - **Fine (f):** Precision machining (CNC grinding, fine turning).
      - **Medium (m):** Standard machining (Milling, turning).
      - **Coarse (c):** Rough machining, casting.
      - **Very Coarse (v):** Sand casting, flame cutting.
      
      **Rule of Thumb:**
      Tighter tolerances cost exponentially more. Only specify tight tolerances where functionally necessary (e.g., bearing fits).
    `,
    blueprintType: 'generic',
    relatedTopics: ['surface-finish', 'iso-14405-modifiers', 'dfma-intro', 'fits-and-limits']
  },
  {
    id: 'injection-molding-dfm',
    title: 'Injection Molding DFM',
    category: 'DFMA',
    description: 'Design guidelines for plastic injection molded parts to ensure moldability and quality.',
    standardRef: 'Industry Standard',
    content: `
      **Wall Thickness:**
      - Maintain uniform wall thickness to prevent sink marks and warping.
      - Recommended range: 1.5mm - 3.0mm for most thermoplastics.
      
      **Draft Angles:**
      - Essential for ejecting the part from the mold.
      - Minimum 0.5° for vertical walls.
      - 1° - 2° is standard.
      - Add 1° for every 0.025mm of texture depth.
      
      **Ribs:**
      - Used for stiffness.
      - Thickness should be 50-60% of the main wall thickness to avoid sink marks.
    `,
    blueprintType: 'injection-molding',
    relatedTopics: ['dfma-intro', 'surface-finish']
  },
  {
    id: 'sheet-metal-dfm',
    title: 'Sheet Metal DFM',
    category: 'DFMA',
    description: 'Design rules for sheet metal fabrication including bending, punching, and welding.',
    standardRef: 'Industry Standard',
    content: `
      **Bend Radius:**
      - Minimum bend radius depends on material thickness and type.
      - Generally, Min Radius = Material Thickness (1T).
      
      **Hole Placement:**
      - Keep holes at least 2T away from bend lines to prevent distortion.
      
      **Relief Cuts:**
      - Corner reliefs are necessary to prevent tearing when bending flanges.
    `,
    blueprintType: 'sheet-metal',
    relatedTopics: ['dfma-intro', 'machining-tolerances']
  },
  {
    id: 'surface-finish',
    title: 'Surface Finish Symbols',
    category: 'Manufacturing',
    description: 'Understanding surface texture symbols and Ra values.',
    standardRef: 'ASME Y14.36M',
    symbol: '√',
    content: `
      **Ra (Average Roughness):**
      The arithmetic average of the absolute values of the profile height deviations from the mean line.
      
      **Common Values (µm):**
      - **25:** Flame cut
      - **12.5:** Sawing, drilling
      - **6.3:** Milling, turning (rough)
      - **3.2:** Milling, turning (finish)
      - **1.6:** Grinding
      - **0.8:** Fine grinding, lapping
      
      **Symbol Structure:**
      The checkmark symbol indicates the surface requirement. Numbers above indicate the maximum roughness.
    `,
    blueprintType: 'surface-finish',
    relatedTopics: ['machining-tolerances', 'flatness']
  },
  {
    id: 'iso-14405-modifiers',
    title: 'ISO 14405 Linear Size Modifiers',
    category: 'Standards',
    description: 'Understanding ISO 14405-1 modifiers for linear size (LP, LS, GG, GX, etc.) and their impact on inspection.',
    standardRef: 'ISO 14405-1:2016',
    symbol: 'Ⓘ',
    content: `
      ISO 14405-1 establishes the default specification operator for linear size and provides a set of modifiers to define the size of a feature of size (cylinder, two parallel opposite planes, etc.) unambiguously.

      ### Common Modifiers

      **Local Size Modifiers:**
      - **(LP) Two-point size:** The distance between two opposite points on the feature. This is often the default inspection method (e.g., using calipers or a micrometer).
      - **(LS) Local size:** A general term for size at a specific cross-section.

      **Global Size Modifiers (Association Criteria):**
      These modifiers define how the ideal feature is fitted to the real extracted surface.
      
      - **(GG) Least-squares association:** The size of the perfect feature fitted to the extracted data such that the sum of the squares of the deviations is minimized (Gaussian). Used for average size.
      - **(GX) Maximum inscribed:** The size of the largest perfect feature that can fit *inside* the real hole. Useful for assembly (mating shaft).
      - **(GN) Minimum circumscribed:** The size of the smallest perfect feature that can fit *outside* the real shaft. Useful for assembly (mating hole).
      
      **Calculated Size Modifiers:**
      - **(CC) Circumference diameter:** The diameter calculated from the measured circumference (e.g., using a Pi tape).
      - **(CA) Area diameter:** The diameter calculated from the measured cross-sectional area.
      
      **Envelope Requirement:**
      - **(E):** The Envelope Requirement (Taylor Principle). It states that the feature must not violate the perfect form boundary at Maximum Material Condition (MMC). In ASME Y14.5, this is Rule #1 (default), but in ISO, it must be specified with the (E) symbol unless the drawing invokes a standard that makes it default.

      ### Why use them?
      Ambiguity in "Diameter 10 +/- 0.1" can lead to measurement disputes. 
      - A micrometer measures **(LP)**.
      - A coordinate measuring machine (CMM) might calculate **(GG)** by default.
      - A functional gauge checks **(E)** or **(GX)**.
      
      Specifying these modifiers ensures the inspection method matches the functional requirement.
    `,
    blueprintType: 'modifiers',
    relatedTopics: ['position', 'machining-tolerances', 'metrology-cmm']
  },
  {
    id: 'fits-and-limits',
    title: 'Engineering Fits (ISO 286)',
    category: 'Fits & Limits',
    description: 'System of limits and fits for mating parts, defining clearance, transition, and interference fits.',
    standardRef: 'ISO 286-1 / ANSI B4.1',
    symbol: 'H7/g6',
    content: `
      Engineering fits define the relationship between two mating parts, typically a hole and a shaft.
      
      **Types of Fits:**
      1. **Clearance Fit:** The shaft is always smaller than the hole. There is always a gap. Used for sliding or rotating parts.
      2. **Transition Fit:** The shaft may be larger or smaller than the hole. Can result in either clearance or interference. Used for accurate location where disassembly is possible.
      3. **Interference Fit (Press Fit):** The shaft is always larger than the hole. Requires force or thermal expansion to assemble. Used for permanent assembly.
      
      **Hole Basis System (Most Common):**
      The hole diameter is kept constant (e.g., H7), and the shaft diameter is varied to achieve the desired fit.
      - **H7/g6:** Precision sliding fit.
      - **H7/k6:** Transition fit (locating).
      - **H7/p6:** Interference fit (light press).
    `,
    blueprintType: 'fits',
    relatedTopics: ['machining-tolerances', 'position']
  },
  {
    id: 'metrology-cmm',
    title: 'Coordinate Measuring Machines (CMM)',
    category: 'Metrology',
    description: 'Principles of CMM inspection, probe compensation, and sampling strategies for verifying complex geometries.',
    standardRef: 'ISO 10360',
    content: `
      A Coordinate Measuring Machine (CMM) is a device that measures the geometry of physical objects by sensing discrete points on the surface of the object with a probe.
      
      **Key Concepts:**
      - **Probe Compensation:** Correcting for the radius of the stylus tip. The machine records the center of the stylus, but the surface is one radius away.
      - **Alignment (3-2-1 Rule):**
        1. **Plane (3 points):** Establishes the primary datum (levels the part).
        2. **Line (2 points):** Establishes the secondary datum (rotates the part).
        3. **Point (1 point):** Establishes the tertiary datum (sets the origin).
      
      **Sampling Strategy:**
      The number and distribution of points affect accuracy.
      - **Discrete Pointing:** Touching individual points. Slower but often more accurate for simple features.
      - **Scanning:** Dragging the probe across the surface. Collects high-density data (thousands of points) for form evaluation (flatness, profile).
    `,
    blueprintType: 'metrology',
    relatedTopics: ['iso-14405-modifiers', 'position', 'profile']
  },
  {
    id: 'welding-symbols',
    title: 'Welding Symbols',
    category: 'Manufacturing',
    description: 'Standard symbols for specifying weld type, size, length, and other processing information.',
    standardRef: 'AWS A2.4 / ISO 2553',
    symbol: '⋀',
    content: `
      Welding symbols provide a shorthand way to convey complete welding information on engineering drawings.
      
      **Basic Structure:**
      - **Reference Line:** Horizontal line where information is placed.
      - **Arrow:** Points to the joint to be welded.
      - **Tail:** Used for additional references (process, spec).
      
      **Arrow Side vs. Other Side:**
      - Symbols **below** the reference line apply to the **arrow side**.
      - Symbols **above** the reference line apply to the **other side**.
      
      **Common Symbols:**
      - **Fillet Weld:** Triangular symbol.
      - **Groove Welds:** V, U, J, Bevel symbols.
      - **Field Weld:** Flag symbol (indicates welding happens at the installation site).
      - **Weld All Around:** Circle at the junction of the arrow and reference line.
    `,
    blueprintType: 'welding',
    relatedTopics: ['sheet-metal-dfm']
  },
  {
    id: 'thread-dimensioning',
    title: 'Screw Thread Representation',
    category: 'Manufacturing',
    description: 'Designating metric and unified screw threads on engineering drawings.',
    standardRef: 'ISO 965 / ASME B1.1',
    content: `
      **Metric Threads (ISO):**
      Format: **M[Diameter] x [Pitch] - [Tolerance Class]**
      - *Example:* **M10 x 1.5 - 6g**
      - **M:** Metric thread profile.
      - **10:** Nominal diameter (mm).
      - **1.5:** Pitch (mm). (Coarse pitch is often omitted, e.g., M10).
      - **6g:** Tolerance class (6 = grade, g = position). 'g' is for external threads (bolts), 'H' is for internal threads (nuts).
      
      **Unified Threads (ASME):**
      Format: **[Diameter] - [Threads Per Inch] [Form] - [Class]**
      - *Example:* **1/4 - 20 UNC - 2A**
      - **1/4:** Nominal diameter (inch).
      - **20:** Threads per inch (TPI).
      - **UNC:** Unified National Coarse (UNF = Fine).
      - **2A:** Class of fit (1 = loose, 2 = standard, 3 = tight). 'A' = external, 'B' = internal.
    `,
    blueprintType: 'thread',
    relatedTopics: ['fits-and-limits', 'machining-tolerances']
  },
  // --- Fundamentals & Rules ---
  {
    id: 'rule-1',
    title: 'Rule #1 (Envelope Principle)',
    category: 'Fundamentals',
    description: 'The Envelope Principle states that the size tolerance of a feature controls its form.',
    standardRef: 'ASME Y14.5-2018, Section 5.8.1',
    content: `
      **Definition:**
      Rule #1 (Taylor Principle) states that where only a tolerance of size is specified, the limits of size of an individual feature prescribe the extent to which variations in its form—as well as in its size—are allowed.
      
      **Key Implications:**
      - **Perfect Form at MMC:** When a feature is at its Maximum Material Condition (MMC), it must have perfect form (e.g., a pin at its largest diameter must be perfectly straight).
      - **No Form Control at LMC:** As the feature departs from MMC towards Least Material Condition (LMC), a form error equal to the amount of departure is permitted.
      
      **Exceptions:**
      - Stock materials (e.g., bar stock) often have form tolerances that exceed size tolerances.
      - Parts subject to free-state variation (flexible parts).
      - When the "Independency" symbol is applied.
    `,
    blueprintType: 'generic',
    relatedTopics: ['independency', 'straightness', 'flatness']
  },
  {
    id: 'independency',
    title: 'Independency Principle',
    category: 'Fundamentals',
    description: 'The principle that size and form are independent unless specified otherwise.',
    standardRef: 'ISO 8015 / ASME Y14.5-2018 (Option)',
    symbol: 'Ⓘ',
    content: `
      **ISO 8015 Default:**
      By default in ISO GPS standards, every dimensional and geometrical requirement is independent. Size does NOT control form. You must specify the Envelope requirement (E) if you want Rule #1 behavior.
      
      **ASME Y14.5 Option:**
      In ASME, Rule #1 is default. However, you can invoke the Independency Principle by placing the Ⓘ symbol next to the feature of size dimension. This allows form error to exceed the size tolerance.
      
      **Design Intent:**
      Use when the function of the feature (e.g., strength) depends on size, but the assembly (e.g., fit) is controlled by a separate geometric tolerance, or when form is not critical.
    `,
    blueprintType: 'modifiers',
    relatedTopics: ['rule-1', 'iso-14405-modifiers']
  },
  {
    id: 'drf-3-2-1',
    title: 'Datum Reference Frame (3-2-1 Rule)',
    category: 'Fundamentals',
    description: 'The 3-2-1 rule is a method for locking all 6 degrees of freedom of a part in space.',
    standardRef: 'ASME Y14.5-2018, Section 4',
    content: `
      **Degrees of Freedom:**
      A rigid body has 6 degrees of freedom: 3 translations (X, Y, Z) and 3 rotations (u, v, w).
      
      **The 3-2-1 Rule:**
      1.  **Primary Datum (3 points):** Establishes a plane. Constrains 3 degrees of freedom (1 translation, 2 rotations).
      2.  **Secondary Datum (2 points):** Establishes a line. Constrains 2 degrees of freedom (1 translation, 1 rotation).
      3.  **Tertiary Datum (1 point):** Establishes a point. Constrains 1 degree of freedom (1 translation).
      
      **Datum Feature vs. Simulated Datum:**
      - **Datum Feature:** The actual physical surface on the part (imperfect).
      - **Simulated Datum:** The theoretical perfect plane/axis derived from the inspection equipment (e.g., surface plate, collet) contacting the datum feature.
    `,
    blueprintType: 'datum',
    relatedTopics: ['position', 'profile-surface', 'metrology-cmm']
  },
  // --- Additional Symbols ---
  {
    id: 'cylindricity',
    title: 'Cylindricity',
    category: 'GD&T',
    description: 'Cylindricity describes a condition of a surface of revolution in which all points of the surface are equidistant from a common axis.',
    standardRef: 'ASME Y14.5-2018, Section 5.4.4',
    symbol: '⌭',
    content: `
      **Definition:**
      Cylindricity is a form control that specifies a tolerance zone bounded by two concentric cylinders within which the surface must lie.
      
      **Key Characteristics:**
      - Controls circularity, straightness, and taper simultaneously.
      - Does NOT require a datum.
      - Cannot use MMC/LMC modifiers.
      
      **Inspection:**
      Difficult to measure. Requires a CMM or a rotating spindle with a height gauge (spiral trace).
    `,
    blueprintType: 'cylindricity',
    relatedTopics: ['circularity', 'straightness', 'total-runout']
  },
  {
    id: 'angularity',
    title: 'Angularity',
    category: 'GD&T',
    description: 'Angularity is the condition of a surface, center plane, or axis at a specified angle (other than 90°) from a datum plane or axis.',
    standardRef: 'ASME Y14.5-2018, Section 6.3.2',
    symbol: '∠',
    content: `
      **Definition:**
      Angularity controls the orientation of a feature to a datum at a basic angle.
      
      **Tolerance Zone:**
      Two parallel planes (for a surface) or a cylinder (for an axis) inclined at the basic angle to the datum.
      
      **Design Intent:**
      Used for chamfers, angled mounting surfaces, or hydraulic ports.
    `,
    blueprintType: 'angularity',
    relatedTopics: ['perpendicularity', 'parallelism', 'profile-surface']
  },
  {
    id: 'profile-surface',
    title: 'Profile of a Surface',
    category: 'GD&T',
    description: 'Profile of a Surface controls the size, form, orientation, and location of a surface.',
    standardRef: 'ASME Y14.5-2018, Section 8',
    symbol: '⌓',
    content: `
      **Definition:**
      Profile of a surface describes a 3D tolerance zone around the true profile of a feature. It is the most powerful and versatile GD&T symbol.
      
      **Key Characteristics:**
      - Can control Form, Orientation, Location, and Size simultaneously.
      - Can be used with or without datums.
      - Tolerance zone is typically bilateral (equally disposed) but can be unilateral.
      
      **Design Intent:**
      Used for complex curves (airfoils), casting surfaces, and coplanar surfaces.
    `,
    blueprintType: 'profile',
    relatedTopics: ['profile-line', 'position', 'flatness']
  },
  {
    id: 'circular-runout',
    title: 'Circular Runout',
    category: 'GD&T',
    description: 'Circular Runout controls the circular elements of a surface as the part is rotated 360° about a datum axis.',
    standardRef: 'ASME Y14.5-2018, Section 9.4.1',
    symbol: '↗',
    content: `
      **Definition:**
      Controls the cumulative error of circularity and coaxiality (offset) at any specific cross-section.
      
      **Inspection:**
      Rotate the part on its datum axis and measure the variation with a dial indicator at a *single* fixed position. Repeat at multiple positions.
      
      **Design Intent:**
      Used for sealing surfaces, bearing seats, and rotating components where balance is critical.
    `,
    blueprintType: 'runout',
    relatedTopics: ['total-runout', 'circularity', 'concentricity']
  },
  {
    id: 'total-runout',
    title: 'Total Runout',
    category: 'GD&T',
    description: 'Total Runout controls the entire surface simultaneously as the part is rotated about a datum axis.',
    standardRef: 'ASME Y14.5-2018, Section 9.4.2',
    symbol: '⌰',
    content: `
      **Definition:**
      Controls the cumulative error of circularity, straightness, coaxiality, angularity, and taper.
      
      **Inspection:**
      Rotate the part on its datum axis while moving the dial indicator along the full length of the feature.
      
      **Design Intent:**
      Used for critical rotating shafts where dynamic balance and surface contact are paramount.
    `,
    blueprintType: 'runout',
    relatedTopics: ['circular-runout', 'cylindricity']
  },
  // --- Modifiers ---
  {
    id: 'material-modifiers',
    title: 'Material Modifiers (MMC, LMC, RFS)',
    category: 'Fundamentals',
    description: 'Understanding Maximum Material Condition (MMC), Least Material Condition (LMC), and Regardless of Feature Size (RFS).',
    standardRef: 'ASME Y14.5-2018, Section 2',
    symbol: 'Ⓜ',
    content: `
      **RFS (Regardless of Feature Size):**
      - The default condition in ASME Y14.5 (since 1994).
      - The geometric tolerance applies regardless of the actual size of the feature.
      - No bonus tolerance is allowed.
      
      **MMC (Maximum Material Condition) Ⓜ:**
      - The condition where the feature contains the maximum amount of material (smallest hole, largest pin).
      - **Bonus Tolerance:** As the feature size departs from MMC, the geometric tolerance increases by the amount of departure.
      - **Design Intent:** Used for clearance fits (assembly). If the hole is larger, its position can be off by more and the pin will still fit.
      
      **LMC (Least Material Condition) Ⓛ:**
      - The condition where the feature contains the least amount of material (largest hole, smallest pin).
      - **Design Intent:** Used for wall thickness preservation or edge distance.
    `,
    blueprintType: 'modifiers',
    relatedTopics: ['position', 'fits-and-limits']
  },
  // --- DFMA & Stackups ---
  {
    id: 'cnc-dfm',
    title: 'CNC Machining DFM',
    category: 'DFMA',
    description: 'Design guidelines for CNC milled and turned parts to reduce cost and improve quality.',
    standardRef: 'Industry Best Practice',
    content: `
      **Internal Radii:**
      - Avoid sharp internal corners. End mills are round.
      - Radius should be slightly larger than the standard tool radius to allow for trochoidal milling (prevent chatter).
      - *Rule:* Corner Radius > 1/3 x Depth of Cut.
      
      **Hole Depth:**
      - Deep holes drift and break drills.
      - Keep depth < 5x Diameter if possible.
      - >10x Diameter requires gun drilling (expensive).
      
      **Tolerances:**
      - Standard: +/- 0.1mm (0.005").
      - Precision: +/- 0.025mm (0.001").
      - High Precision: +/- 0.005mm (0.0002") -> Requires grinding/lapping.
    `,
    blueprintType: 'cnc-machining',
    relatedTopics: ['machining-tolerances', 'surface-finish']
  },
  {
    id: 'stackup-basics',
    title: 'Tolerance Stackup Basics',
    category: 'Stackups',
    description: 'Introduction to 1D tolerance stackup analysis: Worst Case vs. RSS.',
    standardRef: 'ASME Y14.5-2018, Appendix B',
    content: `
      **Goal:** Determine the cumulative variation in an assembly gap or overall dimension.
      
      **1. Worst Case Analysis:**
      - Assumes all dimensions are at their limit simultaneously.
      - **Formula:** $T_{asm} = \sum T_i$
      - **Pros:** Guarantees 100% interchangeability.
      - **Cons:** Can result in overly tight (expensive) component tolerances.
      
      **2. RSS (Root Sum Squares):**
      - Assumes variations are statistically distributed (Normal distribution).
      - **Formula:** $T_{asm} = \sqrt{\sum T_i^2}$
      - **Pros:** Allows looser component tolerances.
      - **Cons:** Small risk of non-assembly (typically < 0.3% if process is centered).
      
      **Procedure:**
      1. Identify the gap (A-B).
      2. Create the loop diagram (vector chain).
      3. Determine mean values and sensitivities.
      4. Calculate.
    `,
    blueprintType: 'stackup',
    relatedTopics: ['fits-and-limits', 'position']
  },
  {
    id: 'concentricity',
    title: 'Concentricity',
    category: 'GD&T',
    description: 'Concentricity controls the median points of a feature of size relative to a datum axis.',
    standardRef: 'ASME Y14.5-2009 (Removed in 2018)',
    symbol: '◎',
    content: `
      **Definition:**
      Concentricity is a location control that requires the median points of all diametrically opposed elements of the feature of size to fall within a cylindrical tolerance zone centered on the datum axis.
      
      **Status:**
      **Removed in ASME Y14.5-2018.** It has been replaced by Position or Profile because it is difficult to inspect and often misunderstood.
      
      **Inspection:**
      Requires finding the median points of cross-sections, which is mathematically complex and requires a CMM or precision spindle.
      
      **Pro-Tip:**
      Do not use Concentricity. Use **Position** or **Runout** instead.
    `,
    blueprintType: 'concentricity',
    relatedTopics: ['position', 'circular-runout']
  },
  {
    id: 'symmetry',
    title: 'Symmetry',
    category: 'GD&T',
    description: 'Symmetry controls the median points of a feature of size relative to a datum plane.',
    standardRef: 'ASME Y14.5-2009 (Removed in 2018)',
    symbol: '⌯',
    content: `
      **Definition:**
      Symmetry is a location control that requires the median points of all opposed elements of the feature of size to fall within a tolerance zone centered on the datum plane.
      
      **Status:**
      **Removed in ASME Y14.5-2018.** It has been replaced by Position or Profile.
      
      **Inspection:**
      Similar to concentricity, it requires finding median points, which is difficult.
      
      **Pro-Tip:**
      Do not use Symmetry. Use **Position** instead.
    `,
    blueprintType: 'symmetry',
    relatedTopics: ['position', 'profile-surface']
  },
  {
    id: 'profile-line',
    title: 'Profile of a Line',
    category: 'GD&T',
    description: 'Profile of a Line controls the form, orientation, location, and size of a 2D cross-section of a surface.',
    standardRef: 'ASME Y14.5-2018, Section 8',
    symbol: '⌒',
    content: `
      **Definition:**
      Profile of a Line describes a 2D tolerance zone around the true profile of a feature at each cross-section.
      
      **Key Characteristics:**
      - Controls the surface element at individual cross-sections, not the entire surface simultaneously.
      - Tolerance zone is two parallel curves.
      
      **Design Intent:**
      Used for extrusions or when the cross-sectional shape is critical but the longitudinal form is not (e.g., a dashboard trim that must match a template but can bow along its length).
    `,
    blueprintType: 'profile-line',
    relatedTopics: ['profile-surface', 'flatness']
  }
];
