export const logout = () => {
  // remove stored tokens & user info
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  window.location.href = "/";
};
