import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
  Type
} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });

const prompt = `
You are an expert document parser. Analyze the provided image, which contains a bill or invoice, and extract the required information according to the schema below. 

Instructions:
- Always use english as the response language, if bill is in another translate it.
- Carefully identify and extract each field: title, issued_date, bill_last_date, splitup (an array of splitUpLabel), total_amount, and recipient_name.
- For dates and amounts, double-check for accuracy and ensure correct formatting (e.g., YYYY-MM-DD for dates, numeric for amounts).
- If the bill contains a breakdown or splitup of charges, extract each item and include it in the splitup array. If there is no splitup, return an empty array for this field.
- If any field is missing, unreadable, unclear, or ambiguous, set its value to null.
- Do not hallucinate or infer data that is not clearly present in the image.
- Return the extracted data strictly in the structure and types defined by the schema.

`;

export async function extractBill(file: File) {
  const billImage = await ai.files.upload({
    file: file,
    config: { mimeType: file.type },
  });

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: createUserContent([
        createPartFromUri(billImage.uri!, billImage.mimeType!),
        prompt
    ]),
    config: {
        responseMimeType: 'application/json',
        responseSchema: {
            type: Type.OBJECT,
            properties:  {
                title: {
                    type: Type.STRING,
                },
                
                issued_date: {
                    type: Type.STRING
                },
                
                bill_last_date: {
                    type: Type.STRING,
                },

                splitup: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            splitUpLabel: {
                                type: Type.STRING
                            }
                        }
                    }
                },
                
                total_amount: {
                    type: Type.NUMBER
                },

                recipient_name: {
                    type: Type.STRING
                }
            }
        }
    }
  })

  return response;
}