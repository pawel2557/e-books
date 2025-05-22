import { supabase } from "../lib/supabaseClient";

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;

  sessionStorage.setItem("access_token", data.session.access_token);
  sessionStorage.setItem("user_id", data.user.id);
  sessionStorage.setItem("user_email", data.user.email);

  return data;
}
export async function registerUser({ name, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  });

  if (error) throw error;

  return data;
}