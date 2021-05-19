// called upon successful user authentication and login
// logs basic profile info and id token
function onSignIn(googleUser) {
  console.log('onSignIn');
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  const id_token = googleUser.getAuthResponse().id_token;
  console.log('ID Token: ' + id_token);
}
