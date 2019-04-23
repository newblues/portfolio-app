export default function(language = 'fr', action){
  console.log('dans mon reducer', action.language)
  if(action.type === 'switchLanguage'){
  return action.language
  } else {
    return language;
  }
}
