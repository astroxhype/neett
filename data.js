(function () {
  function ch(id, code, cls, yieldLevel, type, title, note, before, after, role, focus) {
    return { id, code, class: cls, yield: yieldLevel, type, title, note, before, after, role, focus };
  }

  const physicsFloors = [
    {
      level: '00',
      name: 'Measurement and motion base',
      chapters: [
        ch('physics-units-measurements', 'PHY-XI-01', '11', 'high', 'conceptual', 'Units and Measurements', 'Units, dimensions, errors, significant figures, and measurement discipline.', ['None'], ['Motion in a Straight Line', 'Vectors', 'Numerical physics'], ['Dimensional checks', 'Error control'], ['SI units', 'Dimensions', 'Significant figures', 'Error analysis', 'Dimensional formulae']),
        ch('physics-motion-straight', 'PHY-XI-02', '11', 'high', 'conceptual', 'Motion in a Straight Line', 'Position, velocity, acceleration, graphs, and uniformly accelerated motion.', ['Units and Measurements'], ['Motion in a Plane', 'Laws of Motion'], ['Graph reading', 'Kinematics base'], ['Displacement', 'Velocity-time graphs', 'Acceleration', 'Equations of motion', 'Relative motion']),
        ch('physics-motion-plane', 'PHY-XI-03', '11', 'high', 'conceptual', 'Motion in a Plane', 'Vectors, projectile motion, circular motion, and two-dimensional kinematics.', ['Motion in a Straight Line', 'Trigonometry'], ['Laws of Motion', 'Rotational Motion', 'Electric field vectors'], ['Vector base', 'Projectile logic'], ['Vector algebra', 'Projectile motion', 'Uniform circular motion', 'Relative velocity', 'Resolution of vectors'])
      ]
    },
    {
      level: '01',
      name: 'Force and energy engine',
      chapters: [
        ch('physics-laws-motion', 'PHY-XI-04', '11', 'high', 'conceptual', 'Laws of Motion', 'Newton laws, friction, free-body diagrams, impulse, and equilibrium.', ['Vectors', 'Kinematics'], ['Work, Energy and Power', 'Rotational Motion'], ['FBD mastery', 'Force logic'], ['Newton laws', 'Friction', 'Circular motion force', 'Impulse', 'Equilibrium']),
        ch('physics-work-energy-power', 'PHY-XI-05', '11', 'high', 'conceptual', 'Work, Energy and Power', 'Work-energy theorem, kinetic energy, potential energy, power, and collisions.', ['Laws of Motion'], ['Rotational Motion', 'Gravitation', 'Electrostatic potential'], ['Energy method', 'Collision base'], ['Work-energy theorem', 'Conservative force', 'Potential energy', 'Power', 'Collisions']),
        ch('physics-rotational-motion', 'PHY-XI-06', '11', 'high', 'conceptual', 'System of Particles and Rotational Motion', 'Centre of mass, torque, angular momentum, moment of inertia, and rolling.', ['Laws of Motion', 'Work, Energy and Power'], ['Gravitation', 'Magnetism torque'], ['Torque logic', 'Rigid body base'], ['Centre of mass', 'Torque', 'Angular momentum', 'Moment of inertia', 'Rolling motion'])
      ]
    },
    {
      level: '02',
      name: 'Gravitation and matter',
      chapters: [
        ch('physics-gravitation', 'PHY-XI-07', '11', 'high', 'conceptual', 'Gravitation', 'Universal gravitation, field, potential, satellites, and planetary motion.', ['Rotational Motion', 'Work and Energy'], ['Electrostatics', 'Orbital motion'], ['Field analogy', 'Satellite numericals'], ['Gravitational field', 'Potential energy', 'Escape speed', 'Orbital speed', 'Kepler laws']),
        ch('physics-solids', 'PHY-XI-08', '11', 'medium', 'conceptual', 'Mechanical Properties of Solids', 'Elasticity, stress, strain, Young modulus, and material behavior.', ['Laws of Motion'], ['Fluids', 'Wave speed in solids'], ['Elasticity formulas', 'Graph interpretation'], ['Stress', 'Strain', 'Hooke law', 'Elastic moduli', 'Energy density']),
        ch('physics-fluids', 'PHY-XI-09', '11', 'high', 'conceptual', 'Mechanical Properties of Fluids', 'Pressure, buoyancy, Bernoulli principle, viscosity, and surface tension.', ['Laws of Motion', 'Work and Energy'], ['Thermal Properties', 'Fluid applications'], ['Bernoulli traps', 'Pressure logic'], ['Pascal law', 'Buoyancy', 'Continuity equation', 'Bernoulli theorem', 'Surface tension'])
      ]
    },
    {
      level: '03',
      name: 'Heat and oscillations',
      chapters: [
        ch('physics-thermal-properties', 'PHY-XI-10', '11', 'medium', 'memory', 'Thermal Properties of Matter', 'Temperature, expansion, calorimetry, heat transfer, and thermal behavior.', ['Fluids', 'Basic measurement'], ['Thermodynamics', 'Kinetic Theory'], ['Formula memory', 'Heat transfer'], ['Thermal expansion', 'Calorimetry', 'Latent heat', 'Conduction', 'Newton cooling']),
        ch('physics-thermodynamics', 'PHY-XI-11', '11', 'high', 'conceptual', 'Thermodynamics', 'Thermodynamic processes, first law, heat engines, refrigerators, and entropy ideas.', ['Thermal Properties', 'Work and Energy'], ['Kinetic Theory', 'Chemistry thermodynamics'], ['Process graphs', 'First law logic'], ['Internal energy', 'First law', 'Isothermal process', 'Adiabatic process', 'Heat engine']),
        ch('physics-kinetic-theory', 'PHY-XI-12', '11', 'medium', 'conceptual', 'Kinetic Theory', 'Gas molecules, pressure, temperature, degrees of freedom, and kinetic interpretation.', ['Thermodynamics'], ['Thermal revision'], ['Gas model', 'RMS speed'], ['Kinetic model', 'Pressure derivation', 'RMS speed', 'Degrees of freedom', 'Equipartition']),
        ch('physics-oscillations', 'PHY-XI-13', '11', 'high', 'conceptual', 'Oscillations', 'Simple harmonic motion, energy, pendulum, spring system, and damping basics.', ['Kinematics', 'Work and Energy'], ['Waves', 'AC circuits'], ['SHM base', 'Graph logic'], ['SHM equation', 'Phase', 'Energy in SHM', 'Spring oscillator', 'Simple pendulum']),
        ch('physics-waves', 'PHY-XI-14', '11', 'high', 'conceptual', 'Waves', 'Wave motion, sound, superposition, standing waves, beats, and Doppler effect.', ['Oscillations'], ['Wave Optics', 'Electromagnetic waves'], ['Wave equation', 'Sound traps'], ['Transverse waves', 'Longitudinal waves', 'Superposition', 'Standing waves', 'Doppler effect'])
      ]
    },
    {
      level: '04',
      name: 'Electric field and circuits',
      chapters: [
        ch('physics-electric-charges', 'PHY-XII-01', '12', 'high', 'conceptual', 'Electric Charges and Fields', 'Charge, Coulomb law, electric field, dipole, flux, and Gauss law.', ['Vectors', 'Gravitation field idea'], ['Electrostatic Potential', 'Capacitance'], ['Field diagrams', 'Gauss law'], ['Coulomb law', 'Electric field', 'Dipole', 'Flux', 'Gauss law']),
        ch('physics-electrostatic-potential', 'PHY-XII-02', '12', 'high', 'conceptual', 'Electrostatic Potential and Capacitance', 'Potential, potential energy, equipotential surfaces, capacitors, and energy storage.', ['Electric Charges and Fields', 'Work and Energy'], ['Current Electricity', 'Modern circuits'], ['Potential logic', 'Capacitor circuits'], ['Potential', 'Equipotential surface', 'Capacitance', 'Series capacitors', 'Energy stored']),
        ch('physics-current-electricity', 'PHY-XII-03', '12', 'high', 'conceptual', 'Current Electricity', 'Current, resistance, Ohm law, Kirchhoff rules, cells, and meter bridge.', ['Electrostatic Potential'], ['Magnetism', 'Electronics'], ['Circuit mastery', 'Numerical base'], ['Ohm law', 'Resistivity', 'Kirchhoff rules', 'Cells', 'Meter bridge'])
      ]
    },
    {
      level: '05',
      name: 'Magnetism and induction',
      chapters: [
        ch('physics-moving-charges', 'PHY-XII-04', '12', 'high', 'conceptual', 'Moving Charges and Magnetism', 'Magnetic force, Biot-Savart law, Ampere law, torque, and moving coil galvanometer.', ['Current Electricity', 'Vectors'], ['Magnetism and Matter', 'EMI'], ['Magnetic force', 'Field calculations'], ['Lorentz force', 'Biot-Savart law', 'Ampere law', 'Solenoid', 'Galvanometer']),
        ch('physics-magnetism-matter', 'PHY-XII-05', '12', 'medium', 'memory', 'Magnetism and Matter', 'Bar magnets, earth magnetism, magnetic materials, and magnetic properties.', ['Moving Charges and Magnetism'], ['Electromagnetic Induction'], ['Magnetic materials', 'Earth field'], ['Bar magnet', 'Dipole moment', 'Earth magnetism', 'Para-dia-ferro', 'Hysteresis']),
        ch('physics-emi', 'PHY-XII-06', '12', 'high', 'conceptual', 'Electromagnetic Induction', 'Faraday law, Lenz law, motional emf, eddy currents, and inductance.', ['Magnetism', 'Flux idea'], ['Alternating Current'], ['Flux change', 'Lenz direction'], ['Faraday law', 'Lenz law', 'Motional emf', 'Eddy current', 'Inductance']),
        ch('physics-ac', 'PHY-XII-07', '12', 'high', 'conceptual', 'Alternating Current', 'AC voltage, reactance, impedance, resonance, power factor, and transformer.', ['Oscillations', 'EMI'], ['Electromagnetic Waves'], ['Phasors', 'Resonance'], ['Reactance', 'Impedance', 'LCR circuit', 'Power factor', 'Transformer']),
        ch('physics-em-waves', 'PHY-XII-08', '12', 'medium', 'memory', 'Electromagnetic Waves', 'Displacement current, EM spectrum, wave nature, and applications.', ['AC', 'Electric and magnetic fields'], ['Optics', 'Modern Physics'], ['Spectrum memory', 'Field relation'], ['Displacement current', 'EM wave nature', 'Spectrum order', 'Applications'])
      ]
    },
    {
      level: '06',
      name: 'Optics and modern physics',
      chapters: [
        ch('physics-ray-optics', 'PHY-XII-09', '12', 'high', 'conceptual', 'Ray Optics and Optical Instruments', 'Reflection, refraction, lenses, prisms, optical instruments, and image formation.', ['Waves basics', 'Geometry'], ['Wave Optics'], ['Diagram accuracy', 'Sign convention'], ['Mirrors', 'Refraction', 'Lens formula', 'Prism', 'Microscope and telescope']),
        ch('physics-wave-optics', 'PHY-XII-10', '12', 'high', 'conceptual', 'Wave Optics', 'Huygens principle, interference, diffraction, polarisation, and Young experiment.', ['Waves', 'Ray Optics'], ['Dual Nature'], ['YDSE logic', 'Path difference'], ['Huygens principle', 'Interference', 'YDSE', 'Diffraction', 'Polarisation']),
        ch('physics-dual-nature', 'PHY-XII-11', '12', 'high', 'conceptual', 'Dual Nature of Radiation and Matter', 'Photoelectric effect, photons, de Broglie wavelength, and matter waves.', ['Wave Optics', 'Energy quantisation'], ['Atoms', 'Semiconductors'], ['Graph traps', 'Quantum start'], ['Photoelectric effect', 'Einstein equation', 'Photon', 'de Broglie wavelength']),
        ch('physics-atoms', 'PHY-XII-12', '12', 'medium', 'conceptual', 'Atoms', 'Bohr model, spectra, energy levels, and hydrogen atom logic.', ['Dual Nature'], ['Nuclei'], ['Spectra logic', 'Bohr formulas'], ['Alpha scattering', 'Bohr postulates', 'Energy levels', 'Hydrogen spectrum']),
        ch('physics-nuclei', 'PHY-XII-13', '12', 'high', 'conceptual', 'Nuclei', 'Nuclear size, binding energy, radioactivity, decay law, fission, and fusion.', ['Atoms', 'Exponential decay'], ['Semiconductors', 'Modern physics revision'], ['Decay graphs', 'Binding energy'], ['Mass defect', 'Binding energy', 'Radioactivity', 'Half-life', 'Fission and fusion']),
        ch('physics-semiconductors', 'PHY-XII-14', '12', 'high', 'conceptual', 'Semiconductor Electronics', 'Semiconductor materials, p-n junction diode, rectifier, zener diode, and logic gates.', ['Current Electricity', 'Modern Physics'], ['Final electronics revision'], ['Device logic', 'Circuit symbols'], ['Intrinsic semiconductor', 'p-n junction', 'Rectifier', 'Zener diode', 'Logic gates'])
      ]
    }
  ];

  const chemistryFloors = [
    {
      level: '00',
      name: 'Mole and atomic base',
      chapters: [
        ch('chem-basic-concepts', 'CHEM-XI-01', '11', 'high', 'conceptual', 'Some Basic Concepts of Chemistry', 'Mole concept, stoichiometry, concentration terms, and chemical calculation language.', ['None'], ['Structure of Atom', 'Thermodynamics', 'Equilibrium'], ['Mole base', 'Numerical grammar'], ['Mole concept', 'Stoichiometry', 'Limiting reagent', 'Concentration terms', 'Empirical formula']),
        ch('chem-structure-atom', 'CHEM-XI-02', '11', 'high', 'conceptual', 'Structure of Atom', 'Subatomic particles, quantum model, electronic configuration, and atomic spectra.', ['Basic Concepts'], ['Periodicity', 'Chemical Bonding'], ['Quantum base', 'Configuration logic'], ['Bohr model', 'Quantum numbers', 'Orbitals', 'Electronic configuration', 'Spectrum']),
        ch('chem-periodicity', 'CHEM-XI-03', '11', 'high', 'conceptual', 'Classification of Elements and Periodicity', 'Periodic table, periodic law, atomic properties, and trend logic.', ['Structure of Atom'], ['Chemical Bonding', 'Inorganic Chemistry'], ['Trend logic', 'Periodic memory'], ['Periodic law', 'Atomic radius', 'Ionisation enthalpy', 'Electron gain enthalpy', 'Electronegativity'])
      ]
    },
    {
      level: '01',
      name: 'Bonding and equilibrium core',
      chapters: [
        ch('chem-bonding', 'CHEM-XI-04', '11', 'high', 'conceptual', 'Chemical Bonding and Molecular Structure', 'Ionic and covalent bonds, VSEPR, hybridisation, resonance, and molecular orbitals.', ['Structure of Atom', 'Periodicity'], ['Organic Chemistry', 'Coordination Compounds'], ['Shape logic', 'Bonding base'], ['VSEPR', 'Hybridisation', 'Resonance', 'MOT', 'Hydrogen bonding']),
        ch('chem-thermodynamics', 'CHEM-XI-05', '11', 'high', 'conceptual', 'Thermodynamics', 'System, work, heat, enthalpy, entropy, Gibbs energy, and spontaneity.', ['Basic Concepts', 'Physics heat'], ['Equilibrium', 'Electrochemistry'], ['Energy logic', 'Sign convention'], ['Enthalpy', 'Hess law', 'Entropy', 'Gibbs energy', 'Spontaneity']),
        ch('chem-equilibrium', 'CHEM-XI-06', '11', 'high', 'conceptual', 'Equilibrium', 'Chemical and ionic equilibrium, acids, bases, buffers, Kp, Kc, and solubility product.', ['Thermodynamics', 'Mole Concept'], ['Electrochemistry', 'Organic reactions'], ['Ionic traps', 'Numerical base'], ['Kc and Kp', 'Le Chatelier principle', 'pH', 'Buffer', 'Ksp'])
      ]
    },
    {
      level: '02',
      name: 'Electron transfer and organic base',
      chapters: [
        ch('chem-redox', 'CHEM-XI-07', '11', 'high', 'conceptual', 'Redox Reactions', 'Oxidation number, electron transfer, balancing, and electrode process base.', ['Basic Concepts'], ['Electrochemistry'], ['Oxidation number', 'Balancing logic'], ['Oxidation number', 'Redox balancing', 'Disproportionation', 'Electrode process']),
        ch('chem-organic-basics', 'CHEM-XI-08', '11', 'high', 'conceptual', 'Organic Chemistry: Basic Principles and Techniques', 'IUPAC naming, isomerism, reaction mechanisms, purification, and analysis.', ['Bonding', 'Periodicity'], ['Hydrocarbons', 'Class 12 Organic'], ['Organic grammar', 'Mechanism base'], ['IUPAC', 'Isomerism', 'Inductive effect', 'Resonance effect', 'Purification']),
        ch('chem-hydrocarbons', 'CHEM-XI-09', '11', 'high', 'conceptual', 'Hydrocarbons', 'Alkanes, alkenes, alkynes, aromatic hydrocarbons, and reaction patterns.', ['Organic Basics'], ['Haloalkanes', 'Alcohols', 'Amines'], ['Reaction base', 'Aromatic logic'], ['Alkanes', 'Alkenes', 'Alkynes', 'Benzene', 'Electrophilic substitution'])
      ]
    },
    {
      level: '03',
      name: 'Physical chemistry applications',
      chapters: [
        ch('chem-solutions', 'CHEM-XII-01', '12', 'high', 'conceptual', 'Solutions', 'Concentration, colligative properties, abnormal molar mass, and solution behavior.', ['Mole Concept'], ['Electrochemistry', 'Chemical Kinetics'], ['Colligative logic', 'Numericals'], ['Molarity', 'Raoult law', 'Elevation in boiling point', 'Depression in freezing point', 'Osmotic pressure']),
        ch('chem-electrochemistry', 'CHEM-XII-02', '12', 'high', 'conceptual', 'Electrochemistry', 'Conductance, electrochemical cells, Nernst equation, batteries, and corrosion.', ['Redox', 'Equilibrium', 'Thermodynamics'], ['Chemical Kinetics'], ['Nernst mastery', 'Cell logic'], ['Galvanic cell', 'Nernst equation', 'Conductance', 'Kohlrausch law', 'Batteries']),
        ch('chem-kinetics', 'CHEM-XII-03', '12', 'high', 'conceptual', 'Chemical Kinetics', 'Rate laws, order, molecularity, integrated equations, half-life, and activation energy.', ['Mole Concept', 'Log graphs'], ['Physical chemistry revision'], ['Rate graph traps', 'Arrhenius logic'], ['Rate law', 'Order', 'Integrated rate law', 'Half-life', 'Arrhenius equation'])
      ]
    },
    {
      level: '04',
      name: 'Inorganic and coordination',
      chapters: [
        ch('chem-df-block', 'CHEM-XII-04', '12', 'high', 'memory', 'The d- and f-Block Elements', 'Transition elements, lanthanoids, actinoids, oxidation states, colours, and magnetic behavior.', ['Periodicity', 'Structure of Atom'], ['Coordination Compounds'], ['NCERT lines', 'Trend memory'], ['Transition elements', 'Oxidation states', 'Colour', 'Magnetic properties', 'Lanthanoids']),
        ch('chem-coordination', 'CHEM-XII-05', '12', 'high', 'conceptual', 'Coordination Compounds', 'Ligands, nomenclature, isomerism, bonding, crystal field theory, and applications.', ['Bonding', 'd-Block'], ['Biomolecules', 'Inorganic revision'], ['Nomenclature', 'CFT logic'], ['Ligands', 'Coordination number', 'Isomerism', 'Valence bond theory', 'Crystal field splitting'])
      ]
    },
    {
      level: '05',
      name: 'Organic functional groups',
      chapters: [
        ch('chem-haloalkanes', 'CHEM-XII-06', '12', 'high', 'conceptual', 'Haloalkanes and Haloarenes', 'Classification, preparation, substitution, elimination, and aryl halide behavior.', ['Hydrocarbons', 'Organic Basics'], ['Alcohols', 'Amines'], ['SN1/SN2 base', 'Reaction comparison'], ['C-X bond', 'SN1', 'SN2', 'Elimination', 'Haloarenes']),
        ch('chem-alcohols-phenols-ethers', 'CHEM-XII-07', '12', 'high', 'conceptual', 'Alcohols, Phenols and Ethers', 'Preparation, properties, acidity, named reactions, and ether cleavage.', ['Haloalkanes', 'Hydrocarbons'], ['Carbonyl Compounds', 'Biomolecules'], ['Functional group logic', 'Named reactions'], ['Alcohol preparation', 'Phenol acidity', 'Ether reactions', 'Lucas test', 'Kolbe reaction']),
        ch('chem-carbonyls', 'CHEM-XII-08', '12', 'high', 'conceptual', 'Aldehydes, Ketones and Carboxylic Acids', 'Carbonyl chemistry, nucleophilic addition, oxidation, reduction, and acid derivatives base.', ['Alcohols', 'Organic Basics'], ['Amines', 'Biomolecules'], ['Carbonyl mechanism', 'Test reactions'], ['Nucleophilic addition', 'Aldol', 'Cannizzaro', 'Carboxylic acids', 'Named tests']),
        ch('chem-amines', 'CHEM-XII-09', '12', 'high', 'conceptual', 'Amines', 'Preparation, basicity, reactions, diazonium salts, and aromatic amine chemistry.', ['Organic Basics', 'Haloalkanes'], ['Biomolecules', 'Organic revision'], ['Basicity logic', 'Diazonium'], ['Amine classification', 'Basicity', 'Preparation', 'Diazonium salts', 'Coupling reactions']),
        ch('chem-biomolecules', 'CHEM-XII-10', '12', 'medium', 'memory', 'Biomolecules', 'Carbohydrates, proteins, enzymes, vitamins, nucleic acids, and biological chemistry.', ['Organic functional groups'], ['Final applied chemistry'], ['NCERT memory', 'Biological links'], ['Carbohydrates', 'Proteins', 'Enzymes', 'Vitamins', 'Nucleic acids'])
      ]
    }
  ];

  function ids(floors) {
    return floors.flatMap(floor => floor.chapters.map(chapter => chapter.id));
  }

  function attachTopics(deck, practiceLabel) {
    deck.chapterTopics = {};
    deck.floors.forEach(floor => {
      floor.chapters.forEach(chapter => {
        deck.chapterTopics[chapter.id] = [
          { title: 'Core checklist', subs: chapter.focus || chapter.role },
          { title: 'Foundation links', subs: chapter.before && chapter.before.length ? chapter.before : ['None'] },
          { title: 'Unlocks next', subs: chapter.after && chapter.after.length ? chapter.after : ['Final revision'] },
          { title: practiceLabel, subs: ['NCERT examples', 'Formula or reaction sheet', 'PYQs', 'Mistake log'] }
        ];
      });
    });
    return deck;
  }

  const physicsIds = ids(physicsFloors);
  const chemistryIds = ids(chemistryFloors);

  window.studyDecks = {
    physics: attachTopics({
      key: 'physics',
      label: 'Physics',
      code: 'PHY',
      startPathIds: ['physics-units-measurements', 'physics-motion-straight', 'physics-motion-plane', 'physics-laws-motion', 'physics-work-energy-power', 'physics-electric-charges'],
      floors: physicsFloors,
      routes: {
        all: { code: '00', label: 'Full physics', deck: 'All units', summary: 'Every Physics chapter is visible from measurement to modern electronics.', ids: physicsIds },
        route1: { code: '01', label: 'Mechanics spine', deck: 'Motion to matter', summary: 'Measurement, kinematics, force, work, rotation, gravitation, fluids, heat, oscillations, and waves.', ids: ['physics-units-measurements', 'physics-motion-straight', 'physics-motion-plane', 'physics-laws-motion', 'physics-work-energy-power', 'physics-rotational-motion', 'physics-gravitation', 'physics-solids', 'physics-fluids', 'physics-thermal-properties', 'physics-thermodynamics', 'physics-kinetic-theory', 'physics-oscillations', 'physics-waves'] },
        route2: { code: '02', label: 'Electricity spine', deck: 'Fields to AC', summary: 'Electrostatics, current, magnetism, induction, alternating current, and electromagnetic waves.', ids: ['physics-electric-charges', 'physics-electrostatic-potential', 'physics-current-electricity', 'physics-moving-charges', 'physics-magnetism-matter', 'physics-emi', 'physics-ac', 'physics-em-waves'] },
        route3: { code: '03', label: 'Optics-modern spine', deck: 'Light to devices', summary: 'Ray optics, wave optics, dual nature, atoms, nuclei, and semiconductor electronics.', ids: ['physics-ray-optics', 'physics-wave-optics', 'physics-dual-nature', 'physics-atoms', 'physics-nuclei', 'physics-semiconductors'] }
      }
    }, 'Physics practice'),
    chemistry: attachTopics({
      key: 'chemistry',
      label: 'Chemistry',
      code: 'CHEM',
      startPathIds: ['chem-basic-concepts', 'chem-structure-atom', 'chem-periodicity', 'chem-bonding', 'chem-thermodynamics', 'chem-organic-basics'],
      floors: chemistryFloors,
      routes: {
        all: { code: '00', label: 'Full chemistry', deck: 'All units', summary: 'Every Chemistry chapter is visible from mole concept to biomolecules.', ids: chemistryIds },
        route1: { code: '01', label: 'Physical spine', deck: 'Mole to rate', summary: 'Mole concept, thermodynamics, equilibrium, redox, solutions, electrochemistry, and kinetics.', ids: ['chem-basic-concepts', 'chem-thermodynamics', 'chem-equilibrium', 'chem-redox', 'chem-solutions', 'chem-electrochemistry', 'chem-kinetics'] },
        route2: { code: '02', label: 'Inorganic spine', deck: 'Atom to complexes', summary: 'Atomic structure, periodicity, bonding, d- and f-block elements, and coordination compounds.', ids: ['chem-structure-atom', 'chem-periodicity', 'chem-bonding', 'chem-df-block', 'chem-coordination'] },
        route3: { code: '03', label: 'Organic spine', deck: 'Carbon logic', summary: 'Organic basics, hydrocarbons, haloalkanes, alcohols, carbonyl compounds, amines, and biomolecules.', ids: ['chem-organic-basics', 'chem-hydrocarbons', 'chem-haloalkanes', 'chem-alcohols-phenols-ethers', 'chem-carbonyls', 'chem-amines', 'chem-biomolecules'] }
      }
    }, 'Chemistry practice')
  };
})();
