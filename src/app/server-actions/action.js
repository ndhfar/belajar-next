"use server";

export async function createNotesAction(formData) {
  const notes = formData.get("notes");

  console.log({ notes });
}
