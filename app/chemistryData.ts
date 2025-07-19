// app/chemistryData.ts
export const topics = {
  bonding: {
    title: "Chemical Bonding",
    concepts: [
      {
        name: "VSEPR Theory",
        explanation: "Valence Shell Electron Pair Repulsion theory predicts molecular geometry based on electron pair repulsion.",
        examples: ["CH₄: Tetrahedral", "NH₃: Trigonal pyramidal"],
        visualization: "CH4"
      },
      {
        name: "Hybridization",
        explanation: "Mixing of atomic orbitals to form new hybrid orbitals.",
        examples: ["sp³ in methane", "sp² in ethene"],
        visualization: "C2H4"
      }
    ]
  },
  thermodynamics: {
    title: "Thermodynamics",
    concepts: [
      {
        name: "First Law",
        explanation: "ΔU = Q - W (Change in internal energy = Heat added - Work done)",
        examples: ["Exothermic reactions: ΔH < 0", "Endothermic reactions: ΔH > 0"],
        equation: "ΔU = Q - W"
      }
    ]
  }
};

export const molecules = {
  CH4: `HETATM 1  C   CH4 A   1       0.000   0.000   0.000  1.00  0.00           C  
HETATM 2  H1  CH4 A   1       0.629   0.629   0.629  1.00  0.00           H  
HETATM 3  H2  CH4 A   1      -0.629  -0.629   0.629  1.00  0.00           H  
HETATM 4  H3  CH4 A   1      -0.629   0.629  -0.629  1.00  0.00           H  
HETATM 5  H4  CH4 A   1       0.629  -0.629  -0.629  1.00  0.00           H  
END`,
  // Add more molecules here
};
