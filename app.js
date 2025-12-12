function $(id){return document.getElementById(id);}
function money(n){return Number(n||0).toFixed(2);}
function safeText(x){return (x??"").toString();}
function badgeClass(status){
  const s=(status||"pending").toLowerCase();
  if(s==="approved") return "approved";
  if(s==="rejected") return "rejected";
  return "pending";
}
async function getSession(){
  const { data, error } = await supabase.auth.getSession();
  if(error) console.error(error);
  return data?.session || null;
}
async function requireAuth(redirectTo="index.html"){
  const session = await getSession();
  if(!session){ location.href = redirectTo; return null; }
  return session;
}
async function logout(){
  await supabase.auth.signOut();
  location.href="index.html";
}
function setNav(active){
  document.querySelectorAll(".nav a").forEach(a=>{
    if(a.dataset.nav===active) a.classList.add("active");
  });
}
const ADMIN_EMAIL = "am.alsus1995@gmail.com";
async function isAdminEmail(){
  const session = await getSession();
  return !!(session && session.user && session.user.email===ADMIN_EMAIL);
}
