export default function(language = 'fr', action) {
  if (action.type === 'switchLanguage') {
    return action.language;
  } 
    return language;
  
}
