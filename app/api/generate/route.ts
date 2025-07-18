// app/api/generate/route.ts
import { NextResponse } from 'next/server';
import { topics } from '../chemistryData';

export async function POST(request: Request) {
  const { question } = await request.json();
  
  // Simplified AI response logic
  let response = "I'm your AI Chemistry Tutor. ";
  
  if (question.toLowerCase().includes("vsepr")) {
    response += topics.bonding.concepts[0].explanation;
  } else if (question.toLowerCase().includes("hybrid")) {
    response += topics.bonding.concepts[1].explanation;
  } else {
    response += "Ask me about chemical bonding or thermodynamics!";
  }
  
  return NextResponse.json({ response });
}import { NextResponse } from 'next/server';

/**
 * This is the server-side endpoint that the front-end will call.
 * It securely communicates with the Google Gemini API.
 */
export async function POST(request: Request) {
  try {
    // 1. Extract the user's message from the request body
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    // 2. Define the AI's persona, knowledge, and rules (System Prompt)
    // This prompt is crucial for guiding the AI and is kept secure on the server.
    const chemistrySystemPrompt = `
      You are "FuturisticChem," an expert AI chemistry tutor. Your knowledge is based on a comprehensive first-year university chemistry curriculum.

      Your capabilities include:
      1.  **Core Concepts:** Stoichiometry, atomic theory, quantum mechanics, periodic trends, chemical bonding (ionic, covalent, metallic), molecular geometry (VSEPR), and intermolecular forces.
      2.  **States of Matter:** Properties of gases (Ideal Gas Law), liquids, and solids.
      3.  **Thermodynamics & Kinetics:** Enthalpy, entropy, Gibbs free energy, reaction rates, and rate laws.
      4.  **Equilibrium:** Le Chatelier's principle, equilibrium constants (Kc, Kp), and acid-base chemistry (pH, pOH, buffers).
      5.  **Electrochemistry:** Redox reactions, balancing equations, and galvanic cells.
      6.  **Organic Chemistry:** Basic nomenclature, functional groups, and reaction types (alkanes, alkenes, alkynes).

      Your rules are:
      - **STRICTLY CHEMISTRY:** You MUST only answer questions related to chemistry. 
      - **GUARDRAIL:** If a user asks a question not about chemistry (e.g., "What is the capital of France?", "Write me a story"), you MUST politely decline. For example, say: "I am a specialized chemistry tutor and can only answer questions related to chemistry. How can I help you with a chemistry topic?"
      - **CALCULATIONS:** For any calculation problems, you MUST provide a clear, step-by-step explanation. Show the formula used, the substitution of values, and the final answer with the correct units.
      - **FORMATTING:** Use Markdown for clarity. Use subscripts for chemical formulas (e.g., H₂O) and format equations clearly.
      - **TONE:** Be helpful, encouraging, and precise in your explanations.
    `;

    // 3. Construct the final prompt for the API call
    const fullPrompt = `${chemistrySystemPrompt}\n\nUser Question: ${message}`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
    };

    // 4. Call the Google Gemini API
    // We use gemini-2.0-flash which is free for this level of use.
    // The API key should be stored in an environment variable for security.
    const apiKey = process.env.GOOGLE_API_KEY || ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error("Google API Error:", errorBody);
      return NextResponse.json({ error: 'Failed to get a response from the AI.', details: errorBody }, { status: apiResponse.status });
    }

    const result = await apiResponse.json();

    // 5. Extract and send the response back to the client
    if (result.candidates?.[0]?.content?.parts?.[0]) {
      const botResponseText = result.candidates[0].content.parts[0].text;
      return NextResponse.json({ response: botResponseText });
    } else {
      console.error("Invalid response structure from AI:", result);
      return NextResponse.json({ error: "The AI returned an unexpected response." }, { status: 500 });
    }

  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'An internal server error occurred.', details: error.message }, { status: 500 });
  }
}
