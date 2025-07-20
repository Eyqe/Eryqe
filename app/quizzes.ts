// app/data/quizzes.ts

export const quizzes = [
  {
    id: 'q1',
    question: 'A sample of substance X weighs 95 g. If its molar mass is 19 g/mol, calculate the number of moles.',
    choices: ['5.0', '5.5', '4.7', '6.0'],
    answer: '5.0',
    hints: ['Use formula: n = mass / molar mass', 'Unit of molar mass is g/mol']
  },
  {
    id: 'q2',
    question: 'At STP, what is the volume occupied by 1 mole of an ideal gas?',
    choices: ['22.4 dm³', '1.0 dm³', '24.0 dm³', '0.5 dm³'],
    answer: '22.4 dm³',
    hints: ['At STP, 1 mol = 22.4 dm³', 'Standard Temperature and Pressure']
  },
  {
    id: 'q3',
    question: 'In the reaction: Zn + Cu²⁺ → Zn²⁺ + Cu, which species is oxidized?',
    choices: ['Zn', 'Cu', 'Zn²⁺', 'Cu²⁺'],
    answer: 'Zn',
    hints: ['Oxidation is loss of electrons', 'Zn becomes Zn²⁺']
  },
  {
    id: 'q4',
    question: 'What is the pH of a 0.001 M HCl solution?',
    choices: ['3', '1', '4', '2'],
    answer: '3',
    hints: ['pH = -log[H⁺]', 'HCl is a strong acid']
  },
  {
    id: 'q5',
    question: 'Which type of bonding involves the sharing of electrons between nonmetals?',
    choices: ['Ionic', 'Metallic', 'Covalent', 'Hydrogen'],
    answer: 'Covalent',
    hints: ['Occurs between nonmetals', 'Electrons are shared']
  },
  {
    id: 'q6',
    question: 'In an exothermic reaction, which statement is true?',
    choices: ['Heat is released to the surroundings', 'Temperature of surroundings decreases', 'Products have more energy than reactants', 'ΔH is positive'],
    answer: 'Heat is released to the surroundings',
    hints: ['Exothermic = heat exits', 'ΔH is negative']
  },
  {
    id: 'q7',
    question: 'Which statement is true about isotopes?',
    choices: ['They have the same number of protons but different neutrons', 'They have different numbers of protons', 'They are different elements', 'They have different electron numbers'],
    answer: 'They have the same number of protons but different neutrons',
    hints: ['Isotopes = same element, different mass']
  },
  {
    id: 'q8',
    question: 'What is the empirical formula of a compound with 40% C, 6.7% H, and 53.3% O?',
    choices: ['CH2O', 'C2H4O2', 'C3H6O3', 'CHO'],
    answer: 'CH2O',
    hints: ['Convert % to mol', 'Divide by smallest number of mol']
  },
  {
    id: 'q9',
    question: 'In a reversible reaction at equilibrium, increasing temperature favors the ____ reaction if the forward reaction is exothermic.',
    choices: ['reverse', 'forward', 'neutral', 'no effect'],
    answer: 'reverse',
    hints: ["Le Chatelier's Principle", 'Heat acts like a product in exothermic']
  },
  {
    id: 'q10',
    question: 'Which compound is correctly classified as an alkene?',
    choices: ['C2H4', 'C2H6', 'C3H8', 'CH4'],
    answer: 'C2H4',
    hints: ['Alkenes have C=C double bond', 'Follow CnH2n']
  },
  {
    id: 'q11',
    question: 'Which of the following gases will diffuse the fastest under the same conditions?',
    choices: ['O₂', 'N₂', 'Cl₂', 'H₂'],
    answer: 'H₂',
    hints: ['Use Graham’s Law of Diffusion', 'Lighter gases diffuse faster']
  },
  {
    id: 'q12',
    question: 'A sample of gas occupies 3.0 L at 1.0 atm. What is its volume at 2.0 atm, assuming temperature is constant?',
    choices: ['1.5 L', '6.0 L', '2.0 L', '3.5 L'],
    answer: '1.5 L',
    hints: ['Use Boyle’s Law: P₁V₁ = P₂V₂', 'Pressure and volume are inversely proportional']
  },
  {
    id: 'q13',
    question: 'Calculate the enthalpy change for a reaction that releases 250 kJ of heat.',
    choices: ['-250 kJ', '+250 kJ', '0 kJ', '-500 kJ'],
    answer: '-250 kJ',
    hints: ['Exothermic reactions have negative ΔH', 'Heat is released']
  },
  {
    id: 'q14',
    question: 'Which substance acts as a Brønsted-Lowry base?',
    choices: ['NH₃', 'HCl', 'H₂SO₄', 'H₂O₂'],
    answer: 'NH₃',
    hints: ['Base is a proton (H⁺) acceptor', 'NH₃ accepts H⁺']
  },
  {
    id: 'q15',
    question: 'How many moles are in 11.2 dm³ of CO₂ gas at STP?',
    choices: ['0.5 mol', '1 mol', '2 mol', '5 mol'],
    answer: '0.5 mol',
    hints: ['At STP, 1 mol = 22.4 dm³', 'n = V / 22.4']
  },
  {
    id: 'q16',
    question: 'Which of the following is a redox reaction?',
    choices: ['Zn + HCl → ZnCl₂ + H₂', 'NaOH + HCl → NaCl + H₂O', 'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl', 'H₂CO₃ → H₂O + CO₂'],
    answer: 'Zn + HCl → ZnCl₂ + H₂',
    hints: ['Redox involves transfer of electrons', 'Zn is oxidized, H⁺ is reduced']
  },
  {
    id: 'q17',
    question: 'Determine the oxidation number of S in H₂SO₄.',
    choices: ['+6', '+4', +2', '+1'],
    answer: '+6',
    hints: ['H = +1, O = -2, total charge = 0', 'Solve: 2(+1) + x + 4(-2) = 0']
  },
  {
    id: 'q18',
    question: 'Which has the highest boiling point due to hydrogen bonding?',
    choices: ['H₂O', 'CH₄', 'NH₃', 'H₂S'],
    answer: 'H₂O',
    hints: ['Hydrogen bonding strongest in H₂O', 'More H-bonding = higher boiling point']
  },
  {
    id: 'q19',
    question: 'Which formula is correct for calcium phosphate?',
    choices: ['Ca₃(PO₄)₂', 'Ca₂(PO₄)₃', 'CaPO₄', 'Ca₄P₂O₈'],
    answer: 'Ca₃(PO₄)₂',
    hints: ['Ca²⁺ and PO₄³⁻ must balance charges', 'Cross charges: Ca (2+), PO₄ (3−)']
  },
  {
    id: 'q20',
    question: 'Which of the following increases the rate of a chemical reaction?',
    choices: ['Increasing temperature', 'Decreasing concentration', 'Using smaller surface area', 'Lowering pressure (gas)'],
    answer: 'Increasing temperature',
    hints: ['More kinetic energy → more frequent & effective collisions']
  },
  {
    id: 'q21',
    question: 'What volume of 0.500 M NaOH is required to neutralize 25.0 mL of 0.250 M H₂SO₄?',
    choices: ['12.5 mL', '25.0 mL', '37.5 mL', '50.0 mL'],
    answer: '50.0 mL',
    hints: ['Use M₁V₁/n₁ = M₂V₂/n₂', 'n(H₂SO₄) = 2, n(NaOH) = 1']
  },
  {
    id: 'q22',
    question: 'Which compound has the highest percentage of nitrogen by mass?',
    choices: ['NH₃', 'NH₄NO₃', 'N₂H₄', 'NO₂'],
    answer: 'NH₃',
    hints: ['% by mass = (total mass of N / molar mass) × 100', 'Compare all options']
  },
  {
    id: 'q23',
    question: 'Which substance acts as an oxidizing agent in the following reaction: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂?',
    choices: ['Cl₂', 'Br⁻', 'Cl⁻', 'Br₂'],
    answer: 'Cl₂',
    hints: ['Oxidizing agent is reduced', 'Cl₂ gains electrons to form Cl⁻']
  },
  {
    id: 'q24',
    question: 'Which of the following mixtures is a buffer?',
    choices: ['CH₃COOH + CH₃COONa', 'HCl + NaCl', 'NaOH + NaCl', 'CH₃COONa + NaOH'],
    answer: 'CH₃COOH + CH₃COONa',
    hints: ['Buffer = weak acid + conjugate base', 'CH₃COOH is weak acid, CH₃COONa is conjugate base']
  },
  {
    id: 'q25',
    question: 'What is the pH of a 1.0 × 10⁻⁴ M HCl solution?',
    choices: ['2', '4', '10', '6'],
    answer: '4',
    hints: ['Strong acid → [H⁺] = 1.0 × 10⁻⁴', 'pH = -log[H⁺]']
  },
  {
    id: 'q26',
    question: 'Which molecule has a trigonal planar shape?',
    choices: ['BF₃', 'CH₄', 'NH₃', 'H₂O'],
    answer: 'BF₃',
    hints: ['Trigonal planar: 3 bonding, 0 lone pairs', 'BF₃ fits this geometry']
  },
  {
    id: 'q27',
    question: 'Determine the empirical formula for a compound with 40% C, 6.7% H, and 53.3% O.',
    choices: ['CH₂O', 'C₂H₄O₂', 'C₃H₆O₃', 'C₂H₂O'],
    answer: 'CH₂O',
    hints: ['Convert % to moles', 'Divide all moles by the smallest']
  },
  {
    id: 'q28',
    question: 'Which orbital has the highest energy in a multi-electron atom?',
    choices: ['3d', '4s', '2p', '3p'],
    answer: '3d',
    hints: ['Aufbau principle order', '3d fills after 4s']
  },
  {
    id: 'q29',
    question: 'Which of the following reactions is endothermic?',
    choices: ['Photosynthesis', 'Combustion of methane', 'Neutralization', 'Freezing of water'],
    answer: 'Photosynthesis',
    hints: ['Endothermic absorbs energy', 'Sunlight absorbed during photosynthesis']
  },
  {
    id: 'q30',
    question: 'If 0.5 mol of gas at 300 K occupies 10 L, what is the pressure? (R = 0.0821 L·atm/mol·K)',
    choices: ['1.23 atm', '2.46 atm', '0.82 atm', '1.50 atm'],
    answer: '1.23 atm',
    hints: ['Use PV = nRT', 'P = nRT / V']
  }, 
    {
    id: 'q31',
    question: 'What is the number of atoms in 1.50 mol of aluminum?',
    choices: ['9.03 × 10²³', '1.50 × 10²³', '3.01 × 10²³', '6.02 × 10²³'],
    answer: '9.03 × 10²³',
    hints: ['Use Avogadro’s number: 6.02 × 10²³ atoms/mol', '1.50 × 6.02 × 10²³']
  },
  {
    id: 'q32',
    question: 'How many grams of NaCl are needed to prepare 250 mL of 0.500 M NaCl solution?',
    choices: ['7.31 g', '12.5 g', '4.25 g', '5.84 g'],
    answer: '7.31 g',
    hints: ['Use: mass = mol × molar mass', 'mol = M × V = 0.500 × 0.250']
  },
  {
    id: 'q33',
    question: 'What is the limiting reagent when 2 mol of H₂ reacts with 1 mol of O₂ in 2H₂ + O₂ → 2H₂O?',
    choices: ['H₂', 'O₂', 'H₂O', 'None'],
    answer: 'H₂',
    hints: ['Divide moles by stoichiometric coefficient', '2/2 = 1; 1/1 = 1']
  },
  {
    id: 'q34',
    question: 'Calculate the volume of gas (at STP) produced when 5.00 g of CaCO₃ is decomposed.',
    choices: ['1.12 L', '2.24 L', '3.36 L', '4.48 L'],
    answer: '1.12 L',
    hints: ['CaCO₃ → CaO + CO₂', 'mol = mass / M, V = mol × 22.4']
  },
  {
    id: 'q35',
    question: 'A 10.0 g sample of compound contains 3.0 g C, 1.0 g H, and 6.0 g O. What is its empirical formula?',
    choices: ['CH₂O', 'C₃H₁₀O₄', 'C₂H₄O₂', 'C₃H₆O₃'],
    answer: 'CH₂O',
    hints: ['Convert g to mol, divide by smallest', 'Simplify to whole number ratio']
  },
  {
    id: 'q36',
    question: 'Determine the % yield if actual yield is 15.0 g and theoretical yield is 20.0 g.',
    choices: ['75%', '80%', '70%', '60%'],
    answer: '75%',
    hints: ['% yield = (actual / theoretical) × 100', '15 / 20 × 100']
  },
  {
    id: 'q37',
    question: 'How many molecules are there in 2.50 g of CO₂?',
    choices: ['3.42 × 10²²', '4.15 × 10²³', '6.02 × 10²³', '2.50 × 10²³'],
    answer: '3.42 × 10²²',
    hints: ['mol = mass / M = 2.50 / 44.0', 'mol × Avogadro’s number']
  },
  {
    id: 'q38',
    question: 'What is the molarity of 4.00 g NaOH dissolved in 500 mL of water?',
    choices: ['0.20 M', '0.10 M', '0.25 M', '0.50 M'],
    answer: '0.20 M',
    hints: ['mol = 4.00 / 40.0 = 0.1 mol', 'M = mol / L = 0.1 / 0.5']
  },
  {
    id: 'q39',
    question: 'Balance the equation: C₄H₁₀ + O₂ → CO₂ + H₂O.',
    choices: ['2,13,8,10', '1,6.5,4,5', '2,6.5,4,5', '2,13,4,10'],
    answer: '2,13,8,10',
    hints: ['Balance C then H then O', 'Use fractions if needed then multiply all']
  },
  {
    id: 'q40',
    question: 'How many moles of Al are required to produce 1.5 mol of H₂ in: 2Al + 6HCl → 2AlCl₃ + 3H₂?',
    choices: ['1.0 mol', '2.0 mol', '3.0 mol', '1.5 mol'],
    answer: '1.0 mol',
    hints: ['Use mole ratio H₂:Al = 3:2', 'Al = 1.5 × (2/3)']
  },
  {
    id: 'q41',
    question: 'What is the empirical formula of a compound with 70% Fe and 30% O by mass?',
    choices: ['Fe₂O₃', 'FeO', 'Fe₃O₄', 'Fe₂O'],
    answer: 'Fe₃O₄',
    hints: ['Convert to mol: Fe = 70/55.85, O = 30/16', 'Simplify the ratio']
  },
  {
    id: 'q42',
    question: 'How many moles of Na are present in 46.0 g of Na?',
    choices: ['2 mol', '1 mol', '0.5 mol', '3 mol'],
    answer: '2 mol',
    hints: ['mol = mass / molar mass', '46.0 / 23.0']
  },
  {
    id: 'q43',
    question: 'What mass of oxygen is required to completely combust 32.0 g of methane (CH₄)?',
    choices: ['128 g', '64 g', '96 g', '80 g'],
    answer: '128 g',
    hints: ['CH₄ + 2O₂ → CO₂ + 2H₂O', 'mol CH₄ = 2, mol O₂ = 4, mass = mol × 32']
  },
  {
    id: 'q44',
    question: 'Which is the correct mole ratio in: 4Fe + 3O₂ → 2Fe₂O₃?',
    choices: ['4:3:2', '3:4:2', '2:3:4', '2:4:3'],
    answer: '4:3:2',
    hints: ['Use coefficients directly from balanced equation']
  },
  {
    id: 'q45',
    question: 'A sample contains 0.1 mol of Mg. How many atoms of Mg are present?',
    choices: ['6.02 × 10²²', '6.02 × 10²³', '3.01 × 10²²', '1.00 × 10²²'],
    answer: '6.02 × 10²²',
    hints: ['0.1 mol × 6.02 × 10²³']
  },
  {
    id: 'q46',
    question: 'Which of the following gives the correct molar mass of (NH₄)₂SO₄?',
    choices: ['132 g/mol', '118 g/mol', '96 g/mol', '142 g/mol'],
    answer: '132 g/mol',
    hints: ['N: 14×2, H: 1×8, S: 32, O: 16×4']
  },
  {
    id: 'q47',
    question: 'In a reaction, 0.20 mol of A produces 0.15 mol of B. What is the % yield?',
    choices: ['75%', '80%', '60%', '85%'],
    answer: '75%',
    hints: ['% yield = (actual / theoretical) × 100']
  },
  {
    id: 'q48',
    question: 'Calculate the number of water molecules in 0.18 g of H₂O.',
    choices: ['6.02 × 10²¹', '6.02 × 10²²', '1.00 × 10²²', '3.00 × 10²¹'],
    answer: '6.02 × 10²¹',
    hints: ['mol = 0.18 / 18.0', 'mol × Avogadro’s number']
  },
  {
    id: 'q49',
    question: 'What is the % composition of C in C₂H₆?',
    choices: ['80%', '60%', '40%', '33%'],
    answer: '80%',
    hints: ['C mass = 24, total molar mass = 30', '24/30 × 100']
  },
  {
    id: 'q50',
    question: 'Which of the following represents a redox reaction?',
    choices: ['Zn + Cu²⁺ → Zn²⁺ + Cu', 'NaCl → Na⁺ + Cl⁻', 'HCl + NaOH → NaCl + H₂O', 'AgNO₃ + NaCl → AgCl + NaNO₃'],
    answer: 'Zn + Cu²⁺ → Zn²⁺ + Cu',
    hints: ['Redox = transfer of electrons', 'Zn is oxidized, Cu²⁺ is reduced']
  },
]
