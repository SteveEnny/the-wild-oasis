import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Cabin could not load");
    throw new Error("Cabin cold not be loaded");
  }
  return data;
}

export async function createCabin(newCabin, id) {
  //https://jpafgqxuugdrcazdiztx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  console.log(newCabin, id);
  // const { data: imgData } = supabase.storage
  //   .from("cabins")
  //   .getPublicUrl(newCabin.image.name);

  //1 Create Cabin
  const hasImagePath = newCabin.image?.startWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // let query = supabase.from("cabins");
  // Insert
  // if (!id) {
  //   console.log(imagePath, imgData.publicUrl);
  //   query = query.insert([{ ...newCabin, image: imagePath }]).select();
  // }
  // //Edit
  // if (id) {
  //   console.log(imagePath);
  //   query = query
  //     .update({
  //       ...newCabin,
  //       image: imagePath,
  //     })
  //     .eq("id", id)
  //     .select();
  // }
  console.log(imagePath);
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
