import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabin could not load");
    throw new Error("Cabin cold not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  //https://jpafgqxuugdrcazdiztx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  console.log(imageName);
  //1 Create Cabin
  const imagePath = `https:jpafgqxuugdrcazdiztx.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error("Cabin could not load");
    throw new Error("Cabin could not be created");
  }

  //2. Upload image.

  // const avatarFile /= event.target.files[0];
  const { error: imgError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (imgError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Cabin image could not load");
    throw new Error(
      "Cabin image could not be updated and the cabin was not created"
    );
  }
  return data;
}

// Delete Cabin
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error("Cabin could not load");
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
