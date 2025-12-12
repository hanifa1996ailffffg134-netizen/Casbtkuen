import { supabase } from "./supabase.js";

alert("auth.js شغال");

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  msg.innerText = "جاري تسجيل الدخول...";

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    window.location.href = "home.html";
  }
};

window.signup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  msg.innerText = "جاري إنشاء الحساب...";

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    msg.innerText = "✅ تم إنشاء الحساب";
    window.location.href = "home.html";
  }
};
