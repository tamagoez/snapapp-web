import supabase from "../utils/supabase";
export async function login(
  email: string,
  phone: string,
  password: string,
  key: string
) {
  if (!password) return "NPW";
  if (!phone) {
    if (!email) return "NE";
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      return "success";
    } catch (error) {
      console.error(error.message);
      return error.message;
    }
  } else {
    if (!phone) return "NP";
    try {
      const { user, session, error } = await supabase.auth.signIn({
        phone: phone,
        password: password,
      });
      if (error) throw error;
      return "success";
    } catch (error) {
      console.error(error.message);
      return error.message;
    }
  }
}
export async function signup(
  email: string,
  phone: string,
  password: string,
  key: string
) {
  if (!password) return "NPW";
  if (!phone) {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      return "success";
    } catch (error) {
      console.error(error.message);
      return error.message;
    }
  }
}

export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
}

export function isAuthed() {
  const session = supabase.auth.session();
  // console.dir(session);
  if (!session) return false;
  if (session.user.aud === "authenticated") {
    return true;
  } else {
    return false;
  }
}

export function userdata() {
  const session = supabase.auth.session();
  console.dir(session);
  if (!session) return null;
  return session.user;
}

export async function getdata(id){
  try {
    const { data, error } = await supabase
      .from('user')
      .select('name, iconurl')
      .eq('userid', id)
    if (error) throw error;
    return data
} catch (error) {console.error(error.message)}
}

export async function allavatarid() {
  const session = supabase.auth.session();
  // console.dir(session);
  if (!session) return false;
  try {
    const { data, error } = await supabase
      .from('user_avatar')
      .select('id')
      .eq('originalid', session.user.id)
    if (error) throw error;
    return data
} catch (error) {console.error(error.message)}
}