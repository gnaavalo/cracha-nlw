function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/gnaavalo'

  fetch(url)
    .then(response => response.json())
    .then(data => {})
}
getGitHubProfileInfos()
