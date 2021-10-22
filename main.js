const LinksSocialMedia = {
    github: "Michael-Platini",
    youtube: "UCso0_cTsK3T6VDWykTg_VBg",
    twitter: "PLATINI_MICHAEL",
    facebook: "michael.platini.902",
    instagram: "michaelp_ferreira"
    
  }
 
  function changeSocialMediaLinks(){
    
   for(let li of socialLinks.children) {
     const social= li.getAttribute('class')
     
     li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
     
   }

  }
  
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent= data.name
      userLink.href= data.html_url
      userImage.src= data.avatar_url
      userLogin.textContent = data.login
    })
  }
  
   getGitHubProfileInfos()

   //Arrow Functions
   function nomedafuncao(argumentos){
    
   }

   